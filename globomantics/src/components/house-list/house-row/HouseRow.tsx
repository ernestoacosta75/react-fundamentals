import currencyFormatter from "../../../helpers/currencyFormatter";
import { House } from "../HouseList";

/**
 * HouseProps is meant for individual HouseRows or HouseComponent, where a specific house is involved.
 */
export interface HouseProps {
    house: House,
    selectHouse?: (h: House) => void;
}
const HouseRow = ({house, selectHouse}: HouseProps) => {

    return (
        <tr onClick={() => selectHouse?.(house)}>
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