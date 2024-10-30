/**
 * @function formatCurrency
 * Format currency as currency (US Dollars).
 *
 * @param {number} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 * formatCurrency(0)
 * // => $0.00
 *
 * @example
 * formatCurrency(1.5)
 * // => $1.50
 *
 */
export function formatCurrency(currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currently: 'USD',
    minimumFractionDigits: 2,
  }).format(currency);
}
