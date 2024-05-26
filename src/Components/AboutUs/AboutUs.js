import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

export default function Services() {
    return (
        <div className="bg-[#B6B2FF] bg-opacity-[0.22] py-[45px]">
            <div className="container">
                <div className=" flex justify-center items-center">
                    <RightContent />
                    <LeftContent />
                </div>
            </div>
        </div>
    );
}
