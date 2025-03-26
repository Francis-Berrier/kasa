import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectContext= createContext();

export function ProjectProvider({children}) {
    const [locations, setLocations] = useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        async function fetchData(){
            const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];

            try{
                if(!storedLocations.length) {
                    const response = await fetch('/public/logements.json');
                    if(!response){
                        throw new Error(error)
                    }
                    const data = await response.json();
                    localStorage.setItem('locations', JSON.stringify(data));
                    setLocations(data);
                }else {
                    setLocations(storedLocations);
                }
            }
            catch(error){
                navigate("/noload")
                console.log(error)
            }
        }
        fetchData();
        
    }, []);

    return(
        <ProjectContext.Provider value={{locations}}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProvider