import { navOptions } from '../constants/data';
import { IconType } from 'react-icons';

const NavBar = () => {
  return (
    <div className="flex flex-col h-24 text-[.7rem] font-light text-zinc-800">
      <div className="flex-[0.5] flex justify-center items-center gap-1 sm:gap-[1.9rem] px-1 xl:gap-[3.2rem]">
          {navOptions.map((option, index) => (
            <div key={index}>
              {option.icon ? 
                <option.icon size={option.size ? option.size : 18} className="cursor-pointer" /> 
                : 
                <span className="cursor-pointer">{option.name}</span>
              }
            </div>
          ))}
        </div>
      <div className="flex-[0.5] flex items-center px-5 justify-between lg:justify-around">
            <div className="">
              <span className="text-xl font-medium cursor-pointer">iPhone 14</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="hover:text-blue-500 cursor-pointer">Overview</span>
              <span className="hover:text-blue-500 cursor-pointer">Switch from Android to iPhone</span>
              <span className="hover:text-blue-500 cursor-pointer">Tech Specs</span>
              <button className="bg-blue-600 px-3 py-1 rounded-full text-zinc-200 ">Buy</button>
            </div>
      </div>
    </div>
  );
};

export default NavBar;