// GitHub Pages cannot run SWI-Prolog, so PathWise AI always keeps the
// frontend simulation as a fallback. Local demos can start the Prolog server
// and this helper will send the same assessment inputs to that backend.
async function assessWithPrologBackend(payload) {
  try {
    const response = await fetch("http://localhost:8080/api/assess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Prolog backend error");
    }

    return await response.json();
  } catch (error) {
    console.error("Cannot connect to Prolog backend:", error);
    return null;
  }
}

window.assessWithPrologBackend = assessWithPrologBackend;
