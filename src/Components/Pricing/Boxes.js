import Box from "./Box";

export default function Boxes() {
    return (
        <div className="grid grid-cols-3">
            <Box
                img="./images/cycle.png"
                title="رایگان"
                wrapper="PricingBoxWrapper"
                bg="PricingBoxBgWhite"
                textColor="PricingTextColorBlue"
                ulTextColor="PricingUlTextColorGary"
                btn="PricingBtnBlue"
            />
            <Box
                img="./images/scooter.png"
                title="3 ملیون تومان"
                wrapper="PricingBoxWrapper"
                bg="PricingBoxBgBlue"
                textColor="PricingTextColorWhite"
                ulTextColor="PricingUlTextColorWhite"
                btn="PricingBtnGreen"
            />
            {/* <BoxCenter /> */}
            <Box
                img="./images/car.png"
                title="1 میلیون تومان "
                wrapper="PricingBoxWrapper"
                bg="PricingBoxBgWhite"
                textColor="PricingTextColorBlue"
                ulTextColor="PricingUlTextColorGary"
                btn="PricingBtnBlue"
            />
        </div>
    );
}
