import React, { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom';


//parei em 2:28:01

const EditTarefa = () => {

    //const [getTaskdata, setTaskdata] = useState([])
    //console.log(getTaskdata)

    const history = useNavigate("");

    const [inpval, setINP] = useState({
        note: ""
    })
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }

        })
    }

    const { id } = useParams("");
    console.log(id);


    const getdata = async () => {

        const res = await fetch(`http://localhost:8003/gettask/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error");
        } else {
            setINP(data)
            console.log("GET DATA edit");
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    const updatetask = async (e) => {
        e.preventDefault();

        const { note } = inpval;

        const res2 = await fetch(`http://localhost:8003/updatetask/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({note})
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("indique um dado")
        } else {
            alert("Nota adicionada")
            history("/");
            setINP(data2);
        }
    }

    return (
        <div className="container">
            <form className="mt-5">
                <div className="mb-3 col-lg-12 col-md-12 col-12">
                    <textarea type="text" name="note" className="form-control" placeholder='Digite aqui sua tarefa' onChange={setdata} value={inpval.note} rows="5" cols="30" class="form-control" id="note" />
                </div>
                <button type="submit" onClick={updatetask} className="btn btn-primary">Criar</button>
            </form>
        </div>
    );
}

export default EditTarefa;