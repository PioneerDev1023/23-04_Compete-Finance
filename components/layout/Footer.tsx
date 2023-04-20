import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="m-auto bg-[#07071c] border border-solid border-[#131325]">
      <div className="container m-auto py-5 px-2 flex flex-wrap justify-between">
        <div>
          <div className="flex flex-wrap cursor-pointer">
            <Link href="/">
              <Image
                src="/svg/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
            <div className="footer_logo cursor-pointer">COMPETE</div>
          </div>
          <div className="footer_follow cursor-pointer">
            <div className="m-auto">Follow Us</div>
            <img src="/svg/twitter.svg" className="ml-2" />
            <img src="/svg/telegram.svg" className="ml-2" />
            <img src="/svg/discord.svg" className="ml-2" />
          </div>
        </div>
        <div className="flex flex-wrap cursor-pointer justify-between text-[#D9D9D9]">
          <ul className="ml-20 text-[10px] ">
            <li className="text-[13px] font-bold py-1 text-white">Resources</li>
            <li className='mt-4'>Audit </li>
            <li className='mt-4'>Contract us</li>
            <li className='mt-4'>Contracts</li>
            <li className='mt-4'>Documentation</li>
          </ul>
          <ul className="ml-20 text-[10px]">
            <li className="text-[13px] font-bold py-1 text-white">Help</li>
            <li className='mt-4'>FAQ</li>
            <li className='mt-4'>Guides</li>
            <li className='mt-4'>Support</li>
          </ul>
          <ul className="ml-20 text-[10px]">
            <li className="text-[13px] font-bold py-1 text-white">Tool</li>
            <li className='mt-4'>Analytics</li>
            <li className='mt-4'>Bridge</li>
            <li className='mt-4'>CoinGecko</li>
            <li className='mt-4'>DexTool</li>
            <li className='mt-4'>GeckoTerminal</li>
            <li className='mt-4'>Governance</li>
          </ul>
          <ul className="ml-20 text-[10px]">
            <li className="text-[13px] font-bold py-1 text-white">Ecosystem</li>
            <li className='mt-4'>Create a Nitro pool</li>
            <li className='mt-4'>My Nitro pool</li>
          </ul>
        </div>
        <div className="crypto_wrapper cursor-pointer">
          <div className="p-2 mb-4 flex rounded border border-solid border-[#131325]">
            <Image 
              src="/svg/headerZk.svg"
              alt="Logo"
              width={20}
              height={20}
              priority
            />
            <div className='px-4 text-[13px] font-bold'>$2,936,362</div>
          </div>
          <div className="p-2 text-[13px] font-bold rounded border border-[#131325] border-solid">$ 2,936,362 TVL</div>
        </div>
      </div>
      <div className="text-center p-4 text-[#D9D9D9] text-[13px]">
        © Compete.finance 2023. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
