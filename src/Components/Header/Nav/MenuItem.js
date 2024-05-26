import ScrollFunc from "./ScrollFunc";

export default function MenuItem() {
    const isScrolled = ScrollFunc();

    return (
        <div>
            <ul className="flex gap-12">
                <li className={isScrolled ? "child:text-sm" : "text-base"}>
                    <a
                        href="#"
                        className=" font-medium hover:text-slate-500 transition-all">
                        خانه
                    </a>
                </li>
                <li className={isScrolled ? "child:text-sm" : "text-base"}>
                    <a
                        href="#"
                        className=" font-medium hover:text-slate-500 transition-all">
                        درباره ما
                    </a>
                </li>
                <li className={isScrolled ? "child:text-sm" : "text-base"}>
                    <a
                        href="#"
                        className=" font-medium hover:text-slate-500 transition-all">
                        خدمات ما
                    </a>
                </li>
                <li className={isScrolled ? "child:text-sm" : "text-base"}>
                    <a
                        href="#"
                        className=" font-medium hover:text-slate-500 transition-all">
                        تعرفه ها
                    </a>
                </li>
                <li className={isScrolled ? "child:text-sm" : "text-base"}>
                    <a
                        href="#"
                        className=" font-medium hover:text-slate-500 transition-all">
                        وبلاگ
                    </a>
                </li>
                <li className={isScrolled ? "child:text-sm" : "text-base"}>
                    <a
                        href="#"
                        className=" font-medium hover:text-slate-500 transition-all">
                        نظرات مشتریان
                    </a>
                </li>
            </ul>
        </div>
    );
}
