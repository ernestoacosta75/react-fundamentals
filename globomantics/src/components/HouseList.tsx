import { useEffect, useState } from "react";
import HouseRow from "./HouseRow";

export interface House {
    id: number;
    address: string;
    country: string;
    price: number;
};

const HouseList = () => {
    /**
     * Using the useState hook (a function).
     * Its first parameter is the initial value of the state.
     * useState returns an array
     */
    const [houses, setHouses] = useState<House[]>([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response: Response = await fetch("https://localhost:4000/house");
            const houses = (await response).json();
            setHouses(await houses);
        };
        fetchHouses();
    });

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 6,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000
            }
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h}/>)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>Add</button>
        </>
    );
};

export default HouseList;