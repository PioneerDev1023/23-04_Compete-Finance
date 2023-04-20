import { useState } from 'react';

const Main = () => {
  const [max, setMax] = useState(0);

  return (
    <div className="container m-auto pb-32">
      <div className="flex flex-wrap justify-between py-14 px-2">
        <div className="text-[32px] font-semibold cursor-pointer">Liquidity</div>
        <div className="flex">
          <div className="p-2 pl-3 mx-2 self-center bg-[#131325] rounded-[11px] text-[13px]">
            <div className="bg-zk bg-no-repeat bg-contain px-6 bg-left cursor-pointer">$2,936,362</div>
          </div>
          <div className="p-2 mx-2 self-center bg-[#131325] rounded-[11px] text-[13px] cursor-pointer">$2,936,362 TVL</div>
        </div>
        <div className="w-full text-xs text-[#A4A4A9]">Become a Liquidity Provider and earn your share of trading fees.</div>
      </div>
      <div className="gap-4 flex justify-between px-2 flex-col md:flex-row">
        <div className="p-5 w-full lg:w-5/12 md:w-1/2 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className="flex p-2 text-xl justify-between flex-wrap text-[#A4A4A9]">
            <div>Add liquidity</div>
            <div className="flex">
              <div onClick={(e) => setMax(0)} className="bg-swapUp cursor-pointer bg-right bg-no-repeat p-3"></div>
              <div className="bg-swapConf pl-6 bg-right cursor-pointer bg-no-repeat p-3"></div>
            </div>
          </div>
          <div className='flex justify-between gap-4 '>
            <button className="btn_connected font-semibold">Position</button>
            <button className="btn_disconnected font-semibold">LP Only</button>
          </div>
          <div className="wrapper_input_crypto">
            <div className="flex justify-between p-1 pt-8">
              <div className="flex">
                <div className="bg-eth pl-5 bg-right bg-no-repeat p-5"></div>
                <div className="w-20 mx-2">
                  <div className="text-[10px] text-[#A4A4A9]">Token1</div>
                  <div className="text-[16px] cursor-pointer text-[#E6E6E8] bg-arrow-d bg-no-repeat bg-right pr-4 font-semibold">ETH</div>
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
            <div className="bg-plus bg-no-repeat mt-1 ml-4 p-4"></div>
            <div className="flex justify-between p-1 pt-2">
              <div className="flex">
                <div className="swap_logo_crypto_two"></div>
                <div className="w-20 mx-2">
                  <div className="text-[10px] text-[#A4A4A9]">Token2</div>
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
          <button className="btn_disconnected font-semibold">Not Connected</button>
        </div>
        <div className="h-fit w-full lg:w-7/12 md:w-1/2 p-5 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className="flex p-2 pb-5 text-xl justify-between flex-wrap text-[#A4A4A9] border-b-2 border-[#131325]">
            <div className='font-medium'>Your Position</div>
            <div className="flex">
              {/* <div onClick={(e) => setMax(0)} className="bg-arrow bg-no-repeat p-3"></div> */}
              <div className="text-sm m-auto cursor-pointer">Open Position Dashboard</div>
            </div>
          </div>
          <div className="font-medium text-lg text-[#A4A4A9] px-2 py-5">Your LP Tokens</div>
          <button className="btn_connected font-semibold mb-5">Connected</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
