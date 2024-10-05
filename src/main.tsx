import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://github.com/KalidSittner/blockchain_network/blob/main/dapp_manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider
    manifestUrl={manifestUrl}
    uiPreferences={{ theme: THEME.DARK }}
    walletsListConfiguration={{
      includeWallets: [
        {
          appName: "tonkeeper",
          name: "Tonkeeper",
          imageUrl: "https://tonkeeper.com/assets/tonconnect-icon.png",
          aboutUrl: "https://tonkeeper.com",
          universalLink: "https://app.tonkeeper.com/ton-connect",
          bridgeUrl: "http://localhost:80/bridge/tonkeeper",
          platforms: ["ios", "android", "macos", "windows", "linux"]
        },
        {
          appName: "mytonwallet",
          name: "MyTonWallet",
          imageUrl: "https://static.mytonwallet.io/icon-256.png",
          aboutUrl: "https://mytonwallet.io",
          universalLink: "https://connect.mytonwallet.org",
          bridgeUrl: "http://localhost:80/bridge/mytonwallet",
          platforms: ["ios", "android", "macos", "windows", "linux"]
        },
      ]
    }}
  >
    <App />
  </TonConnectUIProvider>,
)