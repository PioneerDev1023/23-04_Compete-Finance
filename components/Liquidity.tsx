import { useState } from 'react';

const Main = () => {
  const [max, setMax] = useState(0);

  return (
    <div className="container m-auto pb-32">
      <div className="top_menu">
        <div className="text-[32px] font-semibold cursor-pointer">Liquidity</div>
        <div className="flex">
          <div className="twl_one">
            <div className="twl_one_count cursor-pointer">$2,936,362</div>
          </div>
          <div className="twl_two cursor-pointer">$2,936,362 TVL</div>
        </div>
        <div className="w-full text-xs text-[#A4A4A9]">Become a Liquidity Provider and earn your share of trading fees.</div>
      </div>
      <div className="gap-4 flex justify-between">
        <div className="liquidity_modal sm:w-full lg:w-5/12 md:w-1/2">
          <div className="wrapper_swap">
            <div>Add liquidity</div>
            <div className="swap_menu">
              <div onClick={(e) => setMax(0)} className="swap_update"></div>
              <div className="swap_config"></div>
            </div>
          </div>
          <div className='flex justify-between gap-4 '>
            <button className="btn_connected font-semibold">Position</button>
            <button className="btn_disconnected font-semibold">LP Only</button>
          </div>
          <div className="wrapper_input_crypto">
            <div className="flex justify-between p-1 pt-8">
              <div className="flex">
                <div className="swap_logo_crypto_one"></div>
                <div className="w-20 mx-2">
                  <div className="text-[10px] text-[#A4A4A9]">Token1</div>
                  <div className="change_crypto font-semibold">ETH</div>
                </div>
              </div>
              <input
                type="number"
                placeholder="0"
                value={max}
                onChange={(e: any) => setMax(e.target.value)}
                className="crypto_input_one"
              />
              <div className="flex justify-between relative ">
                <button
                  onClick={(e) => setMax(12)}
                  className="absolute -left-16 bottom-2 text-[#A4A4A9]"
                >
                  {' '}
                  | Max
                </button>
              </div>
            </div>
            <div className="flex justify-end text-[#A4A4A9] pr-6 text-[12px]">
              Balance: 12ETH
            </div>
            <div className="plus-symbol"></div>
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
                className="crypto_input_two"
              />
            </div>
            <div className="flex justify-end text-[#A4A4A9] pr-6 text-[12px]">
              Balance: 2334 USDT
            </div>
          </div>
          <button className="btn_disconnected font-semibold">Not Connected</button>
        </div>
        <div className="liquidity_modal h-fit sm:w-full lg:w-7/12 md:w-1/2">
          <div className="flex p-2 pb-5 cursor-pointer text-xl justify-between flex-wrap text-[#A4A4A9] border-b-2 border-[#131325]">
            <div className='font-medium'>Your Position</div>
            <div className="flex">
              {/* <div onClick={(e) => setMax(0)} className="bg-arrow bg-no-repeat p-3"></div> */}
              <div className="text-sm m-auto">Open Position Dashboard</div>
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
