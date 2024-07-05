import Image from "next/image";
import Star from "../../public/icon-star.svg";

import Buyer1 from "../../public/image-colton.jpg";
import Buyer2 from "../../public/image-irene.jpg";
import Buyer3 from "../../public/image-anne.jpg";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto w-full h-screen py-12 px-10 flex flex-col items-center justify-center">
      <div className="md:grid grid-cols-2  justify-between items-center gap-x-60 mb-10">
        {/* left side  */}
        <div className="mb-10 md:mb-0">
          <h1 className="text-fushcia-950 text-4xl font-bold mb-4 text-center md:text-left">
            10,000+ of our <br /> users love our <br /> products
          </h1>

          <p className="text-fuchsia-800 w-[90%] text-center md:text-left">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        {/* right side */}
        <div className="flex flex-col gap-y-5 items-center">
          <div className="w-[400px] px-4 py-2 bg-gray-100 rounded-md md:flex items-center gap-x-5">
            <div className="flex items-center gap-x-2 justify-center md:justify-start">
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
            </div>

            <p className="text-base font-bold text-fuchsia-950 text-center md:text-left">
              Rated 5 Star in Reviews
            </p>
          </div>

          <div className="w-[400px]  md:ml-5 px-4 py-2 bg-gray-100 rounded-md  md:flex items-center gap-x-5">
            <div className="flex items-center gap-x-2 justify-center md:justify-start">
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
            </div>

            <p className="text-base font-bold text-fuchsia-950 text-center md:text-left">
              Rated 5 Star in Report Guru
            </p>
          </div>

          <div className="w-[400px] md:ml-10 px-4 py-2 bg-gray-100 rounded-md  md:flex items-center gap-x-5">
            <div className="flex items-center gap-x-2 justify-center md:justify-start">
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
              <Image src={Star} alt="Star iamge" />
            </div>

            <p className="text-base font-bold text-fuchsia-950 text-center md:text-left">
              Rated 5 Star in BestTech
            </p>
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className="md:grid grid-cols-3 gap-x-5 ">
        {/* first card */}
        <div className="p-4 bg-fuchsia-950 rounded-md h-fit mb-10 md:mb-0">
          <div className="flex items-center gap-x-5 mb-4">
            <div>
              <Image
                src={Buyer1}
                alt="Buyer's Image"
                className="rounded-full w-[50px] h-[50px]"
              />
            </div>

            <div>
              <p className="text-white font-semibold">Colton Smith</p>
              <p className="text-fuchsia-700 font-medium">Verified Buyer</p>
            </div>
          </div>

          <div>
            <p className="text-base text-white font-normal">
              " We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent! "
            </p>
          </div>
        </div>

        {/* second card */}
        <div className="p-4 bg-fuchsia-950 rounded-md md:mt-5 h-fit mb-10 md:mb-0">
          <div className="flex items-center gap-x-5 mb-4">
            <div>
              <Image
                src={Buyer2}
                alt="Buyer's Image"
                className="rounded-full w-[50px] h-[50px]"
              />
            </div>

            <div>
              <p className="text-white font-semibold">Colton Smith</p>
              <p className="text-fuchsia-700 font-medium">Verified Buyer</p>
            </div>
          </div>

          <div>
            <p className="text-base text-white font-normal">
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery."
            </p>
          </div>
        </div>

        {/* third card */}
        <div className="p-4 bg-fuchsia-950 rounded-md md:mt-10 h-fit">
          <div className="flex items-center gap-x-5 mb-4">
            <div>
              <Image
                src={Buyer3}
                alt="Buyer's Image"
                className="rounded-full w-[50px] h-[50px]"
              />
            </div>

            <div>
              <p className="text-white font-semibold">Colton Smith</p>
              <p className="text-fuchsia-700 font-medium">Verified Buyer</p>
            </div>
          </div>

          <div>
            <p className="text-base text-white font-normal">
              "Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone! "
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
