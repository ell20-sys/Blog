const Hero = () => {
  return (
    <div>
      <div
        className="flex  justify-evenly bg-gradient-to-t  to-white from-gray-400"
        style={{ height: "81vh" }}
      >
        <div className="flex flex-col justify-center w-[50%] p-5  h-full ">
          <span className="font-bold pb-5 text-5xl text-wrap">
            Next Gen Enterprise Ecommerce Platform
          </span>
          <span
            className="font-semibold pb-5 text-2xl text-wrap"
            style={{ fontWeight: 700 }}
          >
            Build whitelabelled{" "}
          </span>
          <span className="text-bold pb-5 text-xl" style={{ fontWeight: 600 }}>
            Designed for diverse B2B and B2C business models
          </span>
          <button className="uppercase  font-semibold bg-green-600 w-[30%] rounded-full p-2 text-white hover:text-green-700 hover:bg-white hover:border-gray-300 border-2 border-transparent">
            Schedule a Demo
          </button>
        </div>
        <div className="">
          <img
            className="h-full "
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
