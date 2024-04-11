import { bannerData } from "../../assets/BannerData"; // Data is being mapped from this directory.

const Banner = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="grid grid-cols-3 gap-4 p-4">
        {bannerData.map((bannerRow, index) => (
          <div key={index} className="flex flex-col justify-center gap-2">
            {bannerRow.map((banner) => (
              <div
                key={banner.id}
                className="flex justify-center items-center border p-2 shadow-lg"
              >
                  <img
                    src={banner.image}
                    alt={`Banner ${banner.id}`}
                    className="w-40 h-40 object-contain"
                  />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
