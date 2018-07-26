module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        ganache: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*'
            // gas: 5712388,
            // gasPrice: 200000
            // // from: "0xf212bb926f7a831ff745e4236fc704a9947de77c"
        },
        coverage: {
            host: "localhost",
            network_id: "*",
            port: 8555,         // <-- If you change this, also set the port option in .solcover.js.
            gas: 0xfffffffffff, // <-- Use this high gas value
            gasPrice: 0x01      // <-- Use this low gas price
        },
    }
};


