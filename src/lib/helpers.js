export const formatNumber = (num) => {
  if (num >= 1000) {
    // This converts large numbers to k format
    let formatted = (num / 1000).toFixed(1);  // Keep one decimal place
    if (formatted.endsWith('.0')) {
      formatted = formatted.slice(0, -2);  // Remove `.0` for whole numbers
    }
    return formatted + 'k';
  }
  return num.toString();  // Return the number as a string if it's below 1000
};

