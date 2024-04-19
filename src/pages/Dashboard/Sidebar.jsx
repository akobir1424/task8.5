import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="bg-white border w-24 h-screen flex flex-col items-center justify-center">
        <div className=" w-[90%] h-[95%] flex flex-col items-center gap-8">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="url(#paint0_linear_195_1736)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.3883 29.0181C24.0668 29.0181 26.0475 27.9131 27.3306 25.7032C28.2769 24.0638 28.75 22.0628 28.75 19.7001C28.75 18.7679 28.6377 17.7875 28.4132 16.7588C28.1887 15.7302 27.7676 14.7739 27.1502 13.8899C26.3803 12.797 25.3739 12.0456 24.1309 11.6357C23.4012 11.3947 22.487 11.2661 21.3883 11.25H13.75V29.0181H21.3883Z"
                fill="white"
              />
              <mask
                id="mask0_195_1736"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="13"
                y="11"
                width="16"
                height="19"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3883 29.0181C24.0668 29.0181 26.0475 27.9131 27.3306 25.7032C28.2769 24.0638 28.75 22.0628 28.75 19.7001C28.75 18.7679 28.6377 17.7875 28.4132 16.7588C28.1887 15.7302 27.7676 14.7739 27.1502 13.8899C26.3803 12.797 25.3739 12.0456 24.1309 11.6357C23.4012 11.3947 22.487 11.2661 21.3883 11.25H13.75V29.0181H21.3883Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_195_1736)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.3465 25.932V14.3358H20.7627C22.4467 14.3358 23.5714 14.8199 24.1368 15.7883C24.7022 16.7567 24.9848 18.1449 24.9848 19.9531C24.9848 21.263 24.7964 22.3921 24.4195 23.3404C23.7298 25.0681 22.5109 25.932 20.7627 25.932H17.3465Z"
                  fill="#0E73F6"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_195_1736"
                  x1="-7.73094e-06"
                  y1="40"
                  x2="40"
                  y2="-1.72677e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0974E9" />
                  <stop offset="1" stopColor="#3593F9" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <ul className="bg-[#6e8bb727] gap-1 rounded-md w-10 h-[305px] flex flex-col ul-item overflow-hidden">
            <Link
              to="/dashboard"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-square-poll-vertical"></i>
              </li>
            </Link>
            <Link
              to="/orders"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
            </Link>{" "}
            <Link className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
              <li>
                <i className="fa-solid fa-basket-shopping"></i>
              </li>
            </Link>
            <Link className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
              <li>
                <i className="fa-solid fa-shop"></i>
              </li>
            </Link>
            <Link className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </Link>
            <Link className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
              <li>
                <i className="fa-solid fa-clock-rotate-left"></i>
              </li>
            </Link>
            <Link className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
              <li>
                <i className="fa-solid fa-gear"></i>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
