import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HomeTable = () => {
    const [getTaskdata, setTaskdata] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    const getdata = async () => {
        try {
            const res = await fetch("http://localhost:8003/getdata", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 404 || !data) {
                console.log("error");
            } else {
                setTaskdata(data);
                console.log("GET DATA");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    const deletetask = async (id) => {
        try {
            const res2 = await fetch(`http://localhost:8003/deletetask/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            const deletedata = await res2.json();
            console.log(deletedata);

            if (res2.status === 422 || !deletedata) {
                console.log("error");
            } else {
                alert("Task Deletada");
                getdata();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckboxChange = (event, id) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedRows([...selectedRows, id]);
        } else {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        }
    };

    const areButtonsDisabled = (id) => {
        return !selectedRows.includes(id);
    };

    return (
        <div className="mt-3" style={{ width: "800px" }}>
            <div className="container">
                <div className="add_btn mt-5">
                    <button className="btn btn-primary mb-3">
                        <NavLink to="/create" className="navL">
                            Add Nota
                        </NavLink>
                    </button>
                </div>

                <table className="table">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col" style={{ width: "100px" }}>
                                ID
                            </th>
                            <th scope="col" style={{ width: "300px" }}>
                                Nota
                            </th>
                            <th scope="col" style={{ width: "100px" }}>
                                Editar
                            </th>
                            <th scope="col" style={{ width: "100px" }}>
                                Remover
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getTaskdata.map((element, id) => (
                            <tr className="tableNote" key={id}>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id={`myCheckbox-${id}`}
                                            onChange={(e) => handleCheckboxChange(e, id)}
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor={`myCheckbox-${id}`}
                                        >
                                            {id + 1}
                                        </label>
                                    </div>
                                </td>
                                <td>{element.note}</td>
                                <td>
                                    <NavLink to={`edit/${element._id}`}>
                                        <button
                                            className="btn btn-success"
                                            disabled={areButtonsDisabled(id)}
                                        >
                                            <i className="fa-solid fa-pencil" style={{ color: "#FFFAFA" }}></i>
                                        </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        disabled={areButtonsDisabled(id)}
                                        onClick={() => deletetask(element._id)}
                                    >
                                        <i className="fa-solid fa-trash" style={{ color: "#ffffff" }}></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomeTable;