import React from "react";

export default function Box(props) {
    return (
        <div>
            <div className="p-7 rounded-2xl bg-black/[0.03] hover:bg-[#00A65C] transition-all duration-[350ms] ease-linear group relative overflow-hidden z-10">
                <img
                    src="./images/service-bg.svg"
                    className="absolute bottom-0 left-0 right-0 -z-10 bg-cover scale-[5] translate-y-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 transition-all duration-[350ms] ease-linear"
                    alt=""
                />

                <div className="text-[#00A65C] text-[40px] group-hover:text-white/50 transition-all duration-[350ms] ease-linear">
                    {props.svg}
                </div>
                <h5 className="font-EstedadBlack text-xl text-[#003379] group-hover:text-white transition-all duration-[350ms] ease-linear my-6">
                    {props.title}
                </h5>
                <p className="font-EstedadLight text-black/70 group-hover:text-white/50 transition-all duration-[350ms] ease-linear">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
            </div>
        </div>
    );
}
