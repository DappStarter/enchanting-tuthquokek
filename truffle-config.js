require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss inner produce borrow toilet'; 
let testAccounts = [
"0x6a44fe627fb7ab78cce6688dac4c9eb10f141929fa66c277b3da2f35da279679",
"0x8cbf1187e943571a02502291a572955533efadbc48d4d96e588b925ab2a5376e",
"0x89bfb625aedb71d40d6f0263a303e5810fad9b267ef33b52da32fe7b481c8507",
"0x2aeb91984f444ab0fde7b29eb2222ddf04ae8b6e3fd9f6609bc2c2923447a5c0",
"0x58027f7b45523ef6c4dd2ed253851d23038985d2f96fa6f8d4fca30cf22a94e8",
"0x915a16eb03d05cc1e0387d3458819bc75e0f26936aa1288444e4ecebf7d7199d",
"0xbd383ac2d9a882481de2785123ec744819824723081fe64b1f6e3fb150c860f3",
"0x84116cde007709dfdbb3d06e98b5065cbf1bc82cc91d34e60c615dfcbe11b69a",
"0xc5b74ebffcde7723e090a7c53c14c246fd48f265c92b5d102f71b26631990aca",
"0x2028e41d7e92015035f4914444ace80681b03ce3b6fcb3cb3c5044d4bff63b45"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
