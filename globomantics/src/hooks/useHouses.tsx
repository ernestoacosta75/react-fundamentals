import { useEffect, useRef, useState } from "react";
import { House } from "../components/house-list/HouseList";
import loadingStatus from "../helpers/loadingStatus";

const useHouses = () => {
    /**
     * Using the useState hook (a function).
     * Its first parameter is the initial value of the state.
     * useState returns an array
     */
    const [houses, setHouses] = useState<House[]>([]);
    const [loadingState, setLoadingState] = useState<string>(loadingStatus.isLoading);
    
    const counter = useRef(0);

    /**
     * This effect runs only once when the component mounts (because of the empty [] dependency array).
     * It fetches the current list of houses from the backend.
     * Once the JSON is received, it updates the houses state.
     */
    useEffect(() => {
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);

            try {                
                const response: Response = await fetch("https://localhost:4000/house");
                const houses = (await response).json();
                setHouses(await houses);
                setLoadingState(loadingStatus.loaded);
            } catch {
                setLoadingState(loadingStatus.hasErrored);
            }
        };
        fetchHouses();
        
        // When a reference type is passed to useRef, the ref hook guarantees that
        // the same reference is returned in the current property across re-renders.
        counter.current++;
    }, []);  
    
    return {houses, setHouses, loadingState};
};

export default useHouses;