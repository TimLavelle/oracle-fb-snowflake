create or replace table transactions (
    retailStoreID string,
    workStationID string,
    sequenceNumber string,
    businessDayDate date,
    beginDateTime DATETIME,
    endDateTime DATETIME,
    operatorID string,
    currencyCode string,
    transactionID string,
    paymentmethod string,
    cardType string,
    hashedCard string,
    expirationDate string
)