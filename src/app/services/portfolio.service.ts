import { Injectable, signal } from "@angular/core";
import { Investment, Investor } from "../models/investment.model";
import { MOCK_INVESTMENTS, MOCK_INVESTORS } from "../data/mock-investors";

@Injectable({ providedIn: "root" })
export class PortfolioService {
  readonly investors = signal<Investor[]>(MOCK_INVESTORS);
  readonly investments = signal<Investment[]>(MOCK_INVESTMENTS);

  getInvestorById(id: number): Investor | undefined {
    return this.investors().find((investor) => investor.id === id);
  }

  getInvestmentsByInvestor(investorId: number): Investment[] {
    return this.investments().filter(
      (investment) => investment.investorId === investorId,
    );
  }

  getTotalInvested(investorId: number): number {
    return this.getInvestmentsByInvestor(investorId).reduce(
      (total, investment) =>
        total + investment.quantity * investment.purchasePrice,
      0,
    );
  }

  getCurrentValue(investorId: number): number {
    return this.getInvestmentsByInvestor(investorId).reduce(
      (total, investment) =>
        total + investment.quantity * investment.currentPrice,
      0,
    );
  }

  getGainPercent(investment: Investment): number {
    return (
      ((investment.currentPrice - investment.purchasePrice) /
        investment.purchasePrice) *
      100
    );
  }

  getTopInvestor(): Investor | undefined {
    return this.investors().reduce<Investor | undefined>((top, investor) => {
      if (!top) {
        return investor;
      }
      return this.getTotalInvested(investor.id) > this.getTotalInvested(top.id)
        ? investor
        : top;
    }, undefined);
  }
}
