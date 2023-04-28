import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="m-auto bg-[#07071c] border border-solid border-[#131325]">
      <div className="container m-auto py-5 px-2 flex flex-wrap justify-between">
        <div>
          <div>
            <Link href="https://compete.finance/" className="flex flex-wrap cursor-pointer pb-6">
              <Image
                src="/svg/logo.svg"
                alt="compete finance"
                width={40}
                height={40}
                priority
              />
              <div className="text-xl ml-4 font-bold self-center cursor-pointer">COMPETE</div>
            </Link>
          </div>
          <div className="mt-28 hidden text-[13px] cursor-pointer lg:flex">
            <div className="m-auto">Follow Us</div>
            <Link href="https://twitter.com/zkcompete">
              <Image src="/svg/twitter.svg" alt="twitter" width={24} height={24} className="ml-2" />
            </Link>
            <Link href="https://t.me/competefinance">
              <Image src="/svg/telegram.svg" alt="twitter" width={24} height={24} className="ml-2" />
            </Link>
            <Link href="https://discord.gg/dPnZj26UCC">
              <Image src="/svg/discord.svg" alt="twitter" width={24} height={24} className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap cursor-pointer justify-between text-[#D9D9D9]">
          <div className='flex flex-wrap pb-7'>
            <ul className="mr-20 text-[10px] ">
              <li className="text-[13px] font-bold py-1 text-white">Resources</li>
              <li className='mt-4'>Audit </li>
              <li className='mt-4'>Contract us</li>
              <li className='mt-4'>Contracts</li>
              <Link href="https://docs.compete.finance"><li className='mt-4'>Documentation</li></Link>
            </ul>
            <ul className="mr-20 text-[10px]">
              <li className="text-[13px] font-bold py-1 text-white">Help</li>
              <li className='mt-4'>FAQ</li>
              <li className='mt-4'>Guides</li>
              <li className='mt-4'>Support</li>
            </ul>
          </div>
          <div className='flex flex-wrap pb-7'>
            <ul className="mr-20 text-[10px]">
              <li className="text-[13px] font-bold py-1 text-white">Tool</li>
              <li className='mt-4'>Analytics</li>
              <li className='mt-4'>Bridge</li>
              <li className='mt-4'>CoinGecko</li>
              <li className='mt-4'>DexTool</li>
              <li className='mt-4'>GeckoTerminal</li>
              <li className='mt-4'>Governance</li>
            </ul>
            <ul className="mr-20 text-[10px]">
              <li className="text-[13px] font-bold py-1 text-white">Ecosystem</li>
              <li className='mt-4'>Create a Nitro pool</li>
              <li className='mt-4'>My Nitro pool</li>
            </ul>
          </div>
        </div>
        <div className="crypto_wrapper cursor-pointer">
          <div className="p-2 mb-4 flex rounded border border-solid border-[#131325] text-center">
            <Image 
              src="/svg/headerZk.svg"
              alt="zksync net"
              width={20}
              height={20}
              priority
            />
            <div className='px-4 text-[13px] font-bold'>$2,936,362</div>
          </div>
          <div className="p-2 text-[13px] font-bold rounded border border-[#131325] border-solid text-center">$2,936,362 TVL</div>
          <div className="mt-3 flex text-[13px] cursor-pointer lg:hidden">
            <div className="m-auto">Follow Us</div>
            <Link href="https://twitter.com/zkcompete">
              <Image src="/svg/twitter.svg" alt="twitter" width={24} height={24} className="ml-2" />
            </Link>
            <Link href="https://t.me/competefinance">
              <Image src="/svg/telegram.svg" alt="twitter" width={24} height={24} className="ml-2" />
            </Link>
            <Link href="https://discord.gg/dPnZj26UCC">
              <Image src="/svg/discord.svg" alt="twitter" width={24} height={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center p-4 text-[#D9D9D9] text-[13px]">
        © Compete.finance 2023. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
