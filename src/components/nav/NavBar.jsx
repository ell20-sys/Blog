import { useState } from "react";
import navData from "../../data/nav";

const NavBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
  
    const handleDropdownClick = (id) => {
      setActiveDropdown(activeDropdown === id ? null : id);
    };
  
    return (
      <div className="flex justify-evenly border-b items-center">
        <div className="w-[170px] mt-1 flex justify-center mb-2">
          <img
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
            alt="nav-logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex justify-center mb-2">
          {navData.map((nav) => (
            <div key={nav.id}>
              <ul>
                <li
                  className="flex gap-1 items-center p-4 cursor-pointer"
                  onClick={() => handleDropdownClick(nav.id)}
                >
                  <span>{nav.name}</span>
                  {nav.icon && <nav.icon />}
                </li>
                {activeDropdown === nav.id && (
                  <div
                    className="bg-white absolute py-5 flex justify-center align-center px-4 rounded-lg"
                    style={{ boxShadow: "0px 0px 20px 0.5px rgba(0, 0, 0, 0.3)" }}
                  >
                    {nav.dropdown.map((group, index) => (
                      <div key={index} className="py-3">
                        {Array.isArray(group) && index === 0 && (
                          <div className="grid grid-cols-2">
                            {group.map((item) => (
                              <div
                                key={item.id}
                                className="flex mt-2 cursor-pointer"
                                style={{ lineHeight: 1 }}
                              >
                                <img src={item.image} className="w-8 h-8 " />
                                <li className="flex flex-col pl-2 text-[15px]">
                                  <span className="text-gray-500 font-bold hover:text-green-600 hover:text-opacity-70">{item.title}</span>
                                  <span className="text-[12px] text-gray-400 pt-1 ">
                                    {item.description}
                                  </span>
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {Array.isArray(group) && index === 1 && (
                          <div>
                            {/* Rendering second part of dropdown[0] differently */}
                            {group.map((item) => (
                              <div
                                key={item.id}
                                className="flex mt-2 cursor-pointer"
                                style={{ lineHeight: 1 }}
                              >
                                <img src={item.image} className="w-8 h-8 " />
                                <li className="flex flex-col pl-2 font-bold text-[15px]">
                                  <span className="text-gray-500 hover:text-green-600 hover:text-opacity-70">{item.title}</span>
                                  <span className="text-[12px] text-gray-400 font-normal">
                                    {item.description}
                                  </span>
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NavBar;
  