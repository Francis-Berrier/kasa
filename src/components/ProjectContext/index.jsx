import { createContext, useState, useEffect } from "react";

export const ProjectContext= createContext();

export function ProjectProvider({children}) {
    const [locations, setLocations] = useState([]);

    useEffect(()=>{
        const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];

        if(!storedLocations.length) {
            const data= fetch('/public/logements.json')
            .then(reponse => reponse.json())
            .then(data => {localStorage.setItem('locations', JSON.stringify(data))});
            setLocations(data);
        }else {
            setLocations(storedLocations);
        }
    }, []);

    return(
        <ProjectContext.Provider value={{locations}}>
            {children}
        </ProjectContext.Provider>
    );
}