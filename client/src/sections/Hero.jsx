import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="xl:w-[90%] w-full  flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative  xl:w-2/5 flex flex-col 
      justify-centern items-start w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          our summer collections
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]
        font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span
            className="text-coral-red 
        inline-block mt-3"
          >
            Nike
          </span>{" "}
          shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        {/* statistics---------------------------------- */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            //key= because label is Uniqe in this case
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex flex-1 justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        {/* ------------ کفش بزرگ ------------ */}
        <img
          className="object-contain relative z-10"
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
        />
        {/* عکس های کوچک پایین کفش بزرگ */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
