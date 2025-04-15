import currencyFormatter from "../../../helpers/currencyFormatter";
import { House } from "../HouseList";

export interface HouseProps {
    house: House
}
const HouseRow = ({house}: HouseProps) => {

    return (
        <tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        {house.price &&
            <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currencyFormatter.format(house.price)}
            </td>}
    </tr>
    );
};

// const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
// export { HouseRowMem }; 