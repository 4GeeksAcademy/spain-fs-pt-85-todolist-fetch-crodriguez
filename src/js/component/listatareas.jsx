import React, {useState, useEffect} from "react";

const Lista = () => {
    const [tarea,setTarea] = useState("");
    const [agregar, setAgregar] = useState([]);

    async function crearUsuario() {
        try {
            let response = await fetch('https://playground.4geeks.com/todo/users/crodriguez', {
                method: "POST",
            });
            let data = await response.json();
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    useEffect(()=>{
		crearUsuario()

	},[])

    async function obtenerTareas() {
        try {
            let response = await fetch('https://playground.4geeks.com/todo/todos/crodriguez', {
                method: "GET",
            });
            let data = await response.json();
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    useEffect(()=>{
		obtenerTareas()

	},[])

    async function agregarTarea() {
        try {
            let response = await fetch('https://playground.4geeks.com/todo/todos/{id}', {
                method: "PUT",
                "label": "string",
                "is_done": true
            });
            let data = await response.json();
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    useEffect(()=>{
		agregarTarea()

	},[])

    async function borrarTarea() {
        try {
            let response = await fetch('https://playground.4geeks.com/todo/todos/{id}', {
                method: "DELETE",
            });
            let data = await response.json();
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    useEffect(()=>{
		borrarTarea()

	},[])

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
                    <li key={item.index}>
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
            <div className="container">{agregar.length} tareas</div>
        </div>
        
    );
};

export default Lista;