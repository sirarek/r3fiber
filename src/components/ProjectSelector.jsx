import React, {useEffect, useState} from 'react';
import {getAllProjects} from "../db/db";

function ProjectSelector(props) {

    const [projects,setProjects]=useState([]);
    async function getProjescts() {

        const allProjects = await getAllProjects().then(data=>
            setProjects(data.data))

    }

    useEffect(() => {
        getProjescts();


    }, []);


    return(

    <select>
        {projects && projects.map(item =><option key={item.id} value={item.name} >{item.name}</option>)}
    </select>
    );
}

export default ProjectSelector;