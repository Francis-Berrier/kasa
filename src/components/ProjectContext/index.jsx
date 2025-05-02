import { createContext, useState, useEffect, useCallback } from "react";
import { getDataWithExpiry, storeDataWithExpiry } from "../../utils/storeDataWithExpiry";

export const ProjectContext= createContext();

export function ProjectProvider({children}) {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try{
            const storedLocations = getDataWithExpiry( 'locations' );
            const API_URL = import.meta.env.VITE_API_URL;

            if(!storedLocations) {
                const response = await fetch(API_URL);
                if(!response.ok){
                    throw new Error()
                }
                const data = await response.json();
                storeDataWithExpiry( 'locations', data );
                setLocations(data);
            }else {
                setLocations(storedLocations);
            }
        }
        catch(error){
            setError(error);
        }
        finally {
            setLoading(false)
        }
    }, []);

    useEffect(()=>{
        fetchData();  
    }, [fetchData]);

    return(
        <ProjectContext.Provider value={{ locations, loading, error, repeatFetch: fetchData }}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProvider