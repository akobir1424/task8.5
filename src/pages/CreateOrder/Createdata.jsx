import { useState } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { IoClose, IoPrint } from "react-icons/io5";
import { food } from "../../components/data";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCar, FaEquals, FaMinus, FaPlus } from "react-icons/fa6";
import { TbSum } from "react-icons/tb";

export default function Createdata() {
  const [secondPhone, setSecondPhone] = useState(false);
  const [addBtnShow, setaddBtnShow] = useState(true);
  const [BtnShow, setBtnShow] = useState(true);
  const [selectValue, setselectValue] = useState("");
  const [selectValue2, setselectValue2] = useState("");
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);

  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  const handleDecrement2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };
  const handleAdd = () => {
    if (showFirst === false && showSecond === false) {
      setShowFirst(!showFirst)
    }
    else if(showSecond === false && showFirst === true) {
      setShowSecond(!showSecond)
      setBtnShow(!BtnShow)
    }
    else if(showSecond === true && showFirst === false) {
      setShowFirst(!showFirst)
      setBtnShow(!BtnShow)
    }
  };

  return (
    <>
      <div className="w-full h-16 border flex justify-between items-center pl-4 bg-[#e5e9eb73] relative">
        <div className="flex items-center h-full gap-2">
          <button className="h-full w-[77px] text-[#6E8BB7] focus-within:border-[#4094F7] focus-within:text-[#4094F7] border-b-[3px] transition-all border-transparent hover:border-[#4094F7] hover:text-[#4094F7]">
            Основное
          </button>
          <button className="h-full w-[187px] text-[#6E8BB7] border-b-[3px] focus-within:border-[#4094F7] focus-within:text-[#4094F7] transition-all border-transparent hover:border-[#4094F7] hover:text-[#4094F7]">
            История изменений
          </button>
        </div>
        <button className="px-3 w-[105px] h-full flex items-center justify-center gap-2 text-black hover:bg-[#4094F7] hover:text-white">
          <IoPrint />
          Печать
        </button>
      </div>
      <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="flex flex-col w-[96%] h-[1300px] gap-10">
          <div className="flex gap-10">
            <div className="bg-white w-[662px] max-h-[310px] pb-2 rounded-md flex flex-col items-center">
              <h2 className="w-full px-4 py-2 border-b-2">Клиент</h2>
              <div className="flex flex-col w-[96%] py-2">
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Тип клиента</b>
                  <select className="w-[510px] h-8 px-2 border-2 outline-none rounded-md">
                    <option>Тип клиента</option>
                    <option value="premium">Premium</option>
                    <option value="standart">Standard</option>
                    <option value="basic">Basic</option>
                  </select>
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Имя</b>
                  <input
                    type="text"
                    placeholder="Введите имя"
                    className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Фамилия</b>
                  <input
                    type="text"
                    placeholder="Фамилия"
                    className="w-[510px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Телефон</b>
                  <input
                    type="text"
                    placeholder="Телефон"
                    className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                  {addBtnShow && (
                    <button
                      onClick={() => {
                        setaddBtnShow(!addBtnShow);
                        setSecondPhone(!secondPhone);
                      }}
                      className="w-7 h-7 rounded-md flex items-center justify-center bg-[#4094F71A] text-[#4094F7] text-base"
                    >
                      <IoMdAdd />
                    </button>
                  )}
                </span>
                {secondPhone && (
                  <span className="flex items-center py-1 gap-3">
                    <b className="w-24 text-[#48535B]">Телефон 2</b>
                    <input
                      type="text"
                      placeholder="Телефон 2"
                      className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
                    />
                    <button
                      onClick={() => {
                        setaddBtnShow(!addBtnShow);
                        setSecondPhone(!secondPhone);
                      }}
                      className="w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base"
                    >
                      <IoMdRemove />
                    </button>
                  </span>
                )}
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Описание</b>
                  <input
                    type="text"
                    placeholder="Описание"
                    className="w-[460px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
              </div>
            </div>
            <div className="bg-white w-[662px] rounded-md flex flex-col items-center pb-2 gap-2">
              <h2 className="w-full px-4 py-2 border-b-2">Доставка</h2>
              <div className="flex flex-wrap w-[96%] py-2 gap-8">
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Тип клиента</b>
                  <select className="w-[191px] h-8 px-2 border-2 outline-none rounded-md">
                    <option>Тип доставки</option>
                    <option value="food">Еда</option>
                    <option value="goods">Товары</option>
                    <option value="package">Посылка </option>
                  </select>
                </span>
                <span className="flex items-center py-1 ">
                  <b className="w-24 text-[#48535B]">Тариф</b>
                  <select className="w-[191px] h-8 px-2 border-2 outline-none rounded-md">
                    <option>Тариф</option>
                    <option value="food">Еда</option>
                    <option value="goods">Товары</option>
                    <option value="package">Посылка </option>
                  </select>
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Адрес</b>
                  <input
                    type="text"
                    placeholder="Адрес или обьект"
                    className="w-[518px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.07306925311!2d69.201237675913!3d41.28551417131307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1706051648080!5m2!1sen!2s"
                width="600"
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex flex-wrap w-[96%] py-2 gap-8">
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Филиал</b>
                  <input
                    type="text"
                    placeholder="Филиал"
                    className="w-[518px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Дом</b>
                  <input
                    type="text"
                    placeholder="Дом"
                    className="w-[191px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Квартира</b>
                  <input
                    type="text"
                    placeholder="Квартира"
                    className="w-[191px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
                <span className="flex items-center py-1 gap-3">
                  <b className="w-24 text-[#48535B]">Этаж</b>
                  <input
                    type="text"
                    placeholder="Этаж"
                    className="w-[518px] h-8 px-2 border-2 outline-none rounded-md"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[410px] bg-white rounded-md flex flex-col items-center gap-4">
            <h2 className="w-full px-4 py-3 border-b-2">Продукты</h2>
            {showFirst && (
              <div className="w-[97%] h-[92px] flex items-center gap-5">
                <span className="flex  flex-col w-[384px] h-full justify-around">
                  <b>Наименование</b>
                  <select
                    value={selectValue}
                    onChange={(e) => setselectValue(e.target.value)}
                    className="cursor-pointer h-8 px-2 py-1 rounded-md border-2 outline-none focus-within:border-blue-500"
                  >
                    {food.map((foodItem) => {
                      return (
                        <option key={foodItem.id} value={foodItem.name}>
                          {foodItem.name}
                        </option>
                      );
                    })}
                  </select>
                </span>
                <span className="flex  flex-col h-full justify-around">
                  <b>Цена</b>
                  <p className="w-40 h-8 rounded-md border-2 flex items-center">
                    {food.map((item) => {
                      if (item.name === selectValue) {
                        return (
                          <span
                            className="w-full h-8 rounded-md border-2 border-blue-500 flex items-center pl-2"
                            key={item.id}
                          >
                            {item.price} so`m
                          </span>
                        );
                      }
                    })}
                  </p>
                </span>
                <span className="mt-10 text-blue-500 text-xl">
                  <IoMdClose />
                </span>
                <span className="mt-10 flex items-center rounded-md overflow-hidden">
                  <button
                    onClick={handleDecrement}
                    className="h-8 w-8 border-2 rounded-l-md flex items-center justify-center text-blue-500 outline-none"
                  >
                    <FaMinus />
                  </button>
                  <p className="w-14 h-8 flex items-center justify-center border-y-2">
                    {count}
                  </p>
                  <button
                    onClick={handleIncrement}
                    className="h-8 w-8 border-2 rounded-r-md flex items-center justify-center text-blue-500 outline-none"
                  >
                    <FaPlus />
                  </button>
                </span>
                <span className="mt-10 text-blue-500 text-xl">
                  <FaEquals />
                </span>
                <span className="flex  flex-col h-full justify-around">
                  <b>Общая стоимость</b>
                  <p className="w-40 h-8 rounded-md border-2 flex items-center">
                    {food.map((item) => {
                      if (item.name === selectValue) {
                        let all = item.price * count;
                        return (
                          <span
                            className="w-full h-8 rounded-md border-2 border-blue-500 flex items-center pl-2"
                            key={item.id}
                          >
                            {all} so`m
                          </span>
                        );
                      }
                    })}
                  </p>
                </span>
                <span className="flex  flex-col h-full justify-around">
                  <b>Описание</b>
                  <input
                    type="text"
                    placeholder="Описание"
                    className="w-[305px] pl-2 py-1 h-8 border-2 rounded-md outline-none focus-within:border-blue-500"
                  />
                </span>
                <button onClick={() => {setShowFirst(!showFirst), setBtnShow(true)}} className="mt-10 w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base">
                  <IoClose />
                </button>
              </div>
            )}
            {showSecond && (
              <div className="w-[97%] h-[92px] flex items-center gap-5">
                <span className="flex  flex-col w-[384px] h-full justify-around">
                  <b>Наименование</b>
                  <select
                    value={selectValue2}
                    onChange={(e) => setselectValue2(e.target.value)}
                    className="cursor-pointer h-8 px-2 py-1 rounded-md border-2 outline-none focus-within:border-blue-500"
                  >
                    {food.map((foodItem) => {
                      return (
                        <option key={foodItem.id} value={foodItem.name}>
                          {foodItem.name}
                        </option>
                      );
                    })}
                  </select>
                </span>
                <span className="flex  flex-col h-full justify-around">
                  <b>Цена</b>
                  <p className="w-40 h-8 rounded-md border-2 flex items-center">
                    {food.map((item) => {
                      if (item.name === selectValue2) {
                        return (
                          <span
                            className="w-full h-8 rounded-md border-2 border-blue-500 flex items-center pl-2"
                            key={item.id}
                          >
                            {item.price} so`m
                          </span>
                        );
                      }
                    })}
                  </p>
                </span>
                <span className="mt-10 text-blue-500 text-xl">
                  <IoMdClose />
                </span>
                <span className="mt-10 flex items-center rounded-md overflow-hidden">
                  <button
                    onClick={handleDecrement2}
                    className="h-8 w-8 border-2 rounded-l-md flex items-center justify-center text-blue-500 outline-none"
                  >
                    <FaMinus />
                  </button>
                  <p className="w-14 h-8 flex items-center justify-center border-y-2">
                    {count2}
                  </p>
                  <button
                    onClick={handleIncrement2}
                    className="h-8 w-8 border-2 rounded-r-md flex items-center justify-center text-blue-500 outline-none"
                  >
                    <FaPlus />
                  </button>
                </span>
                <span className="mt-10 text-blue-500 text-xl">
                  <FaEquals />
                </span>
                <span className="flex  flex-col h-full justify-around">
                  <b>Общая стоимость</b>
                  <p className="w-40 h-8 rounded-md border-2 flex items-center">
                    {food.map((item) => {
                      if (item.name === selectValue2) {
                        let all = item.price * count2;
                        return (
                          <span
                            className="w-full h-8 rounded-md border-2 border-blue-500 flex items-center pl-2"
                            key={item.id}
                          >
                            {all} so`m
                          </span>
                        );
                      }
                    })}
                  </p>
                </span>
                <span className="flex  flex-col h-full justify-around">
                  <b>Описание</b>
                  <input
                    type="text"
                    placeholder="Описание"
                    className="w-[305px] pl-2 py-1 h-8 border-2 rounded-md outline-none focus-within:border-blue-500"
                  />
                </span>
                <button onClick={() => {setShowSecond(!showSecond),setBtnShow(true)}} className="mt-10 w-7 h-7 rounded-md flex items-center justify-center bg-[#FEE8E6] text-[#F76659] text-base">
                  <IoClose />
                </button>
              </div>
            )}
            {BtnShow && (
              <button onClick={() => handleAdd()} className="w-[97%] h-10 rounded-md border-dashed border-2 bg-[#6E8BB71A] flex items-center justify-center gap-1 text-[#6E8BB7]">
              <IoMdAdd />
              Добавить продукт
            </button>
            )}
            <div className="w-full border-t-2 h-44 flex">
              <div className="w-[50%] flex flex-col items-center justify-between px-2 py-1 border-r-2">
                <span className="flex items-center h-14 gap-5">
                  <b>Типы оплаты</b>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img className="w-7" src="https://s3-alpha-sig.figma.com/img/724d/d3de/f3bcd898a91a1562128c7fff2daa2afe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COh4UXPLyrZLzb2CWunJzcxkLwGLxpVBf8yCWI~gh0pjCSXSZ11dMAOxDXTwl9oQpGStC4MV3y2hS60tK9NQ~TIdHQ2c~gpDKDZz9L~SPRYxVB9PqAKKwxmOZ7x1~Y3rqsV8G8ib2YQC7hdH8NESgN-RMSZ9kUrLytoW6cvwHXlvpiDvr0mBumB~v3wSWkby6O9b591SRltmMja14C2TSA0g3GYoQ0GmEU1tYfeVZ2DQRXKC~ynZdmx5Lp~mtqhtYZqpC7iaUeBCmCyFo811RO8mb8460M046ySBxOd6vFPp636KylW3AlALI6l4xed3qUCTAuHiDLi6inN6sLQIWw__" alt="" />
                  </button>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img className="w-12" src="https://s3-alpha-sig.figma.com/img/7f1d/0dbc/cfefd3d50bb1756d2abead27733f1be2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7ppdSktvpQ8rFSWnMwqgpWKZFdcj3fy4lrjgp1FFg192hn7MF0HBrJx6wFabTaR5k4~18bTUigQbBuj-bU4Xy~X4GC8M2VUxMw9yrAxfalmsQ6jE1af9YaG-wD5IFw0jmShm3amewTyPEg8Ej8lqu6dpniSGODYVc4wusMaocZvy228YgiwENCT2x9G1VmUFDWii4cWDYKMQGtO2YFCzhZLBd97qZmHWspmP6MouB4WyDUBhWd7g8HwmbaXVBQIHes~YAQcCHK1VmjrJnp05iJR48bEoTI2-X7Baogu2Bzbu7Yow8u-fpctNEoKOFM~nLlk0qDFicrVprUJjfBmkw__" alt="" />
                  </button>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img className="w-20" src="https://api.logobank.uz/media/logos_png/Uzum-01.png" alt="" />
                  </button>
                  <button className="w-[117px] h-10 rounded-md border-2 flex items-center justify-center bg-[#e5e9ebac]">
                    <img className="w-7" src="https://cdn-icons-png.freepik.com/512/925/925065.png" alt="" />
                  </button>
                 </span>
                 <span className="flex items-center">
                  <b className="w-[122px]">Курьер</b>
                  <select className="w-[530px] h-8 border-2 rounded-md px-3">
                    <option>Курьер</option>
                    <option>Choshtepa</option>
                    <option>Olmazor</option>
                    <option>Chilonzor</option>
                    <option>Mirzo Ulug`bek</option>
                    <option>Novza</option>
                  </select>
                 </span>
                 <span className="flex items-center">
                  <b className="w-[122px]">Оператор</b>
                  <select className="w-[530px] h-8 border-2 rounded-md px-3">
                    <option>Курьер</option>
                    <option>Choshtepa</option>
                    <option>Olmazor</option>
                    <option>Chilonzor</option>
                    <option>Mirzo Ulug`bek</option>
                    <option>Novza</option>
                  </select>
                 </span>
              </div>
              <div className="w-[50%] flex flex-col items-center justify-between px-2 py-1">
                <span className="flex items-center h-10 justify-between w-[85%]">
                  <p className="flex items-center text-blue-500 gap-3">
                    <RiMoneyDollarCircleFill />
                    Сумма заказа
                  </p>
                  <b>2 00 00 000</b>
                </span>
                <span className="flex items-center h-10 justify-between w-[85%] border-b-2">
                  <p className="flex items-center text-blue-500 gap-3">
                    <FaCar />
                    Сумма доставки
                  </p>
                  <b>10 000 so`m</b>
                </span>
                <span className="flex items-center h-10 justify-between w-[85%]">
                  <p className="flex items-center text-blue-500 gap-3">
                    <TbSum />
                    Итого
                  </p>
                  <b>10 000 so`m</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
