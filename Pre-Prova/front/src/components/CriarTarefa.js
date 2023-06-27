import React, { useContext, useState } from 'react';
import {useNavigate } from 'react-router-dom';


const CriarTarefa = () => {
   const history = useNavigate("");

   const [inpval, setINP] = useState({
      note: ""
   });

   const setdata = (e) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      setINP((preval) => {
         return {
            ...preval,
            [name]: value
         }
      });
   };

   const addinpdata = async (e) => {
      e.preventDefault();
      const { note } = inpval;

      const res = await fetch("http://localhost:8003/create", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ note })
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 404 || !data) {
         alert("error create");
         console.log("error");
      } else {
         alert("Nota Adicionada");
         console.log("Note Add");
         history("/");
      }
   };

   return (
      <div className="container">
         <div className="home_btn mt-5"></div>

         <form className="mt-5">
            <div className="mb-3 col-lg-12 col-md-12 col-12">
               <textarea
                  type="text"
                  name="note"
                  className="form-control"
                  placeholder='Digite aqui sua tarefa'
                  onChange={setdata}
                  value={inpval.note}
                  rows="5"
                  cols="30"
                  class="form-control"
                  id="note"
               />
            </div>
            <button type="submit" onClick={addinpdata} className="btn btn-primary">Criar</button>
         </form>
      </div>
   );
};

export default CriarTarefa;