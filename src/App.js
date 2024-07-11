import { useState, useEffect } from "react";
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
import pocketfi from './assets/pocketfi.jfif';
import spinnercoin from './assets/spinnercoin.jfif';
import pepeminer from './assets/pepeminer.jfif';
import gemzcoin from './assets/gemzcoin.jfif';
import cubes from './assets/cubes.jfif';
import cyberfinance from './assets/cyberfinance.jfif';
import notboredpuppies from './assets/notboredpuppies.jfif';
import bullrun from './assets/bullrun.jfif';
import shuttle from './assets/shuttle.jfif';
import seedapp from './assets/seedapp.png';
import wormfareslap from './assets/wormafareslap.jfif';
import pocketrocketgame from './assets/pocketrocket.jfif';
import tapcoins from './assets/tapcoins.jfif';
import firecoin from './assets/firecoin.jfif';
import notmemapp from './assets/notmemeapp.png';
import timecoin from './assets/timecoin.jfif';
import bfdc from './assets/bfdcoin.jfif';
import cityholdergame from './assets/cityholder.jfif';
import ogcommunity from './assets/ogcommunity.jfif';
import firstfisher from './assets/firstfisher.jfif';
import mtkclickermafia from './assets/$mtk.jfif';
import timeton from './assets/timeton.jfif';
import holdcoin from './assets/holdcoin.jfif';
import cybasefarm from './assets/cybasefarm.jfif';
// import nothing from './assets/nothing.jfif';
import ponchiqs from './assets/ponchiqs.jfif';
import cashcoin from './assets/cashcoin.jfif';
import mathcoin from './assets/mathcoin.jfif';
import dragonzland from './assets/dragonz.jfif';
import hexnio from './assets/hexn.jfif';
import claytongame from './assets/clayton.jfif';
import fastx from './assets/fastx.jfif';
import airdrophunterapp from './assets/airdrophunter.jfif';
import capybara from './assets/capybara.jfif';
import oxygenminer from './assets/oxygen.jfif';
import fuelmining from './assets/fuel.jfif';
import drophunter from './assets/drophunter.jfif';
import limecoin from './assets/limecoin.jfif';
// import moonplay from './assets/m';
import hamsterdam from './assets/hamsterdam.jfif';
import tonpotato from './assets/tonpotato.jfif';
import dragon from './assets/dragon.jfif';
// import doginhood from './assets/dog';
// import tomarscoin from './assets/to';
// import mappasaurusapp from './assets/map';



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
    description: 'This is the second card.',
    image: simplecoin,
    link: 'https://t.me/Simple_Tap_Bot/app?startapp=1719585902356'
  },

  {
    id: 14,
    title: 'PocketFi',
    description: 'This is the second card.',
    image: pocketfi,
    link: 'https://example.com/2'
  },
  {
    id: 15,
    title: 'SpinnerCoin',
    description: 'This is the second card.',
    image: spinnercoin,
    link: 'https://example.com/2'
  },
  {
    id: 16,
    title: 'PEPE Miner',
    description: 'This is the second card.',
    image: pepeminer,
    link: 'https://example.com/2'
  },
  {
    id: 17,
    title: 'Gemzcoin',
    description: 'This is the second card.',
    image: gemzcoin,
    link: 'https://example.com/2'
  },
  {
    id: 18,
    title: 'Cubes',
    description: 'This is the second card.',
    image: cubes,
    link: 'https://example.com/2'
  },
  {
    id: 19,
    title: 'CyberFinance',
    description: 'This is the second card.',
    image: cyberfinance,
    link: 'https://example.com/2'
  },
  {
    id: 20,
    title: 'NotBoredPuppies',
    description: 'This is the second card.',
    image: notboredpuppies,
    link: 'https://example.com/2'
  },
  {
    id: 21,
    title: 'Bull Run',
    description: 'This is the second card.',
    image: bullrun,
    link: 'https://example.com/2'
  },
  {
    id: 22,
    title: 'Shuttle',
    description: 'This is the second card.',
    image: shuttle,
    link: 'https://example.com/2'
  },
  {
    id: 23,
    title: 'SEED App',
    description: 'This is the second card.',
    image: seedapp,
    link: 'https://example.com/2'
  },
  {
    id: 24,
    title: 'Wormfare Slap',
    description: 'This is the second card.',
    image: wormfareslap,
    link: 'https://example.com/2'
  },
  {
    id: 25,
    title: 'Pocket Rocket Game',
    description: 'This is the second card.',
    image: pocketrocketgame,
    link: 'https://example.com/2'
  },
  {
    id: 26,
    title: 'TapCoins',
    description: 'This is the second card.',
    image: tapcoins,
    link: 'https://example.com/2'
  },
  {
    id: 27,
    title: 'FireCoin',
    description: 'This is the second card.',
    image: firecoin,
    link: 'https://t.me/firecoin_app_bot/app?startapp=r_389936178_0'
  },
  {
    id: 28,
    title: 'NOTMEME App',
    description: 'This is the second card.',
    image: notmemapp,
    link: 'https://example.com/2'
  },
  {
    id: 29,
    title: 'Timecoin',
    description: 'This is the second card.',
    image: timecoin,
    link: 'https://example.com/2'
  },
  {
    id: 30,
    title: 'BFDCoin',
    description: 'This is the second card.',
    image: bfdc,
    link: 'https://example.com/2'
  },
  {
    id: 31,
    title: 'CITY Holder Game',
    description: 'This is the second card.',
    image: cityholdergame,
    link: 'https://example.com/2'
  },
  {
    id: 32,
    title: 'OGCommunity',
    description: 'This is the second card.',
    image: ogcommunity,
    link: 'https://example.com/2'
  },
  {
    id: 33,
    title: 'FirstFisher',
    description: 'This is the second card.',
    image: firstfisher,
    link: 'https://example.com/2'
  },
  {
    id: 34,
    title: '$MTK Clicker Mafia',
    description: 'This is the second card.',
    image: mtkclickermafia,
    link: 'https://example.com/2'
  },
  {
    id: 35,
    title: 'Time TON',
    description: 'This is the second card.',
    image: timeton,
    link: 'https://example.com/2'
  },
  {
    id: 36,
    title: 'YesCoin',
    description: 'This is the second card.',
    image: yescoin,
    link: 'https://example.com/2'
  },
  {
    id: 37,
    title: 'HoldCoin',
    description: 'This is the second card.',
    image: holdcoin,
    link: 'https://example.com/2'
  },
  {
    id: 38,
    title: 'CYBASE Farm',
    description: 'This is the second card.',
    image: cybasefarm,
    link: 'https://example.com/2'
  },
  {
    id: 39,
    title: 'Nothing',
    description: 'This is the second card.',
    image: drophunter,
    link: 'https://example.com/2'
  },
  {
    id: 40,
    title: 'Ponchiqs',
    description: 'This is the second card.',
    image: ponchiqs,
    link: 'https://example.com/2'
  },
  {
    id: 41,
    title: 'CashCoin',
    description: 'This is the second card.',
    image: cashcoin,
    link: 'https://example.com/2'
  },
  {
    id: 42,
    title: 'MathCoin',
    description: 'This is the second card.',
    image: mathcoin,
    link: 'https://example.com/2'
  },
  {
    id: 43,
    title: 'Dragonz Land',
    description: 'This is the second card.',
    image: dragonzland,
    link: 'https://example.com/2'
  },
  {
    id: 44,
    title: 'HEXN.IO',
    description: 'This is the second card.',
    image: hexnio,
    link: 'https://example.com/2'
  },
  {
    id: 45,
    title: 'Clayton Game',
    description: 'This is the second card.',
    image: claytongame,
    link: 'https://example.com/2'
  },
  {
    id: 46,
    title: 'FastX',
    description: 'This is the second card.',
    image: fastx,
    link: 'https://example.com/2'
  },
  {
    id: 47,
    title: 'Airdrop Hunter App',
    description: 'This is the second card.',
    image: airdrophunterapp,
    link: 'https://example.com/2'
  },
  {
    id: 48,
    title: 'Capybara',
    description: 'This is the second card.',
    image: capybara,
    link: 'https://example.com/2'
  },
  {
    id: 49,
    title: 'Oxygen Miner',
    description: 'This is the second card.',
    image: oxygenminer,
    link: 'https://example.com/2'
  },
  {
    id: 50,
    title: 'Fuel Mining',
    description: 'This is the second card.',
    image: fuelmining,
    link: 'https://example.com/2'
  },
  {
    id: 51,
    title: 'DropHunter',
    description: 'This is the second card.',
    image: drophunter,
    link: 'https://example.com/2'
  },
  {
    id: 52,
    title: 'LimeCoin',
    description: 'This is the second card.',
    image: limecoin,
    link: 'https://example.com/2'
  },
  {
    id: 53,
    title: 'MoonPlay',
    description: 'This is the second card.',
    image: drophunter,
    link: 'https://example.com/2'
  },
  {
    id: 54,
    title: 'Hamsterdam',
    description: 'This is the second card.',
    image: hamsterdam,
    link: 'https://example.com/2'
  },
  {
    id: 55,
    title: 'Ton Potato',
    description: 'dgf',
    image: tonpotato,
    link: 'https://example.com/2'
  },
  {
    id: 56,
    title: 'Dragon',
    description: 'This is the second card.',
    image: dragon,
    link: 'https://example.com/2'
  },
  {
    id: 57,
    title: 'Doginhood',
    description: 'This is the second card.',
    image: drophunter,
    link: 'https://example.com/2'
  },
  {
    id: 58,
    title: 'ToMarsCoin',
    description: 'This is the second card.',
    image: drophunter,
    link: 'https://example.com/2'
  },
  {
    id: 59,
    title: 'Mappasaurus APP',
    description: 'This is the second card.',
    image: drophunter,
    link: 'https://example.com/2'
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
