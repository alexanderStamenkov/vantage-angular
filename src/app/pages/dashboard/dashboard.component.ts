import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  viewChild,
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { PortfolioService } from "../../services/portfolio.service";
import { CurrencyPipe } from "@angular/common";
import { Chart } from "chart.js/auto";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent implements AfterViewInit {
  protected readonly portfolioService = inject(PortfolioService);
  private readonly router = inject(Router);

  // Reference to the <canvas> in the template, for Chart.js to mount on.
  private readonly chartCanvas =
    viewChild<ElementRef<HTMLCanvasElement>>("chartCanvas");

  readonly investors = this.portfolioService.investors;

  ngAfterViewInit(): void {
    const canvas = this.chartCanvas()?.nativeElement;
    if (!canvas) {
      return;
    }

    const investors = this.investors();
    const topInvestor = this.portfolioService.getTopInvestor();

    const rootStyles = getComputedStyle(document.documentElement);
    const accentColor = rootStyles.getPropertyValue("--color-accent").trim();
    const mutedColor = rootStyles
      .getPropertyValue("--color-accent-soft")
      .trim();

    new Chart(canvas, {
      type: "bar",
      data: {
        labels: investors.map((investor) => investor.name),
        datasets: [
          {
            data: investors.map((investor) =>
              this.portfolioService.getTotalInvested(investor.id),
            ),
            backgroundColor: investors.map((investor) =>
              investor.id === topInvestor?.id ? accentColor : mutedColor,
            ),
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        onClick: (event, elements) => {
          if (elements[0]) {
            const index = elements[0].index;
            const clickedInvestor = investors[index];
            this.onInvestorSelected(clickedInvestor.id);
          }
        },
      },
    });
  }

  onInvestorSelected(investorId: number): void {
    this.router.navigate(["/investor", investorId]);
  }
}
