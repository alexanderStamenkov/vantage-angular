export interface Investor {
  id: number;
  name: string;
  avatarInitials: string;
}

export interface Investment {
  id: number;
  investorId: number;
  assetName: string;
  ticker: string;
  quantity: number;
  purchaseDate: string; // ISO date string, e.g. '2024-02-01'
  purchasePrice: number; // price per unit at time of purchase
  currentPrice: number; // current price per unit (mocked for now, later from Twelve Data)
}

/**
 * Derived view-model used by the UI once you've calculated the numbers.
 * Feel free to adjust the shape to whatever your components end up needing.
 */
export interface InvestmentPerformance extends Investment {
  investedAmount: number;
  currentValue: number;
  gainPercent: number;
}
