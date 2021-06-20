require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note ridge purpose hunt produce bone slab'; 
let testAccounts = [
"0xb8aa70ef8dc57225b876f13c5678fd4f574feafdc237105e7e1eddf4e4c059c3",
"0x06368cb30a31804f02e9b242c70139b2f5d563f2280aa7240a11d9c337e8bf41",
"0x414e4e906f9be272bf792019cb257792b50062ca986e5bbb6dbc92adf12421cf",
"0xa5a47e736e079099b0450b71ac81fb10cd58a0cbeb15df429dcb7ee004d725b2",
"0xf65a87021d90f4c7eb00e604873ff8cb9fe317589bf3c84e5df920bbd83351ad",
"0xaa80541c0458cdca1182aa13a75839dd13399e413f60674390ae4753852ac0a9",
"0x66378ca6080c72c7106abdcbf3e5e0f29629bda5413d352689bd443b96c35482",
"0x23cc435af5edae8b86471f10ee6dbaf3b09bdf5ad886645599d6f9eef2a336c0",
"0xd6b3d492c32b764c72e15a059cc3a8500b404aa4bf440a289d2059142f3369d8",
"0xc54c4950ad71de4c4f09275a18560eaa9aedf5ef0f0773062a06e3a5e2ad669e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

