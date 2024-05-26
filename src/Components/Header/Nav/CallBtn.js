import ScrollFunc from "./ScrollFunc";
import { TfiArrowLeft } from "react-icons/tfi";

export default function CallBtn() {
    const isScrolled = ScrollFunc();

    return (
        <div>
            <div className={isScrolled ? "callBtn callBtnAfterScroll" : "callBtn callBtnBeforeScroll"}>
                <a
                    href="#"
                    className="flex-center gap-2 text-white font-EstedadRegular">
                    <TfiArrowLeft />
                    تماس
                </a>
            </div>
        </div>
    );
}
