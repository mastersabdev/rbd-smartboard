import Image from "next/image";
import Container from "../Container";

const OperatingSystem = () => {
  return (
    <Container>
      <div className="relative flex flex-col ">
        <div className="mt-10 md:mt-28 w-full md:flex">
          <Image
            src="/smartboard/screen.png"
            height={450}
            width={724}
            alt="ScreenPicture"
            className="w-full max-w-[450px] md:max-w-[724px] h-auto"
          />
        </div>

        <div className="w-full md:absolute md:top-[55%] md:right-20 rounded-[15px] flex flex-col items-center py-6 border-2 border-white backdrop-blur-lg bg-white/40 shadow-lg max-w-[665px] mt-6 md:mt-0">
          <h2 className="text-2xl md:text-[40px] font-semibold mb-6">
            Dual Operating System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center w-full px-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Image src="/smartboard/windows.png" width={53} height={53} alt="Windows Icon" />
              <h4 className="text-lg md:text-[30px] font-medium mt-4">
                Windows
              </h4>
               <p className="text-sm md:text-xl">Windows Version : <span className="text-gray-700">Windows 11 Pro</span></p>
              <p className="text-sm md:text-xl">CPU : <span className="text-gray-600">Core i5 12th Gen</span></p>
              <p className="text-sm md:text-xl">RAM : <span className="text-gray-600">32GB</span></p>
              <p className="text-sm md:text-xl">ROM : <span className="text-gray-600">1 TB</span></p>
              <p className="text-sm md:text-xl">Wifi : <span className="text-gray-600">Wi-Fi 6.0, Version 802.11b/g/n, 2.4GHz/5G, 0~12m Working Distance</span></p>
              <p className="text-sm md:text-xl">Compliant :<span className="text-gray-600">Windows, Mac, Linux, Chrome</span></p>
              <p className="text-sm md:text-xl">Warranty :<span className="text-gray-600">03 Years</span></p>
            </div>

            <div className="hidden md:block">
              <Image src="/smartboard/vector.png" width={16} height={221} alt="Vector" />
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <Image src="/smartboard/android_os.png" width={66} height={66} alt="Android Icon" />
              <h4 className="text-lg md:text-[30px] font-medium mt-4">
                Android
              </h4>
              <p className="text-sm md:text-xl">Android Version : <span className="text-gray-700">14</span></p>
              <p className="text-sm md:text-xl">Chipset : <span className="text-gray-700">G6760V100</span></p>
              <p className="text-sm md:text-xl">CPU : <span className="text-gray-700">8 ARM Cortex-A55</span></p>
              <p className="text-sm md:text-xl">GPU : <span className="text-gray-700">RM Mali-G52</span></p>
              <p className="text-sm md:text-xl">RAM : <span className="text-gray-700">DDR4 8GB</span></p>
              <p className="text-sm md:text-xl">ROM : <span className="text-gray-700">128GB</span></p>
              <p className="text-sm md:text-xl">PORT : <span className="text-gray-700">USB 3.0 x3, Type C x1, Touch USB x1, HDMI IN x1</span></p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OperatingSystem;
