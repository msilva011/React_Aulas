export function editTarefa(id, nome) {
  fetch("http://127.0.0.1:3001/tarefas", {
    method: "PUT",
    body: JSON.stringify({ _id: id, nome: nome }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((json) => {
      alert(json);
    });
}
