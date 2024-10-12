import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <b className="text-[28px] leading-[33px] cursor-pointer">
          <span className="text-[#9F0013]">Marvel</span> information portal
        </b>
      </Link>
      <ul className="flex">
        <Link to="characters">
          <li className="mr-[8px] font-bold text-[24px] leading-[28px] cursor-pointer hover:text-[#9F0013]">
            Characters
          </li>
        </Link>
        <li className="mr-[8px] font-bold text-[24px] leading-[28px]">/</li>
        <Link to="comics">
          <li className="font-bold text-[24px] leading-[28px] cursor-pointer hover:text-[#9F0013]">
            Comics
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
