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
    <div className="container m-auto header_wrap">
      <div className="m-auto py-[0.95rem] flex flex-wrap justify-between">
        <div className="flex flex-wrap cursor-pointer">
          <Link href='/'>
            <Image
              src="/svg/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
          <ul className="flex flex-wrap pl-5">
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">Trade</li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">Earn</li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">xVictory</li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right"><Link href='/liquidity'>Liquidity</Link></li>
            <li className="px-4 cursor-pointer text-[13px] self-center bg-arrow-d bg-no-repeat bg-right">More</li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          <div className="self-start text-[1.3rem] pr-4 cursor-pointer">...</div>
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
