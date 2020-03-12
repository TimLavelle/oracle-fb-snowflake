create or replace table transaction_line_items (
    transactionID string,
    sequenceNumber string,
    itemID string,
    sku string,
    merchandiseHierarchy string,
    description string,
    regularSalesUnitPrice string,
    ActualSalesUnitPrice string,
    extendedAmount string,
    extendedDiscountAmount string,
    quanity string,
    taxAmount string,
    taxPercent string,
    taxReason string,
    taxRule string
)