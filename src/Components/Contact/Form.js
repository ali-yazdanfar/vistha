export default function Form() {
    return (
        <div className="w-1/2">
            <form
                action=""
                className=" bg-white  rounded-[10px] p-5 shadow-form">
                <div className="flex flex-col mb-4">
                    <span className="font-EstedadLight font-bold text-[#003379] mb-0.5">
                        نام
                    </span>
                    <input
                        type="text"
                        className="w-full text-[#495057] py-1.5 px-3 rounded border border-[#00A65C] outline-none focus:bg-[#003379]/[0.03] focus:border-[#003379] transition-all"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <span className="font-EstedadLight font-bold text-[#003379] mb-0.5">
                        شماره تماس
                    </span>
                    <input
                        type="text"
                        className="w-full text-[#495057] py-1.5 px-3 rounded border border-[#00A65C] outline-none focus:bg-[#003379]/[0.03] focus:border-[#003379] transition-all"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <span className="font-EstedadLight font-bold text-[#003379] mb-0.5">
                        ایمیل
                    </span>
                    <input
                        type="email"
                        className="w-full text-[#495057] py-1.5 px-3 rounded border border-[#00A65C] outline-none focus:bg-[#003379]/[0.03] focus:border-[#003379] transition-all"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <span className="font-EstedadLight font-bold text-[#003379] mb-0.5">
                        پیام
                    </span>
                    <textarea
                        rows={3}
                        className="w-full text-[#495057] py-1.5 px-3 rounded border border-[#00A65C] outline-none focus:bg-[#003379]/[0.03] focus:border-[#003379] transition-all"></textarea>
                </div>
                <div className="flex-center w-[100px] h-[46px] font-EstedadRegular rounded-full bg-[#00a65c]  text-white cursor-pointer hover:bg-[#44BF8D] transition-all">
                    <button type="submit">ارسال</button>
                </div>
            </form>
        </div>
    );
}
