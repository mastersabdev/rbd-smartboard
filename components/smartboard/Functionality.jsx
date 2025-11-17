import Image from "next/image";
import React from "react";

const functionalities = [
  { image: "/smartboard/writing.png", label: "Writing" },
  { image: "/smartboard/ultra_sensitive.png", label: "Ultra Sensitive" },
  { image: "/smartboard/multi_touch.png", label: "Multi-Touch" },
  { image: "/smartboard/screen_mirroring.png", label: "Screen Mirroring" },
  { image: "/smartboard/video_call.png", label: "Video Call" },
  { image: "/smartboard/4k_ultra_hd.png", label: "4K Ultra HD" },
];

const Functionality = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 mt-16">
      {functionalities.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 items-center justify-center text-center"
        >
          <Image src={item.image} width={50} height={50} alt={item.label} />
          <p className="text-lg md:text-2xl font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Functionality;
 
