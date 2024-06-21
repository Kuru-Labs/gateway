export const OrderStatus = {
  CANCELLED: 0,
  FILLED: 1,
  OPEN: 2,
};

export const OrderSide: any = {
  BUY: 0,
  SELL: 1,
};

export const OrderType = {
  MARKET: 0,
  LIMIT: 1,
  STOP: 2, // not used
  STOPLIMIT: 3, // not used
};

export const TimeInForce = {
  GTC: 0, // Good Till Cancel,
  FOK: 1, // Fill or Kill - requires immediate full fill or reverts
  IOC: 2, // Immediate or Cancel - gets any fills & then canceled Remaining will not go in the orderbook
  PO: 3, // Post Only - Requires to go in the orderbook without any fills or reverts
};

export const MarginAccount = '0x68B1D87F95878fE05B998F19b66F4baba5De1aed';

export const Markets = {
  'SOL-USDC': '0xfaEB4d8AFCc9a10f54ED00c0c9a9E5EEe235104d',
  'BTC-USDC': '',
};

export const Assets = {
  SOL: {
    address: '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e',
    decimals: 18,
  },
  USDC: {
    address: '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0',
    decimals: 18,
  },
  ETH: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimals: 18,
  },
};
