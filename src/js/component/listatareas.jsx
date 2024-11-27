import React, {useState, useEffect} from "react";

const Lista = () => {
    const [tarea,setTarea] = useState("");
    const [agregar, setAgregar] = useState([]);


    return (
        <div className="container">
            <ul>
                <li><input 
                type="text" 
                onChange={(event) => setTarea(event.target.value)} 
                value={tarea} 
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        setAgregar(agregar.concat([tarea]));
                        setTarea("");
                     }}} placeholder="Agregar tarea"></input></li>
                {agregar.map((item, index) => (
                    <li>
                        {item}{" "} <span onClick={() => 
                            setAgregar(
                                agregar.filter(
                                    (t, currentIndex) => 
                                        index != currentIndex))
                        }>X</span>
                    </li>
                    )
                )
                }
            </ul>
            <div>{agregar.length} tareas</div>
        </div>
        
    );
};

export default Lista;