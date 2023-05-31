import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tarefa from "../components/Tarefa";

export default function IndexPage() {
  const [tarefas, setTarefas] = useState();
  const navigate = useNavigate();

  function getTarefas() {
    fetch("http://127.0.0.1:3001/tarefas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        setTarefas(json);
      });
  }
  useEffect(() => {
    getTarefas();
  });
  return (
    <>
      <div align="center">
        <h1>Tarefas</h1>
        <button className="btn btn-success" onClick={() => navigate("/criar")}>
          Nova Tarefa
        </button>
        <table>
          <tr>
            <td>
              {tarefas &&
                tarefas.map((tarefa) => {
                  return (
                    <Tarefa
                      key={tarefa._id}
                      id={tarefa._id}
                      nome={tarefa.nome}
                    />
                  );
                })}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
