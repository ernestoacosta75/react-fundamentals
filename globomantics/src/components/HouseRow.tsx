import currencyFormatter from "../helpers/currencyFormatter";
import { House } from "./HouseList";

interface HouseProps {
    house: House
}
const HouseRow = ({house}: HouseProps) => {
    return (
        <tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        <td>{currencyFormatter.format(house.price)}</td>
    </tr>
    );
};

export default HouseRow;