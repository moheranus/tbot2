import { useEffect } from "react";
import CardList from './components/CardList';
import hamsterKombat from './assets/hamster.jfif';
import tapswap from './assets/tapswap.jfif';
import pixelTap from './assets/pixeltap.jfif';
import blum from './assets/blum.png';
import cexio from './assets/cex.jfif';
import dotcoin from './assets/dotcoin.png';
import wcoin from './assets/wcon.jfif';
import memefi from './assets/memefi.jfif';
import timeFarm from './assets/timefarm.jfif';
import yescoin from './assets/yescoin.jfif';
import bbqcoin from './assets/bbqcoin.jfif';
import simplecoin from './assets/simplecoin.jfif';
import spinnercoin from './assets/spinnercoin.jfif';
import gemzcoin from './assets/gemzcoin.jfif';
import cubes from './assets/cubes.jfif';
import cyberfinance from './assets/cyberfinance.jfif';

import firecoin from './assets/firecoin.jfif';

import dragonzland from './assets/dragonz.jfif';

import muskempire from './assets/muskempire.jfif';



import './App.css';
const tele = window.Telegram.WebApp;


const cardsData = [
  {
    id: 1,
    title: 'Hamster Kombat',
    description: 'Total user/ 240mln',
    image: hamsterKombat,
    link: 'https://t.me/hAmster_kombat_bot/start?startapp=kentId389936178'
  },
  {
    id: 2,
    title: 'Tapswap',
    description: 'Total user/ 64mln',
    image: tapswap,
    link: 'https://t.me/tapswap_mirror_2_bot?start=r_389936178'
  },
  {
    id: 51,
    title: 'Musk Empire',
    description: 'Total user/ 4mln',
    image: muskempire,
    link: 't.me/muskempire_bot/game?startapp=hero389936178'
  },
  {
    id: 3,
    title: 'PixelTap by Pixelverse',
    description: 'Total user/ 50mln.',
    image: pixelTap,
    link: 'https://t.me/pixelversexyzbot?start=389936178'
  },
  {
    id: 4,
    title: 'Blum',
    description: 'Total user/ 30mln',
    image: blum,
    link: 'https://t.me/BlumCryptoBot/app?startapp=ref_VmArclxdeX'
  },
  {
    id: 17,
    title: 'Gemzcoin',
    description: 'Total user/ 5mln.',
    image: gemzcoin,
    link: 'https://t.me/gemzcoin_boT/tap?startapp=QO8DC-UICrBanCch2p2ERI'
  },
  {
    id: 5,
    title: 'CEX.IO',
    description: 'Total user/ 17mln',
    image: cexio,
    link: 'https://t.me/cexio_tap_bot?start=1718299022028583'
  },
  {
    id: 6,
    title: 'Dotcoin',
    description: 'Total user/ 17mln',
    image: dotcoin,
    link: 'https://t.me/dotcoin_bot?start=r_389936178'
  },
  {
    id: 7,
    title: 'W-coin',
    description: 'Total user/ 16mln',
    image: wcoin,
    link: 'https://t.me/wcoin_tapbot?start=Mzg5OTM2MTc4'
  },
  {
    id: 8,
    title: 'MemeFi',
    description: 'Total user/ 16mln',
    image: memefi,
    link: 'https://t.me/memefi_coin_bot?start=r_222ed27611'
  },
  {
    id: 9,
    title: 'Time Farm',
    description: 'Total user/ 15mln',
    image: timeFarm,
    link: 'https://t.me/TimeFarmCryptoBot?start=1oKjVALcbeg87q7HB'
  },
  {
    id: 10,
    title: 'YesCoin',
    description: 'Total user/ 11mln',
    image: yescoin,
    link: 'https://web.telegram.org/#@theYescoin_bot'
  },
  {
    id: 11,
    title: 'BBQCoin',
    description: 'Total user/ 8.1mln',
    image: bbqcoin,
    link: 'https://t.me/BBQcoin_bot/BBQcoin?startapp=rp_9000013_389936178'
  },
  {
    id: 12,
    title: 'Simple Coin',
    description: 'Total user/ 6mln',
    image: simplecoin,
    link: 'https://t.me/Simple_Tap_Bot/app?startapp=1719585902356'
  },


  {
    id: 15,
    title: 'SpinnerCoin',
    description: 'Total user/ 6mln',
    image: spinnercoin,
    link: 'https://t.me/SpinnerCoin_bot/app?startapp=r_5402303'
  },


  {
    id: 18,
    title: 'Cubes',
    description: 'Total user/ 6mln',
    image: cubes,
    link: ' https://t.me/cubesonthewater_bot?start=Mzg5OTM2MTc4'
  },
  {
    id: 19,
    title: 'CyberFinance',
    description: 'Total user/ 6mln',
    image: cyberfinance,
    link: 'https://t.me/CyberFinanceBot?start=cj02VHhneXhTQTMwTDAmdT1yZWY='
  },





  {
    id: 27,
    title: 'FireCoin',
    description: 'Total user/ 4mln',
    image: firecoin,
    link: 'https://t.me/firecoin_app_bot/app?startapp=r_389936178_0'
  },






  {
    id: 43,
    title: 'Dragonz Land',
    description: 'competing hamster kombat',
    image: dragonzland,
    link: 'https://t.me/dragonz_land_bot/app?startapp=ref-667c2bc5e2069e47c98df4e6'
  },








];

const App = () => {
  useEffect(() => {
    tele.ready();
  });
  return (
    <div className='app'>
      <CardList cardsData={cardsData} />
    </div>
  );
};

export default App;
