import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="mt-32 flex md:flex-row md:items-center md:justify-between flex-col gap-5 md:gap-0">
      <div className="flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)] p-2 pb-5 md:pb-16 rounded">
        <Image src="/smartboard/sixtyfiveinc.png" width={280} height={180} alt="65 inc LCD" />
        <h3 className="text-[25px] mt-2">Model - R65</h3>
        <p className="text-lg">Size - 65&quot;</p>
        <p className="border-b border-[#FF9D00] px-2 text-[20px]">Price</p>
        <span className="text-lg">Android: 250,000/-</span>
        <span className="text-lg">Android & Windows: 295,000/-</span>
      </div>

      <div className="flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)] p-2 pb-5 md:pb-16 rounded">
        <Image src="/smartboard/sixtyfiveinc.png" width={280} height={180} alt="65 inc LCD" />
        <h3 className="text-[25px] mt-2">Model - R75</h3>
        <p className="text-lg ">Size - 75&quot;</p>
        <p className="border-b border-[#FF9D00] px-2 text-[20px]">Price</p>
        <span className="text-lg">Android: 300,000/-</span>
        <span className="text-lg">Android & Windows: 345,000/-</span>
      </div>

      <div className="flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)] p-2 pb-5 md:pb-16 rounded">
        <Image src="/smartboard/sixtyfiveinc.png" width={280} height={180} alt="65 inc LCD" />
        <h3 className="text-[25px] mt-2">Model - R86</h3>
        <p className="text-lg">Size - 86&quot;</p>
        <p className="border-b border-[#FF9D00] px-2 text-[20px]">Price</p>
        <span className="text-lg">Android: 350,000/-</span>
        <span className="text-lg">Android & Windows: 395,000/-</span>
      </div>

      <div className="flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)] p-2 pb-5 md:pb-16 rounded">
        <Image src="/smartboard/sixtyfiveinc.png" width={280} height={180} alt="65 inc LCD" />
        <h3 className="text-[25px] mt-2">Model - R98</h3>
        <p className="text-lg">Size - 98&quot;</p>
        <p className="border-b border-[#FF9D00] px-2 text-[20px]">Price</p>
        <span className="text-lg">Android: 400,000/-</span>
        <span className="text-lg">Android & Windows: 445,000/-</span>
      </div>

      <Link
        className="fixed bottom-10  right-1 md:bottom-16 md:right-6 z-50 flex items-center md:gap-3 gap-1 bg-green-500 hover:bg-green-600 text-white px-2  py-1 md:px-6 md:py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        href="https://wa.me/+8801711652303?text=Hello"
        target="_blank"
      >
        <Image
          height={45}
          width={45}
          className="rounded-full"
          src="/whatsapp.gif"
          alt="WhatsApp"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-xs md:text-base font-bold">Click here</span>
          <span className="text-[10px] md:text-sm font-light">
            for discounts
          </span>
        </div>
      </Link>

      <Link
        className="fixed bottom-10 left-1 md:bottom-16 md:left-6 z-50 flex items-center md:gap-3 gap-1 bg-[#b7151d] hover:bg-[#850108] text-white px-2 py-1 md:px-6 md:py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        href="/RBD-smartboard-spec.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-8 h-8 md:w-11 md:h-11" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-xs md:text-base font-bold">Download</span>
          <span className="text-[10px] md:text-sm font-light">
            Spec Sheet
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Pricing;
