# PathWise AI Local Prolog Backend

This folder adds a local SWI-Prolog backend demo for PathWise AI. GitHub Pages will still use the normal frontend JavaScript simulation, because GitHub Pages cannot run a Prolog server.

## What This Backend Does

- Receives wellbeing and career urgency inputs from the website.
- Runs fuzzy logic and multi-agent decision rules in SWI-Prolog.
- Returns JSON for the website to display.
- Demonstrates the intelligent system logic behind the PathWise AI prototype.

## 1. Install SWI-Prolog

Download and install SWI-Prolog from:

https://www.swi-prolog.org/download/stable

After installing, restart VS Code or your terminal so the `swipl` command is available.

## 2. Run The Prolog Server

Open a terminal in the project folder:

```powershell
cd "C:\Users\user\OneDrive\Documents\Hackathon\pathwise ai"
swipl backend/pathwise_server.pl
```

Expected output:

```text
PathWise Prolog server running at http://localhost:8080
```

Keep this terminal open while testing the website.

## 3. Run The Website

Open another terminal in the same project folder and run either VS Code Live Server or:

```powershell
python -m http.server 5500
```

Then visit:

```text
http://localhost:5500
```

## 4. Test The Demo

1. Open the PathWise AI website.
2. Go to `AI Job Priority & Support Matching`.
3. Click `Scenario 1: Ryan`.
4. Click `Run Fuzzy Risk Assessment`.
5. The website will try to use the Prolog backend first.
6. If the backend is running, the badge shows `Reasoning Mode: Prolog Backend (Local)`.
7. If the backend is not running, the website automatically falls back to frontend simulation.

## Notes

- This backend is for local hackathon demonstration only.
- The hosted GitHub Pages version still works offline using JavaScript placeholder logic.
- This is not a medical diagnosis system. It is a career support and intelligent-system prototype.
