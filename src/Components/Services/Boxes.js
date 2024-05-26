import React from "react";
import Box from "./Box";
import {
    TfiLayout,
    TfiMobile,
    TfiLocationArrow,
    TfiShoppingCart,
    TfiShield,
    TfiCloudUp,
} from "react-icons/tfi";

export default function Boxes() {
    return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-7">
            <Box title="طراحی سایت" svg=<TfiLayout /> />
            <Box title="برنامه نویسی موبایل" svg=<TfiMobile /> />
            <Box title="خدمات رزرواسیون" svg=<TfiLocationArrow /> />
            <Box title="خدمات تجاری" svg=<TfiShoppingCart /> />
            <Box title="پشتیبانی درجه اول" svg=<TfiShield /> />
            <Box title="فناوری ابری" svg=<TfiCloudUp /> />
        </div>
    );
}
