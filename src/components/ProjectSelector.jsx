import React, {useEffect, useState} from 'react';
import {getAllProjects, getProject} from "../db/db";

function ProjectSelector(props) {

    const [projects,setProjects]=useState([]);
    async function getProjescts() {

        const allProjects = await getAllProjects().then(data=>
            setProjects(data.data))

    }

    useEffect(() => {
        getProjescts();


    }, []);


   async function selectHandler(e) {
       const selectedProjctData=  await getProject(e.target.value);
       console.log(selectedProjctData);
    }

    return(

    <select onChange={selectHandler}>
        {projects && projects.map(item =><option key={item.id} value={item.uuid} >{item.name}</option>)}
    </select>
    );
}

export default ProjectSelector;