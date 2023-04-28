import Image from 'next/image';

const Main = () => {

  return (
    <div className="container m-auto pb-32">
      <div className="flex flex-wrap justify-between pt-28 pb-14 px-2">
        <div className="text-[32px] font-bold cursor-pointer">Yield farming</div>
        <div className="flex flex-wrap">
          <div className="p-2 pl-3 ml-0 sm:mx-2 self-center bg-[#131325] rounded-[11px] text-[13px]">
            <div className="bg-zk bg-no-repeat bg-contain px-6 bg-left cursor-pointer font-bold">$2,936,362</div>
          </div>
          <div className="p-2 mx-2 self-center bg-[#131325] rounded-[11px] text-[13px] cursor-pointer font-bold">$2,936,362 TVL</div>
        </div>
        <div className="w-full text-xs text-[#A4A4A9]">Create staking positions for incentivized liquidity and earn Victory.</div>
      </div>
      <div className="px-2">
        <div className="h-fit p-7 bg-[#07071c] border border-solid border-[#131325] rounded-xl">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12'>
            <div className='lg:col-span-7 xl:col-span-8'>
              <input
                type="text"
                placeholder="Search"
                className="text-white w-full bg-[#131325] rounded-xl placeholder:text-[#A4A4A9] py-[11px] px-[25px]"
              />
            </div>
            <div className='grid grid-cols-12 sm:grid-cols-12 pt-5 md:pt-0 lg:col-span-5 xl:col-span-4'>
              <button className='flex col-span-4 sm:col-span-5 m-auto bg-[#131325] py-3 px-5'>
                <p className='font-light text-xs text-[#A4A4A9] pr-2.5'>Filters</p>
                <Image src="/svg/dropdown.svg" className='m-auto mr-1.5' alt="filter logo" width={9} height={6} priority />
              </button>
              <button className='flex m-auto col-span-8 sm:col-span-7 bg-[#131325] py-3 px-4 ml-2.5'>
                <p className='font-light text-xs text-[#A4A4A9] pr-2.5 w-40'>
                  Sort by
                  <strong className='font-extrabold text-xs text-white p-2'>Emissions</strong>
                </p>
                <Image src="/svg/dropdown.svg" className='m-auto' alt="filter logo" width={9} height={6} priority />
              </button>
            </div>
          </div>
          <div className='my-5'>
            <table className="table-auto w-full">
              <thead className="border-b-2 border-[#131325]">
                <tr>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">Name</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">TVL</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">APR range</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">Total deposit</th>
                  <th className="py-2 pb-5 font-light text-[10px] text-[#A4A4A9] text-start">Pending rewards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 flex">
                    <div className='flex pr-2.5'>
                      <Image
                        src="/svg/eth.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                      <Image
                        src="/svg/tether.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold text-[10px]'>ETH-USDT</p>
                      <p className='text-[10px] text-[#A4A4A9] font-light'>Earn xVictory</p>
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$6.9M</td>
                  <td className="py-2 font-bold text-[10px]">
                    <div className='flex'>
                      30.62% &gt; <span className='text-[#DAA70C] pl-1'>65.75%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={8}
                        height={8}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$153,456</td>
                  <td className="py-2 font-bold text-[10px]">$1,539</td>
                </tr>
                <tr>
                  <td className="py-2 flex">
                    <div className='flex pr-2.5'>
                      <Image
                        src="/svg/eth.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                      <Image
                        src="/svg/tether.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold text-[10px]'>ETH-USDT</p>
                      <p className='text-[10px] text-[#A4A4A9] font-light'>Earn xVictory</p>
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$6.9M</td>
                  <td className="py-2 font-bold text-[10px]">
                    <div className='flex'>
                      30.62% &gt; <span className='text-[#DAA70C] pl-1'>65.75%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={8}
                        height={8}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$153,456</td>
                  <td className="py-2 font-bold text-[10px]">$1,539</td>
                </tr>
                <tr>
                  <td className="py-2 flex">
                    <div className='flex pr-2.5'>
                      <Image
                        src="/svg/eth.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                      <Image
                        src="/svg/tether.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold text-[10px]'>ETH-USDT</p>
                      <p className='text-[10px] text-[#A4A4A9] font-light'>Earn xVictory</p>
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$6.9M</td>
                  <td className="py-2 font-bold text-[10px]">
                    <div className='flex'>
                      30.62% &gt; <span className='text-[#DAA70C] pl-1'>65.75%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={8}
                        height={8}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$153,456</td>
                  <td className="py-2 font-bold text-[10px]">$1,539</td>
                </tr>
                <tr>
                  <td className="py-2 flex">
                    <div className='flex pr-2.5'>
                      <Image
                        src="/svg/eth.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                      <Image
                        src="/svg/tether.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold text-[10px]'>ETH-USDT</p>
                      <p className='text-[10px] text-[#A4A4A9] font-light'>Earn xVictory</p>
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$6.9M</td>
                  <td className="py-2 font-bold text-[10px]">
                    <div className='flex'>
                      30.62% &gt; <span className='text-[#DAA70C] pl-1'>65.75%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={8}
                        height={8}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$153,456</td>
                  <td className="py-2 font-bold text-[10px]">$1,539</td>
                </tr>
                <tr>
                  <td className="py-2 flex">
                    <div className='flex pr-2.5'>
                      <Image
                        src="/svg/eth.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                      <Image
                        src="/svg/tether.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold text-[10px]'>ETH-USDT</p>
                      <p className='text-[10px] text-[#A4A4A9] font-light'>Earn xVictory</p>
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$6.9M</td>
                  <td className="py-2 font-bold text-[10px]">
                    <div className='flex'>
                      30.62% &gt; <span className='text-[#DAA70C] pl-1'>65.75%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={8}
                        height={8}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$153,456</td>
                  <td className="py-2 font-bold text-[10px]">$1,539</td>
                </tr>
                <tr>
                  <td className="py-2 flex">
                    <div className='flex pr-2.5'>
                      <Image
                        src="/svg/eth.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                      <Image
                        src="/svg/tether.svg"
                        alt="eth logo"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold text-[10px]'>ETH-USDT</p>
                      <p className='text-[10px] text-[#A4A4A9] font-light'>Earn xVictory</p>
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$6.9M</td>
                  <td className="py-2 font-bold text-[10px]">
                    <div className='flex'>
                      30.62% &gt; <span className='text-[#DAA70C] pl-1'>65.75%</span>
                      <Image
                        src="svg/question.svg"
                        alt="question logo"
                        width={8}
                        height={8}
                        className='ml-2.5'
                        priority
                      />
                    </div>
                  </td>
                  <td className="py-2 font-bold text-[10px]">$153,456</td>
                  <td className="py-2 font-bold text-[10px]">$1,539</td>
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
