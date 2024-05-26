export default function Box(props) {
    return (
        <div className={`${props.wrapper} ${props.bg}`}>
            <img src={props.img} alt="" />
            <p
                className={`${props.textColor} text-3xl mt-1 font-EstedadRegular`}>
                {props.title}
            </p>
            <ul
                className={`flex flex-col gap-y-1.5 mt-4 mb-9 text-center text-sm ${props.ulTextColor} font-EstedadLight`}>
                <li>طراحی سایت با قالب آماده</li>
                <li>
                    <s>پشتیبانی 24 ساعته</s>
                </li>
                <li>
                    <s>دیزاین اختصاصی&nbsp;</s>
                </li>
                <li>
                    <s>جلسه حضوری</s>
                </li>
            </ul>
            <a
                href="#"
                className={`flex-center w-[105px] h-[44px] font-EstedadRegular rounded-full ${props.btn} cursor-pointer transition-all`}>
                سفارش
            </a>
        </div>
    );
}
