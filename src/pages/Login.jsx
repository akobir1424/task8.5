import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signIn } from "../components/loginReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

export default function Login() {
  const selector = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLog = (e) => {
    e.preventDefault();

    if (name.trim() !== "" && password.trim().length >= 8) {
      dispatch(signIn({ title: name, password: password }));
      navigate("/dashboard");
    } else {
      toast.error("Password must be at least 8 characters", 4);
    }
  };

  console.log(selector);
  return (
    <>
      <ToastContainer />
      <div className="h-screen max-w-[1920px] bg-gradient-radial mx-auto my-0 flex items-center justify-center">
        <div className="flex w-full h-full shadow-2xl">
          <div className="w-[50%] h-full bg-radial flex flex-col items-center justify-center relative">
            <h1 className="absolute text-white font-semibold text-5xl top-[5%] left-[5%]">
              Delever
            </h1>
          </div>
          <div className="w-[50%] h-full bg-white flex flex-col items-center justify-center gap-5">
            <h2 className="w-5/6 text-4xl text-[#001A49] font-bold">
              Вход в платформу
            </h2>
            <form
              onSubmit={handleLog}
              className="flex flex-col w-5/6 h-[55%] p-2 relative justify-between"
            >
              <label className="text-base font-bold text-black">
                Имя пользователья*
              </label>
              <span className="absolute top-[19.5%] left-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11ZM5 20C5 19.0807 5.18106 18.1705 5.53284 17.3212C5.88463 16.4719 6.40024 15.7003 7.05025 15.0503C7.70026 14.4002 8.47194 13.8846 9.32122 13.5328C10.1705 13.1811 11.0807 13 12 13C12.9193 13 13.8295 13.1811 14.6788 13.5328C15.5281 13.8846 16.2997 14.4002 16.9497 15.0503C17.5998 15.7003 18.1154 16.4719 18.4672 17.3212C18.8189 18.1705 19 19.0807 19 20H5Z"
                    fill="#6E8BB7"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Введите имя"
                className="border-2 rounded-md w-full h-12 pl-7 font-semibold outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="text-base font-bold text-black">
                Имя пользователья*
              </label>
              <span className="absolute top-[54.5%] left-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_4355_7495)">
                    <path
                      d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                      fill="white"
                    />
                    <path
                      d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                      fill="#6E8BB7"
                      fillOpacity="0.7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4355_7495">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Введите имя"
                className="border-2 rounded-md w-full h-12 pl-7 font-semibold outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex">
                <input type="checkbox" name="" id="" />
                <p>Запомнить меня</p>
              </span>
              <button className="bg-blue-500 rounded-lg text-white h-12">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
