import { TfiSettings, TfiArrowLeft } from "react-icons/tfi";

export default function RightContent() {
    return (
        <div className="w-full">
            <h1 className="text-[#003379] text-[40px] leading-[1.25] font-EstedadBlack mb-3">
                شرکت تجارت الکترونیک در زمینه طراحی سایت
            </h1>
            <p className="text-lg font-EstedadLight mb-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
            <div className="flex gap-x-3 font-EstedadRegular">
                <a
                    href="#"
                    className="flex-center gap-x-2 w-[154px] h-[39px] text-white  bg-[#00A65C] rounded-full hover:bg-[#44BF8D] cursor-pointer transition-all">
                    <TfiSettings />
                    خدمات ما
                </a>
                <a
                    href="#"
                    className="flex-center gap-x-2 w-[154px] h-[39px] text-[#558b95] border border-[#558b95] rounded-full hover:text-[#003379] hover:border-[#003379] cursor-pointer transition-all">
                    <TfiArrowLeft />
                    تماس با ما
                </a>
            </div>
        </div>
    );
}
