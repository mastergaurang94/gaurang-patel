
// @dev memes order matters, add new memes to front of queue
// @dev links order here determines display UI
const memecoins = [
    {
        id: 2,
        name: 'Normie',
        ticker: 'NORMIE',
        date: '2024-06-18',
        description: 'This is a description for NORMIE.',
        imageUrl: '/memecoins/normie.gif',
        links: {
            contractAddress: 'https://etherscan.io/address/0x1234567890abcdef',
            dexscreenerUrl: 'https://dexscreener.com/0x1234567890abcdef',
            pumpFunUrl: 'https://pump.fun/abc123',
        },
    },
    {
        id: 1,
        name: 'Dekh Raha Hai Binod',
        ticker: 'BINOD',
        date: '2024-06-17',
        description: 'This is a description for BINOD.',
        imageUrl: '/memecoins/binod.jpeg',
        links: {
            contractAddress: 'https://etherscan.io/address/0xabcdef1234567890',
            dexscreenerUrl: 'https://dexscreener.com/0xabcdef1234567890',
        },
    }
];

export default memecoins;
