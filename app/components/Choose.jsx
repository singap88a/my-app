import Image from 'next/image';
import Choose_1 from "../../public/Choose_1.png"
import Choose_2 from "../../public/Choose_2.png"
import Choose_3 from "../../public/Choose_3.png"

const securityData = [
  {
    id: 1,
    title: "Security",
    description: "To ensure a safe and reliable environment for your business",
    image:  Choose_1
  },
  {
    id: 2,
    title: "Scalability",
    description: "We provide scalable solutions that support your business growth and adapt to your future needs",
    image:  Choose_2
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Continuous support around the clock to ensure the continuity of your business and solve any problem as soon as it occurs",
    image:  Choose_3
  }
];

export default function Choose() {
  return (
    <div className="  py-12">
      <div className="  mx-auto md:px-20 px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
         </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityData.map((item) => (
            <div key={item.id} className="bg-[#FBBD0421] p-6 rounded-lg shadow-lg">
              <div className="relative  w-10 h-10 mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                    className=" w-10 "
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}