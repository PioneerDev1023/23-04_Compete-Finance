import Image from 'next/image';

const Main = () => {

  return (
    <div className="container m-auto pb-32">
      <div className="flex flex-wrap justify-between py-14 px-2">
        <div className="text-[32px] font-bold cursor-pointer">Yield farming</div>
        <div className="flex flex-wrap">
          <div className="p-2 pl-3 ml-0 sm:mx-2 self-center bg-[#131325] rounded-[11px] text-[13px]">
            <div className="bg-zk bg-no-repeat bg-contain px-6 bg-left cursor-pointer font-bold">$2,936,362</div>
          </div>
          <div className="p-2 mx-2 self-center bg-[#131325] rounded-[11px] text-[13px] cursor-pointer font-bold">$2,936,362 TVL</div>
        </div>
        <div className="w-full text-xs text-[#A4A4A9]">Create staking positions for incentivized liquidity and earn Victory.</div>
      </div>
      <div className="px-2 pb-5">
        <p className='font-medium text-[8px] text-[#A4A4A9] pl-5 pb-1'>&lt;- Back to Farm list</p>
        <div className="h-fit p-7 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className='flex justify-between flex-col sm:flex-row'>
            <div className='flex flex-wrap'>
              <div className='flex pr-2.5'>
                <Image
                  src="/svg/eth.svg"
                  alt="eth logo"
                  width={37.7}
                  height={37.7}
                  priority
                />
                <Image
                  src="/svg/tether.svg"
                  alt="eth logo"
                  width={37.7}
                  height={37.7}
                  priority
                />
              </div>
              <div className='flex flex-col'>
                <div className='flex'>
                  <p className='font-bold text-base pr-2'>ETH-USDT</p>
                  <Image
                    src="/svg/plus-2.svg"
                    alt="plus symbol"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <p className='text-xs text-[#A4A4A9] font-normal'>0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82</p>
              </div>
            </div>
            <div className="pt-5 sm:pt-0">
              <button className='font-bold text-xs text-[#DAA70C] py-2 px-5 border border-[#DAA70C] rounded-lg'>APY</button>
            </div>
          </div>
          <div className='my-5'>
            <table className="table-auto w-full">
              <thead className="border-b-2 border-[#131325]">
                {/* <tr>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">Name</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">TVL</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">APR range</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">Total deposit</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">Pending rewards</th>
                </tr> */}
              </thead>
              <tbody>
                <tr className='border-[#131325] border-t-2 border-dashed grid grid-cols-12'>
                  <td className="py-2 col-span-12 lg:col-span-3">
                    <p className='font-bold text-xl'>Pool</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-2">
                    <p className='font-normal text-sm text-[#A4A4A9]'>Total value locked</p>
                    <p className='font-bold text-base'>$6.9M</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-2">
                    <p className='font-normal text-sm text-[#A4A4A9]'>Daily emissions</p>
                    <p className='font-bold text-base'>3,03 Victory</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-3">
                    <p className='font-normal text-sm text-[#A4A4A9]'>APR range</p>
                    <div className='flex font-bold text-base'>
                      36.33% &gt; <span className='text-[#DAA70C] pl-1'>54.51%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={14}
                        height={14}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-2">
                    <p className='font-normal text-sm text-[#A4A4A9]'>xVictory/Victory ratio</p>
                    <p className='font-bold text-base'>84%/42%</p>
                  </td>
                </tr>
                <tr className='border-[#131325] border-t-2 border-dashed grid grid-cols-12'>
                  <td className="py-2 col-span-12 lg:col-span-3">
                    <p className='font-bold text-xl'>Settings</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-2">
                    <p className='font-normal text-sm text-[#A4A4A9]'>Max total multiplier</p>
                    <p className='font-bold text-base'>4x</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-2">
                    <p className='font-normal text-sm text-[#A4A4A9]'>Max lock duration</p>
                    <p className='font-bold text-base'>120 days</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-3">
                    <p className='font-normal text-sm text-[#A4A4A9]'>Max lock multiplier</p>
                    <p className='font-bold text-base'>2x</p>
                  </td>
                  <td className="py-2 col-span-6 md:col-span-3 lg:col-span-2">
                    <p className='font-normal text-sm text-[#A4A4A9]'>Max boost multiplier</p>
                    <p className='font-bold text-base'>2x</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-7 mb-5 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className='flex justify-center pb-6 lg:pb-0'>
            <div className='flex justify-start w-60'>
              <Image src="/svg/percent.svg" alt="deposit logo" width={20} height={20} priority />
              <div className='pl-[10px]'>
                <p className='text-sm text-[#A4A4A9]'>Total deposits value</p>
                <p className='text-base font-bold'>$0 ETH-USDT</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center pb-6 lg:pb-0'>
            <div className='flex justify-start w-60'>
              <Image src="/svg/hand.svg" alt="APR logo" width={20} height={20} priority />
              <div className='pl-[10px]'>
                <p className='text-sm text-[#A4A4A9]'>Total average APR</p>
                <p className='text-base font-bold'>0%</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center pb-6 lg:pb-0'>
            <div className='flex justify-start w-60'>
              <Image src="/svg/logo-2.svg" alt="xVictory logo" width={20} height={20} priority />
              <div className='pl-[10px]'>
                <p className='text-sm text-[#A4A4A9]'>xVictory rewards</p>
                <p className='text-base font-bold'>$0</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center pb-6 lg:pb-0'>
            <div className='flex justify-start w-60'>
              <Image src="/svg/logo-2.svg" alt="victory logo" width={20} height={20} priority />
              <div className='pl-[10px]'>
                <p className='text-sm text-[#A4A4A9]'>Victory rewards</p>
                <p className='text-base font-bold'>$0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit p-7 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div>
            <p className='font-bold text-xl'>Positions</p>
          </div>
          <div className='my-5'>
            <table className="table-auto w-full">
              <thead className="border-b-2 border-[#131325]">
                <tr>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9]">Token</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9]">Amount</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9]">Settings</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9]">APR</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9]">Pending Rewards</th>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
