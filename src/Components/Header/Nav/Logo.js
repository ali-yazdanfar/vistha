import ScrollFunc from './ScrollFunc'

export default function Logo() {
    const isScrolled = ScrollFunc();
    return (
        <div>
            <a href="#">
                <img src="./images/logo.png" className={isScrolled ? "w-36" : ""} alt="" />
            </a>
        </div>
    );
}
