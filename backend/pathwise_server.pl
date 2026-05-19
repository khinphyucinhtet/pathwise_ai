:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_cors)).
:- use_module(library(lists)).

:- set_setting(http:cors, [*]).

:- http_handler(root(api/assess), assess_handler, [method(post)]).
:- http_handler(root(api/assess), options_handler, [method(options)]).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

main :-
    Port = 8080,
    server(Port),
    format("PathWise Prolog server running at http://localhost:~w~n", [Port]),
    thread_get_message(_).

:- initialization(main, main).

options_handler(Request) :-
    cors_enable(Request, [methods([post, options])]),
    format('~n').

assess_handler(Request) :-
    cors_enable(Request, [methods([post, options])]),
    catch(
        (
            http_read_json_dict(Request, Input),
            assess(Input, Output),
            reply_json_dict(Output)
        ),
        Error,
        (
            message_to_string(Error, Detail),
            reply_json_dict(_{error:"Assessment failed", detail:Detail}, [status(500)])
        )
    ).

% Core fuzzy operators used by the PathWise intelligent system demo.
fuzzy_and(A, B, Result) :-
    Result is min(A, B).

fuzzy_or(A, B, Result) :-
    Result is max(A, B).

high_risk(Stress, Urgency, Degree) :-
    fuzzy_and(Stress, Urgency, Degree).

support_risk(Input, Risk) :-
    number_value(Input, support, 0.5, Risk).

isolation_risk(Input, Risk) :-
    number_value(Input, isolation, 0.5, Risk).

sleep_risk(Input, Risk) :-
    (   number_value(Input, sleepRisk, 0.3, DirectRisk),
        get_dict(sleepRisk, Input, _)
    ->  Risk = DirectRisk
    ;   number_value(Input, sleepHours, 7, Hours),
        sleep_hours_risk(Hours, Risk)
    ).

mood_risk(Input, Risk) :-
    number_value(Input, moodRisk, 0.4, Risk).

final_risk(Input, FinalRisk) :-
    number_value(Input, stress, 0.5, Stress),
    number_value(Input, urgency, 0.6, Urgency),
    support_risk(Input, SupportRisk),
    isolation_risk(Input, IsolationRisk),
    sleep_risk(Input, SleepRisk),
    mood_risk(Input, MoodRisk),
    high_risk(Stress, Urgency, HighRisk),
    max_list([HighRisk, SupportRisk, IsolationRisk, SleepRisk, MoodRisk], RawRisk),
    round2(RawRisk, FinalRisk).

risk_category(Score, high) :-
    Score >= 0.8,
    !.
risk_category(Score, medium) :-
    Score >= 0.4,
    !.
risk_category(_, low).

queue_priority(high, "URGENT SUPPORT", "0-2 hrs", "#1 in queue",
               "Immediate job-matching and interview support",
               "Immediate counselling, job support, and mentor contact").
queue_priority(medium, "PRIORITY SUPPORT", "12-24 hrs", "#7 in queue",
               "Guided resume and job application support",
               "Guided resume review, job application support, and interview preparation").
queue_priority(low, "STANDARD SUPPORT", "2-3 days", "#18 in queue",
               "General career exploration and wellbeing guidance",
               "General career exploration, resume polish, and weekly progress tracking").

strategy_decision(high, immediate_support, 90).
strategy_decision(medium, guided_support, 70).
strategy_decision(low, general_support, 40).

iot_assessment(Input, HeartRate, SleepHours, Activity, IotRisk) :-
    number_value(Input, stress, 0.5, Stress),
    DefaultHeartRate is round(68 + (Stress * 35)),
    number_value(Input, heartRate, DefaultHeartRate, HeartRate),
    number_value(Input, sleepHours, 7, SleepHours),
    text_value(Input, activity, medium, Activity),
    heart_rate_risk(HeartRate, HeartRisk),
    sleep_hours_risk(SleepHours, SleepRisk),
    activity_risk(Activity, ActivityRisk),
    max_list([HeartRisk, SleepRisk, ActivityRisk], RawIotRisk),
    round2(RawIotRisk, IotRisk).

heart_rate_risk(HeartRate, 0.8) :-
    HeartRate >= 100,
    !.
heart_rate_risk(HeartRate, 0.5) :-
    HeartRate >= 86,
    !.
heart_rate_risk(_, 0.2).

sleep_hours_risk(Hours, 0.9) :-
    Hours < 4,
    !.
sleep_hours_risk(Hours, 0.7) :-
    Hours < 6,
    !.
sleep_hours_risk(Hours, 0.3) :-
    Hours =< 8,
    !.
sleep_hours_risk(_, 0.2).

activity_risk(low, 0.8) :- !.
activity_risk(medium, 0.5) :- !.
activity_risk(high, 0.2) :- !.
activity_risk(_, 0.5).

