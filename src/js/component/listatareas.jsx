import React, {useState, useEffect} from "react";

const Lista = () => {
    const [tarea,setTarea] = useState("");
    const [listado, setListado] = useState([]);

    async function crearUsuario() {
        try {
            let response = await fetch('https://playground.4geeks.com/todo/users/crodriguez', {
                method: "POST",
            });
            let data = await response.json();
            console.log(response);
            if (response.status === 201) {
                obtenerTareas();
            }
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    // useEffect(()=>{
	// 	crearUsuario()

	// },[])

    async function obtenerTareas() {
        try {
            let response = await fetch('https://playground.4geeks.com/todo/users/crodriguez', {
                method: "GET",
            });
            let data = await response.json();
            
            if (response.status === 404) {
                crearUsuario();
            }
            // console.log(data);
            setListado(data.todos);
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
            let response = await fetch('https://playground.4geeks.com/todo/todos/crodriguez', {
                method: "POST",
                body: JSON.stringify({
                    "label": tarea,
                    "is_done": false
                  }),
                 headers: {
                "Content-Type": "application/json"
      }
            });
            console.log(response);
            if (response.status === 204) {
                obtenerTareas();
            }
            let data = await response.json();
            
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    // useEffect(()=>{
	// 	agregarTarea()

	// },[])

    async function borrarTarea(id) {
        console.log(id);
        try {
            let response = await fetch('https://playground.4geeks.com/todo/todos/'+id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
          }
            });
            console.log(response);
            if (response.status === 204) {
                obtenerTareas();
            }
            let data = await response.json();
            console.log(data);
            return true;
        } catch (error) {
            console.log(error);
            return;
        }
    }
    // useEffect(()=>{
	// 	borrarTarea()

	// },[])

    return (
        <div className="container">
            <ul>
                <li><input 
                type="text" 
                onChange={(event) => setTarea(event.target.value)} 
                value={tarea} 
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        agregarTarea(tarea);
                     }}} placeholder="Agregar tarea"></input></li>
                {listado.map((item) =><li key={item.id}>{item.label}<span onClick={()=>borrarTarea(item.id)}>X</span></li>)}
                
         
            </ul>
            <div className="container">{listado.length} tareas</div>
        </div>
        
    );
};

export default Lista;