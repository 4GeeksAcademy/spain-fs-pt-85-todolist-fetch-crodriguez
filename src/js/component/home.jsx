import React, {useState, useEffect} from "react";

import Lista from "./listatareas.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container bloque1">
			<h1 className="text-center mt-5">To Do List</h1>
			<Lista/>
		</div>
	);
};

export default Home;
