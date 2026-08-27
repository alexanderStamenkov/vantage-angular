import { Component, computed, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PortfolioService } from "../../services/portfolio.service";
import { CurrencyPipe, DatePipe, DecimalPipe } from "@angular/common";

@Component({
  selector: "app-investor-detail",
  standalone: true,
  imports: [RouterLink, CurrencyPipe, DatePipe, DecimalPipe],
  templateUrl: "./investor-detail.component.html",
  styleUrl: "./investor-detail.component.scss",
})
export class InvestorDetailComponent {
  protected readonly portfolioService = inject(PortfolioService);

  // Requires `withComponentInputBinding()` on provideRouter in app.config.ts
  // so the ':id' route param binds straight to this input.
  readonly id = input<string>();

  readonly investor = computed(() => {
    const investorId = Number(this.id());
    return this.portfolioService.getInvestorById(investorId);
  });

  readonly investments = computed(() => {
    const investorId = Number(this.id());
    const rawInvestments =
      this.portfolioService.getInvestmentsByInvestor(investorId);

    return rawInvestments.map((investment) => ({
      ...investment,
      investedAmount: investment.quantity * investment.purchasePrice,
      currentValue: investment.quantity * investment.currentPrice,
      gainPercent: this.portfolioService.getGainPercent(investment),
    }));
  });

  readonly overallGainPercent = computed(() => {
    const investorId = Number(this.id());
    const invested = this.portfolioService.getTotalInvested(investorId);
    const current = this.portfolioService.getCurrentValue(investorId);
    if (invested === 0) {
      return 0;
    }
    return ((current - invested) / invested) * 100;
  });
}
