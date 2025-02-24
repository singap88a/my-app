import Image from "next/image";
import Service_1 from "../../public/Service-1.png";
import Service_2 from "../../public/Service-2.png";
import Service_3 from "../../public/Service-3.png";

const services = [
  {
    id: 1,
    title: "Advertising agency",
    description:
      "An advertising agency that provides creative solutions to enhance your brand and attract your target audience",
    image: Service_1,
  },
  {
    id: 2,
    title: "Programming services",
    description:
      "Specialized software services to develop technical solutions that meet your needs efficiently and innovatively",
    image: Service_2,
  },
  {
    id: 3,
    title: "Marketing consulting",
    description:
      "Marketing consultations to enhance your strategies and attract your customers effectively",
    image: Service_3,
  },
];

const Service = () => {
  return (
    <section className="pt-16 px-5 md:px-20 bg-gradient-to-b from-white to-[#FBBD0426] text-center">
       <h2 className="text-[36px] md:text-4xl font-bold">
        <span className="text-[#FBBD04]">Service</span>{" "}
        <span className="text-black">Our Company</span>
      </h2>
      <p className="text-gray-700 text-[36px] mt-4">
        We are committed to providing integrated services based <br /> on the
        latest technologies
      </p>

       <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-[#FBBD0421] rounded-full p-8 w-[318px] h-[318px] flex flex-col items-center justify-center       relative ${
              index === 1 ? " md:mb-80 mb-0" : ""
            }`}
          >
            <div className="absolute inset-3 border-[3px] border-[#FBBD04] rounded-full"></div>
            <Image src={service.image} alt={service.title} className="w-12" />
            <h3 className="text-lg font-bold mt-4">{service.title}</h3>
            <p className="text-gray-700 text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
