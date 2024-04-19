import { uid } from "uid";
import { format } from "date-fns";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export default function CreateTop() {
  const id = uid();
  const date = new Date();

  const datetime = format(date, "yyyy-MM-dd HH:mm:ss");

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-16 flex justify-between items-center pl-4">
        <div className="flex h-full gap-3 items-center">
          <h2 className="text-xl font-bold text-[#303940] border-l-2 px-3 border-[#E5E9EB]">
            Delever
          </h2>
          <span className="flex gap-3 items-center px-3 border-l-2 text-[#6E8BB7] border-[#E5E9EB]">
            <b>ID</b>
            <p>{id}</p>
          </span>

          <p className="flex items-center gap-3 px-3 border-x-2 text-[#6E8BB7] border-[#E5E9EB]">
            <FaRegCalendar />
            {datetime}
          </p>
        </div>
        <div className="flex items-center h-full">
          <span className="border-l-2 px-4 py-1 h-full flex items-center">
            <button className="bg-[#38D9B926] text-[#1AC19D] w-[113px] h-8 flex items-center justify-center gap-1 rounded-md">
              <MdOutlineTimer />
              0:02:36
            </button>
          </span>
          <span className="border-l-2 px-4 py-1 h-full flex items-center">
            <select className="bg-[#4094F726] text-[#4094F7] w-[129px] h-8 px-2 py-1 rounded-md">
              <option value="Delivered">Доставлен</option>
              <option value="Delivery">Доставка</option>
            </select>
          </span>
          <button className="border-l-2 transition-all w-[142px] h-full flex items-center text-[#F76659] justify-center gap-1 hover:bg-[#F76659] hover:text-white">
            <IoMdCloseCircle />
            <p>Отменить</p>
          </button>
          <button className="border-l-2 transition-all w-[142px] h-full flex items-center text-[#4094F7] justify-center gap-1 hover:bg-[#4094F7] hover:text-white">
            <FaSave />
            <p>Сохранить</p>
          </button>
        </div>
      </div>
    </div>
  );
}
