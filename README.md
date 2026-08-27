# Vantage — investor overview mini project

Пълен, стартируем Angular workspace — не само source файлове. Структурата и
стиловете са готови. Логиката е оставена нарочно за теб — точно местата,
отбелязани с `TODO`, са мястото, където се случва практиката.

## Setup

```bash
npm install
npm start
```

После отвори `http://localhost:4200`.

Ако имаш локално различна версия на Angular CLI (`ng version`), може да се
наложи да коригираш версиите в `package.json` и/или builder-а в `angular.json`
(`@angular-devkit/build-angular:application`) — конфигурацията е писана на
ръка, не е генерирана през `ng new`, така че при по-нова/по-стара CLI версия
дребни несъответствия са възможни.

Router-ът вече е конфигуриран с `withComponentInputBinding()` в
`app.config.ts`, така че `input()` за `:id` параметъра в
`investor-detail.component.ts` ще се попълва автоматично — не пипаш нищо там.

Шрифтовете (Fraunces / IBM Plex Sans / IBM Plex Mono) се тглеждат през
`@import` в `styles.scss`, няма нужда от нищо допълнително в `index.html`.

## TODO списък (по файлове)

**`services/portfolio.service.ts`**
- `getInvestorById`, `getInvestmentsByInvestor`
- `getTotalInvested`, `getCurrentValue` (qty × price, сумирано)
- `getGainPercent` — `((currentPrice - purchasePrice) / purchasePrice) * 100`
- `getTopInvestor` — investor с най-голям `getTotalInvested`

**`pages/dashboard/dashboard.component.ts`**
- Chart.js bar chart в `chartCanvas`, стойност = `getTotalInvested` за всеки investor
- `onInvestorSelected` → navigate към `/investor/:id`
- В темплейта: свържи spotlight картата и всяка `investor-card__amount` с реалните суми

**`pages/investor-detail/investor-detail.component.ts`**
- Resolve-ни investor + investments по `id()` (computed signals препоръчително)
- В темплейта: `@for` над инвестициите вместо статичния example ред,
  плюс превключване на `badge--positive` / `badge--negative` според знака на % печалба

## По-нататък: реални цени

Когато решиш да смениш mock цените с Twelve Data — единственият файл, който
трябва да пипнеш, е `portfolio.service.ts`. Замени `currentPrice` четенето с
HTTP заявка по тикер (`httpResource()` пасва добре тук), методите навън
(`getCurrentValue`, `getGainPercent` и т.н.) остават същите — компонентите
изобщо няма да усетят разликата.
