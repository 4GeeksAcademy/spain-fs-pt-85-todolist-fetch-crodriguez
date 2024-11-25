import React, {useState, useEffect} from "react";

const Lista = () => {
    const [tarea,setTarea] = useState("");
    const [agregar, setAgregar] = useState([]);


    return (
        <div className="container">
            <ul>
                <li><input type="text" onChange={(event) => setTarea(event.target.value)} value={tarea} onkeypress={(event) => event.keyCode == 13 ? setAgregar} ></input></li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </div>
    );
};

export default Lista;