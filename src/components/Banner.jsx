import avangers from "../assets/img/avengers.png";
import logo from "../assets/img/logo.png";

function Banner() {
  return (
    <div className="flex justify-between items-center bg-[#232222] mt-[50px] pr-[45px] pl-[25px]">
      <div className="flex items-center">
        <img
          width={152}
          height={100}
          className="mr-[83px]"
          src={avangers}
          alt="avangers"
        />
        <b className="text-[#FFF] text-[24px] leading-[28px]">
          New comics every week! <br />
          Stay tuned!
        </b>
      </div>
      <img width={133} height={100} src={logo} alt="logo" />
    </div>
  );
}

export default Banner;
