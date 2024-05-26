import PriceContentText from "./PriceContentText";
import Boxes from "./Boxes";

export default function Price() {
    return (
        <div className="bg-white py-[45px]">
            <div className="container">
                <PriceContentText />
                <div className="pt-12 px-[75px] pb-5">
                    <Boxes />
                </div>
            </div>
        </div>
    );
}
