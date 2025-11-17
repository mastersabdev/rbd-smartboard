import Image from "next/image";
import Container from "../Container";

const Connectivity = () => {
  return (
    <Container className=" pt-5 md:pt-60">
      <div className="relative">
        <div className="mt-20 w-full ">
          <Image src="/smartboard/screen2.png" height={882} width={882} alt="ScreenPicture" />
        </div>

        <div className=" md:absolute mt-5 md:mt-0 md:top-[55%] md:right-10 rounded-[15px] flex flex-col items-center  py-2 md:py-5 border-2 border-white backdrop-blur-sm bg-white/30  md:max-w-[665px] w-full">
          <h2 className="text-xl font-bold md:font-normal md:text-[40px]">Connectivity</h2>

          <div className="flex justify-between gap-20 px-10   w-full mt-10 ">
            <div className="flex-1 flex gap-6 flex-col">
              <div className="md:flex md:items-center  gap-3">
                <Image src="/smartboard/hdmi.png" height={46} width={58} alt="HDDMI" />
                <p className="text-sm md:text-xl">HFFMI-2</p>
              </div>
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/torch_usb.png" height={46} width={58} alt="HDDMI" />
                <p className="text-sm md:text-xl">Touch USB</p>
              </div>
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/usb_c.png" height={46} width={58} alt="HDDMI" />
                <p className="text-sm md:text-xl">USB-C</p>
              </div>
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/inout.png" height={46} width={58} alt="HDDMI" />
                 <p className="text-sm md:text-xl">RJ45-IN&OUT</p>
              </div>
            </div>

            <div className="flex-1 flex gap-6 flex-col">
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/usb-5.png" height={46} width={58} alt="HDDMI" />
                 <p className="text-sm md:text-xl">USB-5</p>
              </div>
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/tf_port.png" height={46} width={58} alt="HDDMI" />
                 <p className="text-sm md:text-xl">TF-Port</p>
              </div>
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/spdif.png" height={46} width={58} alt="HDDMI" />
                 <p className="text-sm md:text-xl">SPDIF</p>
              </div>
              <div className="md:flex md:items-center gap-3">
                <Image src="/smartboard/earphone.png" height={46} width={58} alt="HDDMI" />
                 <p className="text-sm md:text-xl">Earphone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Connectivity;
