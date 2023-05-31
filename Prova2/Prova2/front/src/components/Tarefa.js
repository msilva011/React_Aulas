import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTarefa } from "../Functions/deleteTarefa";

function Tarefa({ id, nome }) {
  const navigate = useNavigate();
  return (
    <div className="table_tarefa">
      <table class="table  table-striped-columns">
        <tbody>
          <tr>
            <th scope="row">
              <span>{nome}</span>
            </th>
            <td>
              <button
                className="btn btn-primary mt-2"
                onClick={() => navigate("/editar/" + id)}
              >
                Editar
              </button>
            </td>
            <td>
              <button
                className="alert alert-danger"
                onClick={() => deleteTarefa(nome)}
              >
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tarefa;
