const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledLab = require('./build/ProjectLab.json');


const provider = new HDWalletProvider(
  'link urban glass catalog harsh comfort unique fuel enroll spider biology royal' ,
  'https://rinkeby.infura.io/4ULBXXZPvjL8g6FUtb6x'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledLab.interface)
  )
    .deploy({ data: '0x' + compiledLab.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
