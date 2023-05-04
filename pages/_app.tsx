import '@/styles/globals.css'
import '@/styles/main_page.css'
import '@/styles/layout.css'
import type { AppProps } from 'next/app'

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  zkSync,
  zkSyncTestnet,
} from "wagmi/chains";

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// Configure wagmi client
const chains = [
  zkSync,
  zkSyncTestnet,
];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});

// Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);
  
  return (
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : null}

      <Web3Modal 
        projectId={projectId} 
        ethereumClient={ethereumClient} 
      />
    </>
  );
}
