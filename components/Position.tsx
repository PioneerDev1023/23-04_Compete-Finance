import { useState } from 'react';
import Image from 'next/image';

const Main = () => {
  const [max, setMax] = useState(0);

  return (
    <div className="container m-auto pb-32">
      <div className="flex flex-wrap justify-between py-14 px-2">
        <div className="text-[32px] font-semibold cursor-pointer">Positions</div>
        <div className="flex">
          <div className="p-2 pl-3 mx-2 self-center bg-[#131325] rounded-[11px] text-[13px]">
            <div className="bg-zk bg-no-repeat bg-contain px-6 bg-left cursor-pointer font-bold">$2,936,362</div>
          </div>
          <div className="p-2 mx-2 self-center bg-[#131325] rounded-[11px] text-[13px] cursor-pointer font-bold">$2,936,362 TVL</div>
        </div>
        <div className="w-full text-xs text-[#A4A4A9]">Create and manage all your staking positions.</div>
      </div>
      <div className="px-2">
        <div className="flex justify-evenly p-7 mb-5 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className='flex md:w-1/2'>
            <Image src="/svg/percent.svg" alt="deposit logo" width={20} height={20} priority />
            <div className='pl-[10px]'>
              <p className='text-sm text-[#A4A4A9]'>Total deposits value</p>
              <p className='text-base font-bold'>$0</p>
            </div>
          </div>
          <div className='flex md:w-1/2'>
            <Image src="/svg/hand.svg" alt="APR logo" width={20} height={20} priority />
            <div className='pl-[10px]'>
              <p className='text-sm text-[#A4A4A9]'>Total average APR</p>
              <p className='text-base font-bold'>0%</p>
            </div>
          </div>
          <div className='flex md:w-1/2'>
            <Image src="/svg/logo-2.svg" alt="xVictory logo" width={20} height={20} priority />
            <div className='pl-[10px]'>
              <p className='text-sm text-[#A4A4A9]'>Pending xVictory rewards</p>
              <p className='text-base font-bold'>$0</p>
            </div>
          </div>
          <div className='flex md:w-1/2'>
            <Image src="/svg/logo-2.svg" alt="victory logo" width={20} height={20} priority />
            <div className='pl-[10px]'>
              <p className='text-sm text-[#A4A4A9]'>Pending Victory rewards</p>
              <p className='text-base font-bold'>$0</p>
            </div>
          </div>
        </div>
        <div className="h-fit p-7 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className='flex'>
            <input
              type="text"
              placeholder="Search"
              className="text-white w-full bg-[#131325] rounded-xl placeholder:text-[#A4A4A9] py-[11px] px-[25px]"
            />
            <div className='flex'>
              <div className='flex w-[110px] mx-5'>
                <Image src="/svg/plus-2.svg" alt="plus logo" width={16} height={16} priority />
                <p className='text-xs font-bold m-auto text-[#A4A4A9] pl-2'>New Position</p>
              </div>
              <button className='flex m-auto bg-[#131325] py-3 px-5'>
                <p className='font-light text-xs text-[#A4A4A9] pr-2.5'>Filters</p>
                <Image src="/svg/dropdown.svg" className='m-auto mr-1.5' alt="filter logo" width={9} height={6} priority />
              </button>
              <button className='flex m-auto bg-[#131325] py-3 px-4 ml-2.5'>
                <p className='font-light text-xs text-[#A4A4A9] pr-2.5 w-16'>Sort by</p>
                <Image src="/svg/dropdown.svg" className='m-auto' alt="filter logo" width={9} height={6} priority />
              </button>
            </div>
          </div>
          <div className='my-5'>
            <table className="table-auto w-full">
              <thead className="border-b-2 border-[#131325]">
                <tr>
                  <th className="py-2 font-light text-[10px] text-[#A4A4A9]">Token</th>
                  <th className="py-2 font-light text-[10px] text-[#A4A4A9]">Amount</th>
                  <th className="py-2 font-light text-[10px] text-[#A4A4A9]">Settings</th>
                  <th className="py-2 font-light text-[10px] text-[#A4A4A9]">APR</th>
                  <th className="py-2 font-light text-[10px] text-[#A4A4A9]">Pending Rewards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                </tr>
                <tr>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
