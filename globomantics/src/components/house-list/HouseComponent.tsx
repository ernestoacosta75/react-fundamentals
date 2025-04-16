import currencyFormatter from "../../helpers/currencyFormatter";
import { HouseProps } from "./house-row/HouseRow";

const HouseComponent = ({house}: HouseProps) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid"
                        src={
                            house.photo ? `./houseImages/${house.photo}.jpeg` : "./defaultphoto.png"
                        }
                        alt="House pic" />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{house.country}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{house.address}</h3>
                </div>
                <div className="row">
                    <h2 className={`${house.price >= 500000 ? "text-primary col-12" : "themeFontColor col-12"}`}>
                        {currencyFormatter.format(house.price)}
                    </h2>
                </div>
                <div className="row">
                    <h3 className="col-12 mt-3">{house.description}</h3>
                </div>                                              
            </div>
        </div>
    );
};

export default HouseComponent;