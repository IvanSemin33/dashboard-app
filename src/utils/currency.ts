export const getCurrencySymbol = (currency: string): string => {
  switch (currency) {
    case "usd":
      return "$";
    case "eur":
      return "€";
    default:
      return "";
  }
};
