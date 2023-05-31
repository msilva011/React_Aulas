export function createTarefa(nome) {
  fetch("http://127.0.0.1:3001/tarefas", {
    method: "POST",
    body: JSON.stringify({ nome: nome }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      alert(json);
    });
}
