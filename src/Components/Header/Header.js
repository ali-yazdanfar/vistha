import Nav from "./Nav/Nav";
import HeaderBg from "./HeaderBg";
import RightContentHeader from "./RightContentHeader";
import LeftContentHeader from "./LeftContentHeader";

export default function Header() {
    return (
        <div>
            <Nav />
            <HeaderBg />
            <div className="container">
                <div className=" flex justify-center items-center gap-x-12 pt-36 pb-16">
                    <RightContentHeader />
                    <LeftContentHeader />
                </div>
            </div>
        </div>
    );
}
