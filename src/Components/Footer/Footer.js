import FooterBg from "./FooterBg";
import {
    TfiAngleDoubleLeft,
    TfiTwitter,
    TfiInstagram,
    TfiFacebook,
    TfiLinkedin,
} from "react-icons/tfi";

export default function Footer() {
    return (
        <div className="bg-[#003379] pt-[75px] pb-[55px] relative overflow-hidden z-20">
            <FooterBg />
            <div className="container relative text-white font-EstedadLight z-30 px-10">
                <div className="grid grid-cols-4 gap-x-20">
                    <div className="">
                        <img
                            src="images/logo-white.png"
                            className="w-[120px] mb-5"
                            alt="logo"
                        />
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-EstedadExtraBold mb-3">
                            دسترسی سریع
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <li className="flex flex-col items-start gap-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-2">
                                    <TfiAngleDoubleLeft />
                                    درباره ما
                                </a>
                            </li>
                            <li className="flex flex-col items-start gap-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-2">
                                    <TfiAngleDoubleLeft />
                                    خدمات ما
                                </a>
                            </li>
                            <li className="flex flex-col items-start gap-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-2">
                                    <TfiAngleDoubleLeft />
                                    قیمت گذاری
                                </a>
                            </li>
                            <li className="flex flex-col items-start gap-2">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-2">
                                    <TfiAngleDoubleLeft />
                                    وبلاگ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-EstedadExtraBold mb-3">
                            تماس
                        </h3>
                        <ul className="space-y-2">
                            <li className="max-w-[160px]">
                                تهران خ آزادی خ بهبودی شرکت ویستا
                            </li>
                            <li>09304875425</li>
                            <li>yourmail@yourdomain.com</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-EstedadExtraBold mb-3">
                            شبکه های اجتماعی
                        </h3>
                        <div className="flex gap-x-6">
                            <a href="#">
                                <TfiTwitter />
                            </a>
                            <a href="#">
                                <TfiInstagram />
                            </a>
                            <a href="#">
                                <TfiFacebook />
                            </a>
                            <a href="#">
                                <TfiLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-10 text-center">
                    <p className="text-sm">
                        تمامی حقوق برای شرکت ویستا محفوظ است
                    </p>
                </div>
            </div>
        </div>
    );
}
