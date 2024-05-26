import { TfiCalendar } from "react-icons/tfi";

export default function Box(props) {
    return (
        <div className="rounded-xl overflow-hidden hover:shadow-blog transition-all duration-[350ms] ease-linear">
            <div className="overflow-hidden">
                <img
                    src={props.img}
                    className="hover:scale-125 hover:rotate-[10deg] transition-all duration-[350ms] ease-linear"
                    alt="blog"
                />
            </div>
            <div className="relative p-7 bg-black/5 -z-10">
                <h5 className="mb-4 font-EstedadBlack text-[#003379]">
                    لورم ایپسوم متن ساختگی با
                </h5>
                <div className="flex items-center justify-between">
                    <p className="flex-center gap-x-2 text-[13px] text-[#00A65C] mx-1.5 py-[5px] px-[10px] bg-[#00A25C]/[0.15] rounded-md tracking-wider border border-[#00A25C]">
                        1403-02-23
                        <TfiCalendar />
                    </p>
                    <p className="flex-center text-[13px] text-[#003379] mx-1.5 w-14 h-8 bg-[#003379]/[0.15] rounded-md tracking-wider border border-[#003379]">
                        مدرن
                    </p>
                </div>
            </div>
        </div>
    );
}
