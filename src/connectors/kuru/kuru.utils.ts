import { BigNumber } from 'ethers';
import { Markets, OrderStatus } from './kuru.constants';

/**
 * @notice Get the market symbol for a given address.
 * @param address The address to find the market symbol for.
 * @returns The market symbol corresponding to the given address, or an empty string if not found.
 */
export function GetMarketIdByAddress(address: string): string {
  for (const [symbol, marketAddress] of Object.entries(Markets)) {
    if (marketAddress.toLowerCase() === address.toLowerCase()) {
      return symbol;
    }
  }
  return '';
}

/**
 * @notice Get the base token and quote token from a market symbol.
 * @param marketSymbol The market symbol in the format BASE-QUOTE.
 * @returns An object containing the base token and quote token.
 */
export function GetTokensFromMarketSymbol(marketSymbol: string): { baseToken: string; quoteToken: string } {
  const [baseToken, quoteToken] = marketSymbol.split('-');
  if (!baseToken || !quoteToken) {
    throw new Error(`Invalid market symbol format: ${marketSymbol}`);
  }
  return { baseToken, quoteToken };
}

/**
 * @notice Get the key as a string for a given number in OrderStatus.
 * @param statusNumber The number representing the order status.
 * @returns The key as a string corresponding to the status number, or an error message if not found.
 */
export function GetOrderStatusKey(statusNumber: number): string {
  const entries = Object.entries(OrderStatus);
  for (const [key, value] of entries) {
    if (value === statusNumber) {
      return key;
    }
  }
  throw new Error(`OrderStatus key not found for value: ${statusNumber}`);
}

/**
     * @dev Calculates the base-10 logarithm of a BigNumber.
     * @param bn - The BigNumber to calculate the logarithm of.
     * @returns The base-10 logarithm of the BigNumber.
     */
export function Log10BigNumber(bn: BigNumber): number {
  if (bn.isZero()) {
    throw new Error("Log10 of zero is undefined");
  }

  const bnString = bn.toString();
  return bnString.length - 1;
}
