import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { dataBig, months, data, report } from "../../components/data";

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const percentage = 60;
  const secondPercentage = 40;

  return (
    <div className="bg-[#DCE9F9] w-[100%]  h-screen flex justify-center overflow-y-scroll py-5 ">
      <div className="w-[95%] h-[1500px]  flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
            <span className="flex flex-col">
              <b className="text-[#4094F7] text-2xl font-bold">24</b>
              <p className="text-[#6E8BB7] text-sm">Филиалы</p>
            </span>
            <span className="p-5 bg-[#4094f726] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M29.2149 7.43636V2.86136C29.2149 2.22922 28.7041 1.71851 28.072 1.71851H3.92915C3.29701 1.71851 2.78629 2.22922 2.78629 2.86136V7.43636C2.18987 7.47208 1.71487 7.9685 1.71487 8.57565V13.2792C1.71258 14.1437 1.88761 14.9994 2.22915 15.7935C2.38272 16.1578 2.57201 16.5006 2.78629 16.8256V29.1471C2.78629 29.7756 3.29701 30.2899 3.92915 30.2899H28.072C28.7041 30.2899 29.2149 29.7792 29.2149 29.1471V16.8256C29.4325 16.4998 29.6191 16.1543 29.772 15.7935C30.1113 14.9971 30.2863 14.1506 30.2863 13.2792V8.57565C30.2863 7.9685 29.8113 7.47208 29.2149 7.43636ZM5.35772 4.28993H26.6434V7.43279H5.35772V4.28993ZM18.2863 27.7221H13.7149V24.0042H18.2863V27.7221ZM26.6434 27.7221H20.572V22.8614C20.572 22.2292 20.0613 21.7185 19.4291 21.7185H12.572C11.9399 21.7185 11.4292 22.2292 11.4292 22.8614V27.7221H5.35772V19.0721C5.46129 19.1221 5.56844 19.1721 5.67915 19.2149C6.47558 19.5506 7.32201 19.7185 8.19344 19.7185C9.06487 19.7185 9.90772 19.5506 10.7077 19.2149C11.2006 19.0078 11.6649 18.7435 12.0899 18.4256C12.097 18.4221 12.1042 18.4221 12.1113 18.4256C12.5376 18.7449 13.0019 19.01 13.4934 19.2149C14.2899 19.5506 15.1363 19.7185 16.0077 19.7185C16.8792 19.7185 17.722 19.5506 18.522 19.2149C19.0149 19.0078 19.4791 18.7435 19.9042 18.4256C19.9113 18.4221 19.9184 18.4221 19.9256 18.4256C20.3519 18.7449 20.8162 19.01 21.3077 19.2149C22.1041 19.5506 22.9506 19.7185 23.822 19.7185C24.6934 19.7185 25.5363 19.5506 26.3363 19.2149C26.4434 19.1685 26.5506 19.1221 26.6577 19.0721V27.7221H26.6434ZM27.7149 13.2792C27.7149 15.4149 25.9649 17.1471 23.8113 17.1471C22.3542 17.1471 21.0827 16.3578 20.4113 15.1864C20.3077 15.0078 20.122 14.8971 19.9149 14.8971H19.8934C19.6899 14.8971 19.5006 15.0078 19.397 15.1864C19.0544 15.7839 18.5596 16.2801 17.9631 16.6245C17.3665 16.9689 16.6894 17.1492 16.0006 17.1471C14.547 17.1471 13.2792 16.3614 12.6077 15.1935C12.5006 15.0114 12.3077 14.8971 12.097 14.8971C11.8863 14.8971 11.6899 15.0114 11.5863 15.1935C11.2417 15.7888 10.7463 16.2828 10.15 16.6257C9.55378 16.9687 8.87771 17.1485 8.18987 17.1471C6.03629 17.1471 4.28629 15.4149 4.28629 13.2792V10.0221C4.28629 10.0114 4.29344 10.0042 4.30415 10.0042H27.697C27.7077 10.0042 27.7149 10.0114 27.7149 10.0221V13.2792Z"
                  fill="#4094F7"
                />
              </svg>
            </span>
          </div>
          <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
            <span className="flex flex-col">
              <b className="text-[#4094F7] text-2xl font-bold">110,823</b>
              <p className="text-[#6E8BB7] text-sm">Клиенты</p>
            </span>
            <span className="p-5 bg-[#4094f726] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M14.6667 10.6667C14.6667 11.7276 14.2452 12.745 13.4951 13.4951C12.7449 14.2453 11.7275 14.6667 10.6667 14.6667C9.6058 14.6667 8.58839 14.2453 7.83824 13.4951C7.08809 12.745 6.66667 11.7276 6.66667 10.6667C6.66667 9.60582 7.08809 8.58841 7.83824 7.83826C8.58839 7.08811 9.6058 6.66669 10.6667 6.66669C11.7275 6.66669 12.7449 7.08811 13.4951 7.83826C14.2452 8.58841 14.6667 9.60582 14.6667 10.6667ZM25.3333 10.6667C25.3333 11.192 25.2299 11.7121 25.0289 12.1974C24.8278 12.6827 24.5332 13.1237 24.1618 13.4951C23.7903 13.8665 23.3494 14.1612 22.8641 14.3622C22.3788 14.5632 21.8586 14.6667 21.3333 14.6667C20.808 14.6667 20.2879 14.5632 19.8026 14.3622C19.3173 14.1612 18.8763 13.8665 18.5049 13.4951C18.1335 13.1237 17.8388 12.6827 17.6378 12.1974C17.4368 11.7121 17.3333 11.192 17.3333 10.6667C17.3333 9.60582 17.7548 8.58841 18.5049 7.83826C19.2551 7.08811 20.2725 6.66669 21.3333 6.66669C22.3942 6.66669 23.4116 7.08811 24.1618 7.83826C24.9119 8.58841 25.3333 9.60582 25.3333 10.6667ZM19.9067 25.3334C19.968 24.8974 20 24.4534 20 24C20.0031 21.9052 19.2983 19.8707 18 18.2267C19.0134 17.6416 20.1631 17.3335 21.3333 17.3335C22.5035 17.3335 23.6531 17.6415 24.6666 18.2266C25.68 18.8117 26.5216 19.6533 27.1068 20.6667C27.6919 21.6802 28 22.8298 28 24V25.3334H19.9067ZM10.6667 17.3334C12.4348 17.3334 14.1305 18.0357 15.3807 19.286C16.631 20.5362 17.3333 22.2319 17.3333 24V25.3334H4V24C4 22.2319 4.70238 20.5362 5.95262 19.286C7.20286 18.0357 8.89856 17.3334 10.6667 17.3334Z"
                  fill="#4094F7"
                />
              </svg>
            </span>
          </div>
          <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
            <span className="flex flex-col">
              <b className="text-[#4094F7] text-2xl font-bold">110,823</b>
              <p className="text-[#6E8BB7] text-sm">Подписчики</p>
            </span>
            <span className="p-5 bg-[#4094f726] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_88_4935)">
                  <path
                    d="M16.0001 29.3333C17.4667 29.3333 18.6667 28.1333 18.6667 26.6666H13.3334C13.3334 28.1333 14.5201 29.3333 16.0001 29.3333ZM24.0001 21.3333V14.6666C24.0001 10.5733 21.8134 7.14665 18.0001 6.23998V5.33331C18.0001 4.22665 17.1067 3.33331 16.0001 3.33331C14.8934 3.33331 14.0001 4.22665 14.0001 5.33331V6.23998C10.1734 7.14665 8.00007 10.56 8.00007 14.6666V21.3333L6.28007 23.0533C5.44007 23.8933 6.02674 25.3333 7.2134 25.3333H24.7734C25.9601 25.3333 26.5601 23.8933 25.7201 23.0533L24.0001 21.3333Z"
                    fill="#4094F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_88_4935">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="bg-white w-[271px] h-[120px] rounded-md flex items-center justify-around gap-10">
            <span className="flex flex-col">
              <b className="text-[#4094F7] text-2xl font-bold">75</b>
              <p className="text-[#6E8BB7] text-sm">Курьеры</p>
            </span>
            <span className="p-5 bg-[#4094f726] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_88_4943)">
                  <path
                    d="M25.2267 8.01335C24.96 7.22669 24.2133 6.66669 23.3333 6.66669H8.66667C7.78667 6.66669 7.05333 7.22669 6.77333 8.01335L4.14667 15.5734C4.05333 15.8534 4 16.1467 4 16.4534V26C4 27.1067 4.89333 28 6 28C7.10667 28 8 27.1067 8 26V25.3334H24V26C24 27.0934 24.8933 28 26 28C27.0933 28 28 27.1067 28 26V16.4534C28 16.16 27.9467 15.8534 27.8533 15.5734L25.2267 8.01335ZM8.66667 21.3334C7.56 21.3334 6.66667 20.44 6.66667 19.3334C6.66667 18.2267 7.56 17.3334 8.66667 17.3334C9.77333 17.3334 10.6667 18.2267 10.6667 19.3334C10.6667 20.44 9.77333 21.3334 8.66667 21.3334ZM23.3333 21.3334C22.2267 21.3334 21.3333 20.44 21.3333 19.3334C21.3333 18.2267 22.2267 17.3334 23.3333 17.3334C24.44 17.3334 25.3333 18.2267 25.3333 19.3334C25.3333 20.44 24.44 21.3334 23.3333 21.3334ZM6.66667 14.6667L8.36 9.57335C8.54667 9.04002 9.05333 8.66669 9.62667 8.66669H22.3733C22.9467 8.66669 23.4533 9.04002 23.64 9.57335L25.3333 14.6667H6.66667Z"
                    fill="#4094F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_88_4943">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[23%] flex flex-col justify-between gap-8">
            <div className="bg-white rounded-md w-72 h-[227px] flex flex-col items-center justify-around">
              <p className="text-[#6E8BB7] text-sm w-[90%]">
                Total orders this month
              </p>
              <span className="flex items-center w-[90%] justify-between">
                <b className="text-2xl text-[#303940] font-bold">1,850</b>
                <b className="flex items-center gap-1 bg-[#f2271c1a] py-1 px-2 text-lg text-red-500 rounded-md">
                  -5%
                  <svg
                    className=" bg-[#f2271c5b] rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M6.00159 6.19329L8.58826 8.77996L11.1749 6.19329C11.4349 5.93329 11.8549 5.93329 12.1149 6.19329C12.3749 6.45329 12.3749 6.87329 12.1149 7.13329L9.05493 10.1933C8.79493 10.4533 8.37493 10.4533 8.11493 10.1933L5.05492 7.13329C4.79492 6.87329 4.79492 6.45329 5.05492 6.19329C5.31492 5.93996 5.74159 5.93329 6.00159 6.19329Z"
                      fill="#F2271C"
                    />
                  </svg>
                </b>
              </span>
              <div className="w-[90%] h-[50%]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#F8C51B"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#F8DD4E"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="basis"
                      dataKey="uv"
                      stroke="#F8C51B"
                      fill="url(#colorGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-md w-72 h-[227px] flex flex-col items-center justify-around">
              <p className="text-[#6E8BB7] text-sm w-[90%]">
                Earning this month
              </p>
              <span className="flex items-center w-[90%] justify-between">
                <b className="text-2xl text-[#303940] font-bold">$6,250</b>
                <b className="flex items-center gap-1 bg-[#1ac19d26] py-1 px-2 text-lg text-green-500 rounded-md">
                  +25%
                  <svg
                    className="bg-[#1ac19d44] rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M11.1749 9.80671L8.58826 7.22004L6.00159 9.80671C5.74159 10.0667 5.32159 10.0667 5.06159 9.80671C4.80159 9.54671 4.80159 9.12671 5.06159 8.86671L8.12159 5.80671C8.38159 5.54671 8.80159 5.54671 9.06159 5.80671L12.1216 8.86671C12.3816 9.12671 12.3816 9.54671 12.1216 9.80671C11.8616 10.06 11.4349 10.0667 11.1749 9.80671Z"
                      fill="#1AC19D"
                    />
                  </svg>
                </b>
              </span>
              <div className="w-[90%] h-[50%]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorGradient2"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#A23FEE"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#A23FEE"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="basis"
                      dataKey="uv"
                      stroke="#A23FEE"
                      fill="url(#colorGradient2)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-md w-72 h-[227px] flex flex-col items-center justify-around">
              <p className="text-[#6E8BB7] text-sm w-[90%]">
                Total orders this month
              </p>
              <span className="flex items-center w-[90%] justify-between">
                <b className="text-2xl text-[#303940] font-bold">$12,750</b>
                <b className="flex items-center gap-1 bg-[#1ac19d26] py-1 px-2 text-lg text-green-500 rounded-md">
                  +12%
                  <svg
                    className="bg-[#1ac19d44] rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M11.1749 9.80671L8.58826 7.22004L6.00159 9.80671C5.74159 10.0667 5.32159 10.0667 5.06159 9.80671C4.80159 9.54671 4.80159 9.12671 5.06159 8.86671L8.12159 5.80671C8.38159 5.54671 8.80159 5.54671 9.06159 5.80671L12.1216 8.86671C12.3816 9.12671 12.3816 9.54671 12.1216 9.80671C11.8616 10.06 11.4349 10.0667 11.1749 9.80671Z"
                      fill="#1AC19D"
                    />
                  </svg>
                </b>
              </span>
              <div className="w-[90%] h-[50%]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorGradient3"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#F2271C"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#F2271C"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="basis"
                      dataKey="uv"
                      stroke="#F2271C"
                      fill="url(#colorGradient3)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="w-[77%] flex flex-col gap-y-10">
            <div className="flex w-full justify-between">
              <div className="w-[453px] h-[208px] bg-white rounded-md flex items-center justify-around gap-2">
                <div className="w-36 h-36">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    counterClockwise
                    styles={{
                      text: {
                        fill: "#1AC19D",
                        fontWeight: "bold",
                        fontSize: "16px",
                      },
                      path: {
                        stroke: "#1AC19D",
                        strokeWidth: 9,
                      },
                      trail: {
                        stroke: "rgba(26, 193, 157, 0.1)",
                        strokeWidth: 9,
                      },
                    }}
                  />
                </div>
                <span className="flex flex-col">
                  <p className="text-[#6E8BB7] text-sm">Top Order</p>
                  <h2 className="text-[#1AC19D] text-[40px] font-bold">
                    {percentage}%
                  </h2>
                </span>
              </div>
              <div className="w-[453px] h-[208px] bg-white rounded-md flex items-center justify-around gap-2">
                <div className="w-36 h-36">
                  <CircularProgressbar
                    value={secondPercentage}
                    text={`${secondPercentage}%`}
                    counterClockwise
                    styles={{
                      text: {
                        fill: "#A23FEE",
                        fontWeight: "bold",
                        fontSize: "16px",
                      },
                      path: {
                        stroke: "#A23FEE",
                        strokeWidth: 9,
                      },
                      trail: {
                        stroke: "rgba(162, 63, 238, 0.10)",
                        strokeWidth: 9,
                      },
                    }}
                  />
                </div>
                <span className="flex flex-col">
                  <p className="text-[#6E8BB7] text-sm">Average order</p>
                  <h2 className="text-[#A23FEE] text-[40px] font-bold">
                    {secondPercentage}%
                  </h2>
                </span>
              </div>
            </div>
            <div className="bg-white w-full h-[592px] rounded-md flex flex-col items-center justify-between">
              <div className="w-[95%] h-[15%] flex items-center justify-between">
                <h2 className="font-semibold text-lg text-[#5B6871]">
                  Ежемесячная статистика
                </h2>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-white border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-10 p-2.5"
                >
                  <option value="">Select month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[98%] h-[70%]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart width={500} height={400} data={dataBig}>
                    <defs>
                      <linearGradient
                        id="chartBackgroundGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#0E73F6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#0E73F6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="url(#chartBackgroundGradient)" // Use the gradient for the fill
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex h-[8%] items-center">
                <b className="px-10 py-[10px] border-b-4 border-transparent transition-all cursor-pointer hover:border-blue-500 hover:text-blue-600">
                  Неделья
                </b>
                <b className="px-10 py-[10px] border-b-4 border-transparent transition-all cursor-pointer hover:border-blue-500 hover:text-blue-600">
                  Месяц
                </b>
                <b className="px-10 py-[10px] border-b-4 border-transparent transition-all cursor-pointer hover:border-blue-500 hover:text-blue-600">
                  Год
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-[410px] rounded-md flex flex-col items-center">
          <div className="w-[95%] h-[13%] flex items-center">
            <h2 className="font-semibold text-lg text-[#5B6871]">
              Общий отчет
            </h2>
          </div>
          <div className="border rounded-md w-[96%] h-[84%]">
            <div className="h-[40px] border-t flex items-center justify-between">
              <p className="h-full w-[19%] flex items-center justify-center font-semibold">
                Число
              </p>
              <p className="h-full w-[19%] flex items-center justify-center font-semibold">
                Доставка
              </p>
              <p className="h-full w-[19%] flex items-center justify-center font-semibold">
                Доставка
              </p>
              <p className="h-full w-[19%] flex items-center justify-center font-semibold">
                Самовывоз
              </p>
              <p className="h-full w-[19%] flex items-center justify-center font-semibold">
                Агрегаторы
              </p>
            </div>
            {report.map((item) => {
              return (
                <div
                  key={item.number}
                  className="h-[50px] border-t flex items-center justify-between"
                >
                  <p className="h-full w-[19%] flex items-center justify-center">
                    {item.number}
                  </p>
                  <p className="h-full w-[19%] flex items-center justify-center">
                    {item.first_delivery}
                  </p>
                  <p className="h-full w-[19%] flex items-center justify-center">
                    {item.second_delivery}
                  </p>
                  <p className="h-full w-[19%] flex items-center justify-center">
                    {item.pickup}
                  </p>
                  <p className="h-full w-[19%] flex items-center justify-center">
                    {item.aggregators}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-36 h-36">

// </div>
