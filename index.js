function purchaseBook(
  bookTitle,
  bookAuthor,
  bookPrice,
  discountPercentage,
  taxPercentage
) {
  // Calculations
  const discountAmount = bookPrice * (discountPercentage / 100);
  const priceAfterDiscount = bookPrice - discountAmount;
  const taxAmount = priceAfterDiscount * (taxPercentage / 100);
  const priceAfterTax = priceAfterDiscount + taxAmount;

  // Displaying the parameters with additional data
  console.log('Book Title:', bookTitle);
  console.log('Book Author:', bookAuthor);
  console.log('Book Price:', bookPrice);
  console.log('Discount Amount:', discountAmount);
  console.log('Price After Discount:', priceAfterDiscount);
  console.log('Tax Amount:', taxAmount);
  console.log('Price After Tax:', priceAfterTax);
}

// Example usage
purchaseBook('The Great Gatsby', 'F. Scott Fitzgerald', 25.99, 10, 8);
