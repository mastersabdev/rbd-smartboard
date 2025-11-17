import Image from 'next/image';

const Accessories = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center px-4 md:px-10 mt-10 md:mt-20">
      <div className="relative flex flex-col items-center">
        <Image
          className="w-full max-w-[300px] h-auto"
          src={"/smartboard/remote.png"}
          width={440}
          height={330}
          alt="Remote"
        />
        <p className="text-sm md:text-[25px] font-bold text-[#FF6A00] absolute md:bottom-[20%] -bottom-[40%] left-[10%]">
          Remote
        </p>
      </div>
      <div className="relative flex flex-col items-center">
        <Image
          className="w-full max-w-[300px] h-auto"
          src={"/smartboard/pen.png"}
          width={440}
          height={330}
          alt="Pen"
        />
        <p className="text-sm md:text-[25px] font-bold text-[#FF6A00] absolute md:bottom-[20%] -bottom-[40%] left-[10%]">
          Pen
        </p>
      </div>
      <div className="relative flex flex-col items-center">
        <Image
          className="w-full max-w-[300px] h-auto"
          src={"/smartboard/wallkit.png"}
          width={440}
          height={330}
          alt="WallKit"
        />
        <p className="text-sm md:text-[25px] font-bold text-[#FF6A00] absolute md:bottom-[20%] -bottom-[30%] left-[10%]">
          Wall Kit
        </p>
      </div>
    </div>
  );
};

export default Accessories;
