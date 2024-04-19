import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function TopBarSecond() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-16 flex justify-between items-center pl-4">
        <h2 className="text-xl font-bold text-[#303940]">Delever</h2>
        <div className="w-[521px] h-full flex">
          <button className="border-l-2  w-[25%] h-full flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.83337 5C5.17033 5 4.53445 5.26339 4.06561 5.73223C3.59677 6.20107 3.33337 6.83696 3.33337 7.5V12.5C3.33337 13.163 3.59677 13.7989 4.06561 14.2678C4.53445 14.7366 5.17033 15 5.83337 15H14.1667C14.8297 15 15.4656 14.7366 15.9345 14.2678C16.4033 13.7989 16.6667 13.163 16.6667 12.5V7.5C16.6667 6.83696 16.4033 6.20107 15.9345 5.73223C15.4656 5.26339 14.8297 5 14.1667 5H5.83337ZM5.00004 12.5V11.6667H9.16671V13.3333H5.83337C5.61236 13.3333 5.4004 13.2455 5.24412 13.0893C5.08784 12.933 5.00004 12.721 5.00004 12.5ZM10.8334 13.3333H14.1667C14.3877 13.3333 14.5997 13.2455 14.756 13.0893C14.9122 12.933 15 12.721 15 12.5V11.6667H10.8334V13.3333ZM10.8334 10H15V8.33333H10.8334V10ZM9.16671 8.33333H5.00004V10H9.16671V8.33333Z"
                fill="#6E8BB7"
              />
            </svg>
            <p>Таблица</p>
          </button>
          <button className="border-l-2  w-[25%] h-full flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_4634_785)">
                <path
                  d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 8.95008 4.58329 10.3084 5.34163 11.5334C6.13329 12.8167 7.17496 13.9167 7.97496 15.2001C8.36663 15.8251 8.64996 16.4084 8.94996 17.0834C9.16663 17.5417 9.34163 18.3334 9.99996 18.3334C10.6583 18.3334 10.8333 17.5417 11.0416 17.0834C11.35 16.4084 11.625 15.8251 12.0166 15.2001C12.8166 13.9251 13.8583 12.8251 14.65 11.5334C15.4166 10.3084 15.8333 8.95008 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM9.99996 9.79175C8.84996 9.79175 7.91663 8.85842 7.91663 7.70842C7.91663 6.55841 8.84996 5.62508 9.99996 5.62508C11.15 5.62508 12.0833 6.55841 12.0833 7.70842C12.0833 8.85842 11.15 9.79175 9.99996 9.79175Z"
                  fill="#6E8BB7"
                />
              </g>
              <defs>
                <clipPath id="clip0_4634_785">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Карта</p>
          </button>
          <button className="border-l-2  w-[25%] h-full flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_4634_791)">
                <path
                  d="M2.5 14.5499V17.0832C2.5 17.3166 2.68333 17.4999 2.91667 17.4999H5.45C5.55833 17.4999 5.66667 17.4582 5.74167 17.3749L14.8417 8.28322L11.7167 5.15822L2.625 14.2499C2.54167 14.3332 2.5 14.4332 2.5 14.5499ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                  fill="#4094F7"
                />
              </g>
              <defs>
                <clipPath id="clip0_4634_791">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#4094F7]">Действия</p>
          </button>
          <Link to='createorder' className="border-l-2 transition-all w-[25%] h-full flex items-center text-[#1AC19D] justify-center gap-1 hover:bg-[#1AC19D] hover:text-white">
            <IoMdAdd />
            <p>Добавить</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
