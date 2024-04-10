import { bannerData } from "../../assets/BannerData"; // Data is being mapped from this directory. Whi

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border p-2 shadow-lg"
          >
            {Array.isArray(banner) && index === 0 && (
              <div className="">
                <div className="w-20 h-20 bg-gray-500">
                  <img src={banner.image} alt="" />{" "}
                  {/* Images must be mapped here*/}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
