import { useState } from 'react';

const Main = () => {
  const [max, setMax] = useState(0);

  return (
    <div className="container m-auto pb-32">
      <div className="flex flex-wrap justify-between pt-28 pb-14 px-2">
        <div className="text-[32px] font-bold cursor-pointer">Exchange</div>
        <div className="flex">
          <div className="p-2 pl-3 ml-0 sm:mx-2 self-center bg-[#131325] rounded-[11px] text-[13px]">
            <div className="bg-zk bg-no-repeat bg-contain px-6 bg-left cursor-pointer font-bold">$2,936,362</div>
          </div>
          <div className="p-2 ml-2 self-center bg-[#131325] rounded-[11px] text-[13px] cursor-pointer font-bold">$2,936,362 TVL</div>
        </div>
      </div>
      <div className="w-[90%] md:w-[600px] sm:w-[500px] m-auto p-7 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
        <div className="flex p-2 text-xl justify-between flex-wrap text-[#A4A4A9]">
          <div>Swap</div>
          <div className="flex">
            <div onClick={(e) => setMax(0)} className="bg-swapUp bg-right bg-no-repeat p-3 cursor-pointer"></div>
            <div className="bg-swapConf pl-6 bg-right bg-no-repeat p-3 cursor-pointer"></div>
          </div>
        </div>
        <div className="wrapper_input_crypto ">
          <div className="input_one">
            <div className="flex">
              <div className="swap_logo_crypto_one"></div>
              <div className="w-20 mx-2">
                <div className="text-[10px] text-[#A4A4A9]">from</div>
                <div className="change_crypto font-semibold">ETH</div>
              </div>
            </div>
            <input
              type="number"
              placeholder="0"
              value={max}
              onChange={(e: any) => setMax(e.target.value)}
              className="text-white w-full mx-3 bg-[#131325] rounded-xl placeholder:text-[#A4A4A9] py-[11px] px-[25px]"
            />
            <div className="flex justify-between relative ">
              <button
                onClick={(e) => setMax(12)}
                className="absolute -left-16 bottom-3 text-[#A4A4A9]"
              >
                {' '}
                | Max
              </button>
            </div>
          </div>
          <div className="flex justify-end text-[#A4A4A9] pr-6 text-[12px]">
            Balance: 12ETH
          </div>
          <div className="bg-change bg-no-repeat mt-3 ml-4 p-4"></div>
          <div className="input_one">
            <div className="flex">
              <div className="swap_logo_crypto_two"></div>
              <div className="w-20 mx-2">
                <div className="text-[10px] text-[#A4A4A9]">to</div>
                <div className="change_crypto font-semibold">USDT</div>
              </div>
            </div>
            <input
              type="number"
              placeholder="0"
              className="text-white w-full mx-3 bg-[#131325] rounded-xl placeholder:text-[#A4A4A9] py-[11px] px-[25px]"
            />
          </div>
          <div className="flex justify-end text-[#A4A4A9] pr-6 text-[12px]">
            Balance: 2334 USDT
          </div>
        </div>
        <button className="bg-[#DAA70C] rounded-xl w-full flex flex-wrap mt-7 p-[0.7rem] justify-center font-semibold">Connected</button>
      </div>
    </div>
  );
};

export default Main;