assess(Input, Output) :-
    text_value(Input, person, custom, Person),
    final_risk(Input, RiskScore),
    risk_category(RiskScore, Category),
    queue_priority(Category, Queue, WaitTime, Position, Action, Plan),
    strategy_decision(Category, Strategy, Utility),
    iot_assessment(Input, HeartRate, SleepHours, Activity, IotRisk),
    FinalRiskWithIotRaw is max(RiskScore, IotRisk),
    round2(FinalRiskWithIotRaw, FinalRiskWithIot),
    build_xai(Input, RiskScore, Queue, Position, Category, WaitTime, Action, IotRisk, Xai),
    format(string(DetectionAgent), "Detected risk score is ~2f", [RiskScore]),
    format(string(DecisionAgent), "Classified the user as ~w risk", [Category]),
    format(string(SupportAgent), "Assigned ~w, ~w, response time ~w", [Queue, Position, WaitTime]),
    Output = _{
        person: Person,
        fuzzy: _{
            riskScore: RiskScore,
            category: Category,
            queue: Queue,
            waitTime: WaitTime,
            position: Position,
            action: Action
        },
        agents: _{
            detectionAgent: DetectionAgent,
            decisionAgent: DecisionAgent,
            planningAgent: Plan,
            supportAgent: SupportAgent
        },
        strategy: _{
            selected: Strategy,
            utility: Utility,
            reason: "The strategy was selected based on the current risk level and support priority."
        },
        iot: _{
            heartRate: HeartRate,
            sleepHours: SleepHours,
            activity: Activity,
            iotRisk: IotRisk,
            finalRiskWithIot: FinalRiskWithIot
        },
        xai: Xai,
        ethics: [
            "Privacy: Only necessary wellbeing and career data should be collected.",
            "Fairness: Support priority should not discriminate against users.",
            "Transparency: The system must explain why each decision was made.",
            "Human Control: Final serious decisions should involve a human advisor.",
            "Limitation: This is a support tool, not a medical diagnosis system."
        ]
    }.

build_xai(Input, RiskScore, Queue, Position, Category, WaitTime, Action, IotRisk, Xai) :-
    number_value(Input, stress, 0.5, Stress),
    number_value(Input, urgency, 0.6, Urgency),
    support_risk(Input, SupportRisk),
    isolation_risk(Input, IsolationRisk),
    sleep_risk(Input, SleepRisk),
    mood_risk(Input, MoodRisk),
    high_risk(Stress, Urgency, HighRisk),
    format(string(InputFactors),
           "stress=~2f, urgency=~2f, no_support=~2f, social_isolation=~2f, sleep=~2f, mood=~2f, iot=~2f",
           [Stress, Urgency, SupportRisk, IsolationRisk, SleepRisk, MoodRisk, IotRisk]),
    format(string(Explanation),
           "The user was assigned this priority because the combined fuzzy risk score is ~2f, based on stress, urgency, support, social isolation, sleep, mood, and IoT signals.",
           [RiskScore]),
    format(string(FuzzyStep), "highRisk = min(~2f, ~2f) = ~2f", [Stress, Urgency, HighRisk]),
    format(string(FinalStep),
           "finalRisk = max(~2f, ~2f, ~2f, ~2f, ~2f) = ~2f",
           [HighRisk, SupportRisk, IsolationRisk, SleepRisk, MoodRisk, RiskScore]),
    format(string(DecisionReason),
           "Based on the given stress, urgency, support, social isolation, sleep, mood, and IoT signals, the system assigned the user to ~w at ~w because the final risk score is ~2f.",
           [Queue, Position, RiskScore]),
    Xai = _{
        inputFactors: InputFactors,
        explanation: Explanation,
        fuzzyStep: FuzzyStep,
        finalStep: FinalStep,
        decisionReason: DecisionReason,
        category: Category,
        queue: Queue,
        waitTime: WaitTime,
        action: Action
    }.

number_value(Dict, Key, Default, Value) :-
    (   get_dict(Key, Dict, Raw),
        to_number(Raw, Parsed)
    ->  Value = Parsed
    ;   Value = Default
    ).

to_number(Value, Value) :-
    number(Value),
    !.
to_number(Value, Number) :-
    string(Value),
    number_string(Number, Value),
    !.
to_number(Value, Number) :-
    atom(Value),
    atom_number(Value, Number).

text_value(Dict, Key, Default, Value) :-
    (   get_dict(Key, Dict, Raw)
    ->  normalize_text(Raw, Value)
    ;   Value = Default
    ).

normalize_text(Value, Lower) :-
    atom(Value),
    !,
    downcase_atom(Value, Lower).
normalize_text(Value, Lower) :-
    string(Value),
    !,
    string_lower(Value, LowerString),
    atom_string(Lower, LowerString).
normalize_text(Value, Atom) :-
    number(Value),
    atom_number(Atom, Value).

round2(Value, Rounded) :-
    Rounded is round(Value * 100) / 100.
