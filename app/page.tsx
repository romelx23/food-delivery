import Image from "next/image";
import logo from "../public/logo.jpg";
import { BussinessInfo } from "@/features/home/components/bussiness-info";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-8 xl:pt-16 pb-8 bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:text-4xl">
          {/* Delicious Meals Delivered to Your Doorstep! */}
          Deliciosos platos entregados a su puerta!
        </h1>
        {/* <p className="text-lg text-gray-600 mb-8">Enjoy fresh ingredients and fast delivery at any time.</p>
        <button className="px-8 py-3 bg-red-500 text-white rounded-lg text-xl">Order Now</button> */}
        <Image src={logo} width={800} height={500} alt="Hero Image"
          className="rounded-full shadow-lg md:w-72 w-1/2"
        />
        <h2 className="text-2xl font-bold pt-8">FoodDelivery</h2>
      </section>

      {/* info business */}
      <BussinessInfo />

    </div>
  );
}
