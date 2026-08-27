import { Investment, Investor } from '../models/investment.model';

export const MOCK_INVESTORS: Investor[] = [
  { id: 1, name: 'Elena Petrova', avatarInitials: 'EP' },
  { id: 2, name: 'Georgi Ivanov', avatarInitials: 'GI' },
  { id: 3, name: 'Mila Dimitrova', avatarInitials: 'MD' },
  { id: 4, name: 'Nikolay Stoyanov', avatarInitials: 'NS' },
  { id: 5, name: 'Yana Todorova', avatarInitials: 'YT' },
];

export const MOCK_INVESTMENTS: Investment[] = [
  // Elena Petrova
  { id: 1, investorId: 1, assetName: 'Apple Inc.', ticker: 'AAPL', quantity: 10, purchaseDate: '2023-11-14', purchasePrice: 178.50, currentPrice: 227.80 },
  { id: 2, investorId: 1, assetName: 'Vanguard S&P 500 ETF', ticker: 'VOO', quantity: 5, purchaseDate: '2024-02-01', purchasePrice: 430.00, currentPrice: 512.40 },
  { id: 3, investorId: 1, assetName: 'Tesla Inc.', ticker: 'TSLA', quantity: 8, purchaseDate: '2024-06-10', purchasePrice: 185.20, currentPrice: 142.30 },

  // Georgi Ivanov
  { id: 4, investorId: 2, assetName: 'Microsoft Corp.', ticker: 'MSFT', quantity: 12, purchaseDate: '2023-08-22', purchasePrice: 320.10, currentPrice: 415.60 },
  { id: 5, investorId: 2, assetName: 'NVIDIA Corp.', ticker: 'NVDA', quantity: 6, purchaseDate: '2024-01-15', purchasePrice: 550.00, currentPrice: 890.50 },
  { id: 6, investorId: 2, assetName: 'Invesco QQQ Trust', ticker: 'QQQ', quantity: 4, purchaseDate: '2024-09-05', purchasePrice: 480.00, currentPrice: 465.20 },

  // Mila Dimitrova
  { id: 7, investorId: 3, assetName: 'SPDR S&P 500 ETF', ticker: 'SPY', quantity: 15, purchaseDate: '2023-05-10', purchasePrice: 415.00, currentPrice: 560.30 },
  { id: 8, investorId: 3, assetName: 'Amazon.com Inc.', ticker: 'AMZN', quantity: 9, purchaseDate: '2024-03-18', purchasePrice: 175.40, currentPrice: 198.70 },
  { id: 9, investorId: 3, assetName: 'Alphabet Inc.', ticker: 'GOOGL', quantity: 7, purchaseDate: '2024-07-01', purchasePrice: 165.00, currentPrice: 172.90 },

  // Nikolay Stoyanov
  { id: 10, investorId: 4, assetName: 'Vanguard Total Stock Market ETF', ticker: 'VTI', quantity: 20, purchaseDate: '2023-02-20', purchasePrice: 210.00, currentPrice: 285.60 },
  { id: 11, investorId: 4, assetName: 'Tesla Inc.', ticker: 'TSLA', quantity: 5, purchaseDate: '2023-12-01', purchasePrice: 245.00, currentPrice: 142.30 },
  { id: 12, investorId: 4, assetName: 'Apple Inc.', ticker: 'AAPL', quantity: 6, purchaseDate: '2024-04-11', purchasePrice: 170.20, currentPrice: 227.80 },

  // Yana Todorova
  { id: 13, investorId: 5, assetName: 'NVIDIA Corp.', ticker: 'NVDA', quantity: 3, purchaseDate: '2024-10-02', purchasePrice: 900.00, currentPrice: 890.50 },
  { id: 14, investorId: 5, assetName: 'Microsoft Corp.', ticker: 'MSFT', quantity: 8, purchaseDate: '2023-09-14', purchasePrice: 330.50, currentPrice: 415.60 },
  { id: 15, investorId: 5, assetName: 'Vanguard S&P 500 ETF', ticker: 'VOO', quantity: 10, purchaseDate: '2024-05-20', purchasePrice: 460.00, currentPrice: 512.40 },
];
