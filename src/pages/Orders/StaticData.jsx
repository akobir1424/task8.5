import { useState } from "react";
import { personalData, searchFilter } from "../../components/data";
import { MdCloseFullscreen, MdEdit } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaCar, FaCheck } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { IoMdClose, IoMdRefresh } from "react-icons/io";

export default function StaticData() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(searchFilter);
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPersonalData = personalData.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (id) => {
    setSearchData((prevSearchData) => {
      const updatedSearchData = prevSearchData.map((item) => {
        if (item.id === id) {
          console.log(item.isTrue, id);
          return {
            ...item,
            isTrue: !item.isTrue,
          };
        }
        return item;
      });
      return updatedSearchData;
    });
  };

  const handleShow = (id) => {
    personalData.map((item) => {
      if (item.id === id) {
        item.isEdit = !item.isEdit
      }
      console.log(item.isEdit);
    });
    return personalData
  };

  return (
    <>
      <div className="w-full h-16 border flex justify-between items-center pl-4 bg-[#e5e9eb73] relative">
        <input
          type="text"
          placeholder="Поиск"
          className="w-96 border-2 pl-8 py-1 outline-none rounded-md"
          value={searchQuery}
          onChange={handleSearchChange}
          onClick={() => setShowSearchFilter(!showSearchFilter)}
        />
        {showSearchFilter && (
          <div className="z-20 w-96 border-2 rounded-md bg-[#f2f7f9d2] flex flex-col items-center absolute top-[95%] left-[1%]">
            {searchData.map((search) => {
              return (
                <span
                  key={search.id}
                  className="flex items-center justify-between px-3 h-14 w-[100%] border-b-2"
                >
                  <p>{search.name}</p>
                  <button
                    className={`${
                      search.isTrue ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={() => handleToggle(search.id)}
                  >
                    <span
                      className={`${
                        search.isTrue ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </span>
              );
            })}
            <button
              onClick={() => setShowSearchFilter(!showSearchFilter)}
              className="bg-blue-500 w-full py-1 flex items-center justify-center text-white text-xl rounded-b-md"
            >
              <MdCloseFullscreen />
            </button>
          </div>
        )}
        <span className="absolute left-[1.5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_4634_805)">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#B0BABF"
              />
            </g>
            <defs>
              <clipPath id="clip0_4634_805">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="px-5 flex items-center gap-2">
          <span className="flex items-center border-2 rounded-md">
            <button className="w-8 h-8 rounded-l-md bg-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clipPath="url(#clip0_4634_812)">
                  <path
                    d="M8.31003 1.49503C8.06503 1.25003 7.67003 1.25003 7.42503 1.49503L3.27003 5.65003C3.07503 5.84503 3.07503 6.16003 3.27003 6.35503L7.42503 10.51C7.67003 10.755 8.06503 10.755 8.31003 10.51C8.55503 10.265 8.55503 9.87003 8.31003 9.62503L4.69003 6.00003L8.31503 2.37503C8.55503 2.13503 8.55503 1.73503 8.31003 1.49503Z"
                    fill="#4094F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4634_812">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span className="border-x-2 h-8 w-20 flex items-center justify-center bg-white">
              Today
            </span>
            <button className="w-8 h-8 rounded-r-md bg-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clipPath="url(#clip0_4634_818)">
                  <path
                    d="M3.69 10.5049C3.935 10.7499 4.33 10.7499 4.575 10.5049L8.73 6.3499C8.925 6.1549 8.925 5.8399 8.73 5.6449L4.575 1.4899C4.33 1.2449 3.935 1.2449 3.69 1.4899C3.445 1.7349 3.445 2.1299 3.69 2.3749L7.31 5.9999L3.685 9.6249C3.445 9.8649 3.445 10.2649 3.69 10.5049Z"
                    fill="#4094F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4634_818">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </span>
          <p className="w-28 h-full flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_4634_827)">
                <path
                  d="M8.33333 8.35L12.5 8.35V17.5H8.33333L8.33333 8.35ZM14.1667 17.5H16.6667C17.5833 17.5 18.3333 16.75 18.3333 15.8333V8.33333L14.1667 8.33333V17.5ZM16.6667 2.5L4.16667 2.5C3.25 2.5 2.5 3.25 2.5 4.16667L2.5 6.66667L18.3333 6.66667V4.16667C18.3333 3.25 17.5833 2.5 16.6667 2.5ZM2.5 15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H6.66667L6.66667 8.33333H2.5L2.5 15.8333Z"
                  fill="#303940"
                />
              </g>
              <defs>
                <clipPath id="clip0_4634_827">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Столбцы
          </p>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-28 h-full flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.54169 4.67492C5.47503 7.15825 8.33336 10.8333 8.33336 10.8333L8.33336 14.9999C8.33336 15.9166 9.08336 16.6666 10 16.6666C10.9167 16.6666 11.6667 15.9166 11.6667 14.9999V10.8333C11.6667 10.8333 14.525 7.15825 16.4584 4.67492C16.8834 4.12492 16.4917 3.33325 15.7917 3.33325L4.20003 3.33325C3.50836 3.33325 3.11669 4.12492 3.54169 4.67492Z"
                fill="#303940"
              />
            </svg>
            Фильтр
          </button>
          <p className="w-28 h-full flex items-center justify-center gap-1">
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
                d="M4.16663 15.8333C4.16663 15.6122 4.25442 15.4003 4.4107 15.244C4.56698 15.0877 4.77895 14.9999 4.99996 14.9999L15 14.9999C15.221 14.9999 15.4329 15.0877 15.5892 15.244C15.7455 15.4003 15.8333 15.6122 15.8333 15.8333C15.8333 16.0543 15.7455 16.2662 15.5892 16.4225C15.4329 16.5788 15.221 16.6666 15 16.6666H4.99996C4.77895 16.6666 4.56698 16.5788 4.4107 16.4225C4.25442 16.2662 4.16663 16.0543 4.16663 15.8333ZM6.91079 9.41075C7.06707 9.25453 7.27899 9.16676 7.49996 9.16676C7.72093 9.16676 7.93285 9.25453 8.08913 9.41075L9.16663 10.4883V4.16659C9.16663 3.94557 9.25442 3.73361 9.4107 3.57733C9.56698 3.42105 9.77895 3.33325 9.99996 3.33325C10.221 3.33325 10.4329 3.42105 10.5892 3.57733C10.7455 3.73361 10.8333 3.94557 10.8333 4.16659V10.4883L11.9108 9.41075C11.9877 9.33116 12.0796 9.26767 12.1813 9.224C12.283 9.18033 12.3923 9.15734 12.503 9.15638C12.6136 9.15541 12.7233 9.1765 12.8258 9.2184C12.9282 9.2603 13.0212 9.32218 13.0995 9.40042C13.1777 9.47867 13.2396 9.57171 13.2815 9.67412C13.3234 9.77654 13.3445 9.88627 13.3435 9.99692C13.3425 10.1076 13.3196 10.2169 13.2759 10.3186C13.2322 10.4203 13.1687 10.5122 13.0891 10.5891L10.5891 13.0891C10.4329 13.2453 10.2209 13.3331 9.99996 13.3331C9.77899 13.3331 9.56707 13.2453 9.41079 13.0891L6.91079 10.5891C6.75457 10.4328 6.6668 10.2209 6.6668 9.99992C6.6668 9.77895 6.75457 9.56702 6.91079 9.41075Z"
                fill="#303940"
              />
            </svg>
            Скачать
          </p>
          {showFilter && (
            <div className="w-[564px] h-32 border-2 rounded-md bg-[#F7F9FB] flex  items-center justify-center absolute top-[95%] left-[50%]">
              <div className="w-[95%] h-[80%] flex flex-wrap gap-x-4">
                <select className="w-[292px] h-10 rounded-md flex items-center px-2 outline-none border-2">
                  <option>Тип доставки</option>
                  <option value="On foot">Пешком</option>
                  <option value="Bike">Велосипед</option>
                  <option value="In car">В машине</option>
                </select>
                <select className="w-[160px] h-10 rounded-md flex items-center px-2 outline-none border-2">
                  <option value="Pickup">Самовывоз</option>
                  <option value="Delivery">Доставка</option>
                </select>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="bg-[#F7665926] w-8 h-8 rounded-md flex items-center justify-center text-red-500 mt-1"
                >
                  <IoCloseSharp />
                </button>
                <button className="w-[180px] h-10 flex items-center justify-center gap-1 bg-[#38D9B9] rounded-md text-white text-sm font-semibold">
                  {" "}
                  <span className="text-lg fonb">
                    <MdAdd />
                  </span>{" "}
                  Добавить филтер
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="bg-white w-[97%] h-[1200px] flex flex-col items-center gap-5 rounded-md">
          <div className="w-[95%] border-b-2 flex items-center h-[5%]">
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Курьер в пути
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Новый
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Оператор принял
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Загатовка
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Завершен
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Все заказы
            </p>
          </div>
          <div className="w-[95%] h-[90%] border-2 rounded-md relative">
            <div className="border-b-2 w-full h-12 flex justify-between">
              <span className="flex items-center w-14 h-full justify-center">
                <input type="checkbox" className="w-5" />
              </span>
              <b className="w-12 h-full flex items-center justify-center">№</b>
              <b className=" px-1 w-[224px] h-full flex items-center justify-center">
                Клиент
              </b>
              <b className=" px-1 w-[104px] h-full flex items-center justify-center">
                Ид.заказа
              </b>
              <b className=" px-1 w-[120px] h-full flex items-center justify-center">
                Таймер
              </b>
              <b className=" px-1 w-[88px] h-full flex items-center justify-center">
                Курьер
              </b>
              <b className=" px-1 w-[224px] h-full flex items-center justify-center">
                Филиал
              </b>
              <b className=" px-1 w-[136px] h-full flex items-center justify-center">
                Тип доставки
              </b>
              <b className=" px-1 w-32 h-full flex items-center justify-center">
                Цена заказа
              </b>
              <b className=" px-1 w-36 h-full flex items-center justify-center">
                Адресс клиента
              </b>
              <span className="w-12 h-full"></span>
            </div>
            {filteredPersonalData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border-b-2 w-full h-16 flex justify-between relative"
                >
                  <span className="flex items-center w-14 h-full justify-center">
                    <input type="checkbox" className="w-5" />
                  </span>
                  <b className="w-12 h-full flex items-center justify-center">
                    1
                  </b>
                  <span className="px-1 w-[224px] h-full flex flex-col justify-center items-center gap-1">
                    <p>{data.name}</p>
                    <p className="text-blue-500">{data.number}</p>
                  </span>
                  <p className="px-1 w-[104px] h-full flex items-center justify-center">
                    {data.id}
                  </p>
                  <span className="px-1 w-[120px] h-full flex items-center justify-center">
                    <p className="bg-[#38D9B933] px-2 py-1 rounded-md text-green-500">
                      {data.timer}
                    </p>
                  </span>
                  <b className="px-1 w-[88px] h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                    >
                      <path d="M14 0.5H0V1.5H14V0.5Z" fill="#6E8BB7" />
                    </svg>
                  </b>
                  <span className="px-1 w-[224px] h-full flex flex-col justify-center items-center gap-1">
                    <p>{data.branch}</p>
                    <p className="text-blue-500">{data.phone}</p>
                  </span>
                  <span className="px-1 w-[136px] h-full flex items-center justify-center capitalize">
                    <p className="bg-[#F8DD4E4D] px-2 py-1 rounded-md text-[#D29404]">
                      {data.type}
                    </p>
                  </span>
                  <p className="px-1 w-32 h-full flex items-center justify-center">
                    {data.price}$
                  </p>
                  <p className="px-1 w-36 h-full flex items-center">
                    {data.clientAddress}
                  </p>
                  <span className="w-12 h-full flex items-center justify-center">
                    <button
                      onClick={() => handleShow(data.id)}
                      className="border-2 p-1 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.66671 9.99992C6.66671 10.4419 6.49111 10.8659 6.17855 11.1784C5.86599 11.491 5.44207 11.6666 5.00004 11.6666C4.55801 11.6666 4.13409 11.491 3.82153 11.1784C3.50897 10.8659 3.33337 10.4419 3.33337 9.99992C3.33337 9.55789 3.50897 9.13397 3.82153 8.82141C4.13409 8.50885 4.55801 8.33325 5.00004 8.33325C5.44207 8.33325 5.86599 8.50885 6.17855 8.82141C6.49111 9.13397 6.66671 9.55789 6.66671 9.99992ZM11.6667 9.99992C11.6667 10.4419 11.4911 10.8659 11.1786 11.1784C10.866 11.491 10.4421 11.6666 10 11.6666C9.55801 11.6666 9.13409 11.491 8.82153 11.1784C8.50897 10.8659 8.33337 10.4419 8.33337 9.99992C8.33337 9.55789 8.50897 9.13397 8.82153 8.82141C9.13409 8.50885 9.55801 8.33325 10 8.33325C10.4421 8.33325 10.866 8.50885 11.1786 8.82141C11.4911 9.13397 11.6667 9.55789 11.6667 9.99992ZM15 11.6666C15.4421 11.6666 15.866 11.491 16.1786 11.1784C16.4911 10.8659 16.6667 10.4419 16.6667 9.99992C16.6667 9.55789 16.4911 9.13397 16.1786 8.82141C15.866 8.50885 15.4421 8.33325 15 8.33325C14.558 8.33325 14.1341 8.50885 13.8215 8.82141C13.509 9.13397 13.3334 9.55789 13.3334 9.99992C13.3334 10.4419 13.509 10.8659 13.8215 11.1784C14.1341 11.491 14.558 11.6666 15 11.6666Z"
                          fill="#4094F7"
                        />
                      </svg>
                    </button>
                  </span>
                  {data.isEdit === true && (
                    <div className="z-30 w-64 h-64 bg-[#fff] flex flex-col rounded-md justify-between absolute left-[75%] shadow-xl">
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#FDF5CA] text-[#D29404] flex items-center justify-center">
                          <IoMdRefresh />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Повторить выставить счет
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#F6EBFD] text-[#C479F3] flex items-center justify-center">
                          <FaCar />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Курьер отменил
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#E3EFFE] text-[#4094F7] flex items-center justify-center">
                          <MdEdit />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Изменить
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#FEE8E6] text-[#F76659] flex items-center justify-center">
                          <IoMdClose />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Отменено
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#DDF6F1] text-[#1AC19D] flex items-center justify-center">
                          <FaCheck />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Завершить
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
