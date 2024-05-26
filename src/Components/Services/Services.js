import Boxes from "./Boxes";
import ServicesContentText from "./ServicesContentText";

export default function Services() {
    return (
        <div>
            <div className="container pt-[45px] pb-[75px]">
                <ServicesContentText />
                <Boxes />
            </div>
        </div>
    );
}
