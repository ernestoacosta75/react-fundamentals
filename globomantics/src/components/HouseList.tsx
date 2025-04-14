import { useState } from "react";
import HouseRow, { HouseRowMem } from "./HouseRow";

export interface House {
    id: number;
    address: string;
    country: string;
    price: number;
};

const housesArray: House [] = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000
    }    
];

const HouseList = () => {
    /**
     * Using the useState hook (a function).
     * Its first parameter is the initial value of the state.
     * useState returns an array
     */
    const [houses, setHouses] = useState(housesArray);

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