import Form from "./Form";
import ContactUs from "./ContactUs";

export default function Contact() {
    return (
        <div className="bg-[#B6B2FF]/[0.22] py-[50px]">
            <div className="container">
                <div className="flex items-center gap-x-28">
                    <Form />
                    <ContactUs />
                </div>
            </div>
        </div>
    );
}
