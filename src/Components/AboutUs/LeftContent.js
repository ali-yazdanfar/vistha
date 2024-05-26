import { TfiSupport } from "react-icons/tfi";

export default function LeftContent() {
    return (
        <div className="w-full">
            <p className="font-EstedadLight leading-8 text-[#49495c] text-xl">
                درباره ویستا
            </p>
            <h2 className="font-EstedadBlack text-[#003379] text-[32px] mb-2">
                طراحی سایت حرفه ای برای شما
            </h2>
            <p className="font-EstedadLight text-[#212529] mb-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="font-EstedadRegular">
                <a
                    href="#"
                    className="flex-center gap-x-2 w-[154px] h-[39px] text-white  bg-[#00A65C] rounded-full hover:bg-[#44BF8D] cursor-pointer transition-all">
                    <TfiSupport />
                    خدمات ما
                </a>
            </div>
        </div>
    );
}
