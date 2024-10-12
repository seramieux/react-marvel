import thor from "../assets/img/thor.jpg";
import mjolnir from "../assets/img/mjolnir.png";

function Randomchar() {
  return (
    <div className="grid grid-cols-2 shadow-[5px_5px_20px_0_rgba(0,0,0,0.25)] mt-[50px]">
      <div className="flex items-center py-[35px] px-[40px]">
        <img className="mr-[30px]" src={thor} alt="thor" />
        <div>
          <b className="text-[22px] leading-[26px]">THOR</b>
          <p className="text-[14px] leading-[17px] mt-[10px]">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <button className="bg-[#9F0013] text-[#FFF] mt-[13px] mr-[30px] py-[11px] px-[18px] hover:translate-y-[-3px]">
            HOMEPAGE
          </button>
          <button className="bg-[#5C5C5C] text-[#FFF] mt-[13px] py-[11px] px-[37px] hover:translate-y-[-3px]">
            WIKI
          </button>
        </div>
      </div>
      <div className="relative flex flex-col bg-[#232222] text-[#FFF] py-[35px] px-[40px]">
        <b className="text-[24px] leading-[28px]">
          Random character for today! <br />
          Do you want to get to know him better?
        </b>
        <b className="text-[24px] leading-[28px] mt-[33px]">
          Or choose another one
        </b>
        <button className="bg-[#9F0013] w-[101px] mt-[18px] mr-[30px] py-[11px] px-[18px] hover:translate-y-[-5px]">
          TRY IT
        </button>
        <img
          className="absolute bottom-[15px] right-[-45px]"
          src={mjolnir}
          alt="molot"
        />
      </div>
    </div>
  );
}

export default Randomchar;
