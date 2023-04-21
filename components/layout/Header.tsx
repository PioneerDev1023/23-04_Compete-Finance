import { ethers } from 'ethers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [account, setAccount] = useState<string | null>(null);
  const {asPath} = useRouter();
 
  const handleConnect = async () => {
    try {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('not connect...');
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const web3Provider = new ethers.JsonRpcProvider(asPath);
      console.log('web3Provider', web3Provider);

      setAccount(accounts[0]);
      console.log('account', accounts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="header_wrap">
      <div className="container m-auto py-[0.95rem] px-2 flex flex-wrap justify-between">
        {/* <div className="flex flex-wrap cursor-pointer">
          <Link href='/'>
            <Image
              src="/svg/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
          <ul className="flex flex-wrap pl-5 md:pl-0 md:flex-row md:ml-auto">
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">Trade</li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">Earn</li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">xVictory</li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right"><Link href='/liquidity'>Liquidity</Link></li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">More</li>
          </ul>
        </div> */}
        <div className="flex flex-wrap items-center justify-between py-3">
          <Link href="/">
            <Image src="/svg/logo.svg" alt="Logo" width="40" height="40" />
          </Link>
          <button type="button" className="block lg:hidden">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <ul className="hidden lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:px-2">
            <li className="px-4 py-2 md:py-0">
              <Link href="#" className="block md:inline-block px-2 py-1 md:px-4 md:py-2 text-white hover:text-gray-300">Trade</Link>
            </li>
            <li className="px-4 py-2 md:py-0">
              <Link href="#" className="block md:inline-block px-2 py-1 md:px-4 md:py-2 text-white hover:text-gray-300">Earn</Link>
            </li>
            <li className="px-4 py-2 md:py-0">
              <Link href="/position" className="block md:inline-block px-2 py-1 md:px-4 md:py-2 text-white hover:text-gray-300">Position</Link>
            </li>
            <li className="px-4 py-2 md:py-0">
              <Link href="/liquidity" className="block md:inline-block px-2 py-1 md:px-4 md:py-2 text-white hover:text-gray-300">Liquidity</Link>
            </li>
            <li className="px-4 py-2 md:py-0">
              <Link href="#" className="block md:inline-block px-2 py-1 md:px-4 md:py-2 text-white hover:text-gray-300">More</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          <div className="self-start text-[1.3rem] pr-4 mt-[10px] cursor-pointer">...</div>
          <div className="self-center cursor-pointer pl-7 text-[13px] bg-zk bg-no-repeat bg-contain">
            <div className="pr-4 self-center bg-arrow-d bg-no-repeat bg-right">zkSync</div>
          </div>
          <div onClick={handleConnect} className="self-center cursor-pointer text-[15px] ml-14 px-4 p-1 font-black bg-[#daa70c] rounded-xl">
            {account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : 'Connect'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
