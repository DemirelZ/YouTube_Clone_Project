import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillVideoCamera, AiFillBell } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;

    navigate(`/results?search_query=${query}`);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="w-[50px]" src="/Youtube_logo.png" alt="" />
        <h1 className="text-2xl hidden md:block">YouTube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border bg-gray-800 rounded-[20px]  overflow-hidden "
      >
        <input
          type="search"
          className="bg-black rounded-[20px  0  0 20px] py-1 px-3 outline-none w-[500px] "
        />
        <button className="border-l px-2 h-full">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <AiFillBell />
        <AiFillVideoCamera />
      </div>
    </header>
  );
};

export default Header;
