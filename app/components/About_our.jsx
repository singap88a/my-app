import Image from "next/image";
import About_img from "../../public/About_img.png";
const About_our = () => {
  return (
    <section className="py-16 px-6 md:px-16   flex flex-col md:flex-row items-center gap-10">
      <div className="relative md:w-1/2 flex justify-center ">
<div className="md:w-[494px] h-[485px] w-[400] p-5  md:p-0  ">
  <Image src={About_img} alt="Digital Marketing" className=" " />
</div>

 <div className="md:flex hidden">
          <div className="absolute top-10 right-[128px] w-8 h-8 bg-yellow-400"></div>
        <div className="absolute top-0 right-[90px] w-10 h-10 bg-white"></div>
        <div className="absolute top-5 right-[70px] w-5 h-5 bg-yellow-400"></div>

        {/* ///// */}
        <div className="absolute -bottom-8 left-32 w-8 h-8 bg-blue-600"></div>
        <div className="absolute bottom-16 left-32 w-8 h-8 bg-white"></div>

        <div className="absolute bottom-0 left-16 w-16 h-16 bg-yellow-400"></div>  
 </div>


        </div>

      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h3 className="text-[#FBBD04] text-[36px] font-bold">
          About our company
        </h3>
        <h2 className="text-[48px] font-semibold text-black leading-tight">
          Building a more <span className="text-[#FBBD04]">competitive</span>{" "}
          business sectors
        </h2>
        <div className="bg-[#FBBD0421] p-4   border-l-8 border-[#FBBD04]">
          <p className="text-gray-700 text-sm md:text-base">
            A creative marketing agency passionate about creating strategies
            that achieve tangible results. We believe that marketing is not just
            advertising, but rather the art of building relationships between
            brands and their audiences. Through innovative solutions and
            data-driven decisions, we help our clients stand out in the market
            and achieve sustainable growth. Let us be your partner in your
            brand's success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About_our;
