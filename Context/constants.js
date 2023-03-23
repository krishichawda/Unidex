import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";


//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0x25A1DF485cFBb93117f12fc673D87D1cddEb845a";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0xD855cE0C298537ad5b5b96060Cf90e663696bbf6";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x1f53E116c31F171e59f45f0752AEc5d1F5aA3714";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0xF45B1CdbA9AACE2e9bbE80bf376CE816bb7E73FB";
export const userStorageDataABI = userStorgeData.abi;
