import Image from "next/image";
import Container from "../Container";

const models = [
  { code: "R65", size: 65 },
  { code: "R75", size: 75 },
  { code: "R86", size: 86 },
  { code: "R98", size: 98 },
];

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-[1284px] md:border-2 border-white -mt-16 md:-mt-16 shadow-2xl rounded-[15px] pb-3">
          {models.map((m) => (
            <div
              key={m.code}
              className="flex flex-col md:gap-10 mt-10 md:mt-24 items-center px-2"
            >
              <h3 className="font-bold text-lg md:text-[40px]">MODEL</h3>
              <Image
                className="hidden md:block"
                src="/smartboard/array.png"
                height={1}
                width={185}
                alt="Array"
              />
              <h4 className="font-bold text-base md:text-[40px] text-[#00AAFF]">{m.code}</h4>
              <h3 className="md:font-bold text-[10px] md:text-[20px] text-center">Diagonal display size</h3>
              <Image
                className="hidden md:block"
                src="/smartboard/array.png"
                height={1}
                width={219}
                alt="Array"
              />
              <h4 className="font-bold text-base md:text-[30px] text-[#00AAFF]">{m.size}&quot;</h4>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SmartBoartDetails;
