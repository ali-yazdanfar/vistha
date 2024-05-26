import ScrollFunc from './ScrollFunc'
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import CallBtn from "./CallBtn";

export default function Header() {
    const isScrolled = ScrollFunc();

    return (
        <nav className={isScrolled ? "header header-scroll" : "header"}>
            <div className="container flex justify-between items-center font-EstedadLight ">
                <Logo />
                <MenuItem />
                <CallBtn />
            </div>
        </nav>
    );
}
