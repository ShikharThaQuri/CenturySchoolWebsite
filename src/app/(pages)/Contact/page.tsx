import { Metadata } from "next";
import FormSubmition from "./formSubmition";

export const metadata: Metadata = {
  title: "Contact",
};

function ContactPage() {
  return (
    <div className="bg-[#68677D] h-[80vh] max700:h-full flex px-[5rem] max700:flex-col-reverse">
      <div className="flex-[1] flex flex-col items-start text-white">
        <div className="mt-[6rem] max700:my-[4rem 3rem]">
          <h1 className="text-[1.25rem] mb-[1.4rem] font-bold">CALL US</h1>
          <p className="font-bold ml-[1rem] mb-[0.4rem]">++9812345678</p>
          <p className="font-bold ml-[1rem]">++9812345000</p>
        </div>
        <div className="mt-[4rem] max700:my-[3rem]">
          <h1 className="text-[1.25rem] mb-[1.4rem] font-bold">LOCATION</h1>
          <p className="font-bold ml-[1rem] mb-[0.4rem]">Kohalpur 2, Banke</p>
          <p className="font-bold ml-[1rem]">121 Rook Street, 21</p>
        </div>
      </div>

      {/*  ------------------------- Input Box --------------------------- */}
      <FormSubmition />
    </div>
  );
}

export default ContactPage;
