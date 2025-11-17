import Image from "next/image";
import Container from "../Container";

const SmartBoartDetails = () => {
  return (
    <Container className="flex items-center flex-col">
      <div className="-mt-20 md:-mt-72 w-full">
        <Image
          className="max-w-full w-full"
          src="/smartboard/board.png"
          height={582}
          width={1284}
          alt="boardpicture"
        />

        <div className="grid  grid-cols-3 w-full md:w-[1284px] md:border-2 border-white  -mt-16 md:-mt-32 shadow-2xl rounded-[15px] pb-3 ">
          <div className="flex flex-col md:gap-10 mt-14 md:mt-28 items-center">
            <h3 className="font-bold text-xl md:text-[40px]">MODEL</h3>
            <Image className="hidden md:block" src="/smartboard/array.png" height={1} width={185} alt="Array" />
            <h4 className="font-bold text-lg md:text-[40px] text-[#00AAFF]">R65</h4>
            <h3 className="md:font-bold text-xs md:text-[20px] text-center">Diagonal display size</h3>
            <Image className="hidden md:block" src="/smartboard/array.png" height={1} width={219} alt="Array" />
            <h4 className="font-bold text-lg md:text-[30px] text-[#00AAFF]">65&quot;</h4>
          </div>



           <div className="flex flex-col md:gap-10 mt-14 md:mt-28 items-center">
          <h3 className="font-bold text-xl md:text-[40px]">MODEL</h3>
            <Image className="hidden md:block" src="/smartboard/array.png" height={1} width={185} alt="Array" />
            <h4 className="font-bold text-lg md:text-[40px] text-[#00AAFF]">R86</h4>
            <h3 className="md:font-bold text-xs md:text-[20px] text-center">Diagonal display size</h3>
            <Image className="hidden md:block" src="/smartboard/array.png" height={1} width={219} alt="Array" />
            <h4 className="font-bold text-lg md:text-[30px] text-[#00AAFF]">86&quot;</h4>
          </div>

          
           <div className="flex flex-col md:gap-10 mt-14 md:mt-28 items-center">
          <h3 className="font-bold text-xl md:text-[40px]">MODEL</h3>
            <Image className="hidden md:block" src="/smartboard/array.png" height={1} width={185} alt="Array" />
            <h4 className="font-bold text-lg md:text-[40px] text-[#00AAFF]">R75</h4>
            <h3 className="md:font-bold text-xs md:text-[20px] text-center">Diagonal display size</h3>
            <Image className="hidden md:block" src="/smartboard/array.png" height={1} width={219} alt="Array" />
            <h4 className="font-bold text-lg md:text-[30px] text-[#00AAFF]">75&quot;</h4>
          </div>
          
        </div>
      </div>
    </Container>
  );
};

export default SmartBoartDetails;
