import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9756eC0115D5701c3a38E52266Fd0C8e08B8AED5"
);

export default instance;
