import { ethers } from 'ethers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "../fragment/button";

const Header: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const { asPath } = useRouter();

  const toggleMenu = () => {
    const navbar = document.getElementById('navbar-sticky');
    if (navbar) {
      navbar.classList.toggle('hidden');
    }
  };

  useEffect(() => {
    const button = document.getElementById('dropdownNavbarLink')
    const dropdown = document.getElementById('dropdownNavbar')

    function toggleDropdown() {
      if(dropdown) dropdown.classList.toggle('hidden')
    }
    if (button && dropdown) {
      button.addEventListener('click', toggleDropdown)
      return () => {
        button.removeEventListener('click', toggleDropdown)
      }
    }

    
  }, [])

  return (
    <nav className="bg-[#07071C] fixed w-full z-20 top-0 left-0 border-b border-[#131325] shadow-sm shadow-black">
      <div className="container px-2 flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/logo.svg"
            className=""
            alt="Compete Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        <div className="flex md:order-2">
          <div className="flex flex-wrap">
            <div className="custom-web3-switch mr-2">
              <Web3NetworkSwitch />
            </div>
            <div className="custom-web3-button">
              <Web3Button icon="show" label="Connect" balance="show" />
            </div>
            <CustomButton />
          </div>
          <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="lg:absolute lg:pl-24 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#07071C] dark:border-gray-700">
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Trade</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Earn</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">xVictory</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Launchpad</Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-gray-300 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                More 
                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div id="dropdownNavbar" className="absolute z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Exchange</Link>
                    </li>
                    <li>
                      <Link href="/liquidity" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Liquidity</Link>
                    </li>
                    <li>
                      <Link href="/position" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Position</Link>
                    </li>
                    <li>
                      <Link href="/farming" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yield farming</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link href="/farming-detail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Farming Detail</Link>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
