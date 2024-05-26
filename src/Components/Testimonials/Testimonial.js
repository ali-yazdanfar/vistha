import { TfiUser } from "react-icons/tfi";

export default function Testimonial(props) {
    return (
        <div className="flex justify-center items-center pr-14">
            <div className="flex flex-col justify-center">
                <p className="text-xl text-[#49495c] font-EstedadRegular">
                    نظرات مشتریان
                </p>
                <h2 className="font-EstedadBlack text-[#003379] text-3xl my-2.5">
                    لورم ایپسوم متن ساختگی
                </h2>
                <p className="max-w-[550px] mb-6 text-[#888] font-EstedadLight text-lg leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز{" "}
                </p>
                <div className="flex">
                    <span className="flex-center gap-x-2 font-EstedadLight text-xl text-[#003379] bg-[#003379]/[0.15] py-1 px-2.5 rounded-sm border border-r-[5px] border-r-[#003379]">
                        <TfiUser />
                        اسم شخص
                    </span>
                </div>
            </div>
            <img
                src={props.img}
                className="w-[360px] h-[355px]"
                alt="testi"
            />
        </div>
    );
}
