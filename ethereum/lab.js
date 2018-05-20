import web3 from './web3';
import ProjectLab from './build/ProjectLab.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProjectLab.interface),
  '0x5F43Ea3C01C5A84A6B0562512e03c7d75e5e45EE'
);

export default instance;
