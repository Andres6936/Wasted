export const enum QuoteStates {
  // The client has pending upload the obligatory documents to plataform
  PENDING_DOCUMENTS = "PENDING_DOCUMENTS",
  // The quote has pending the review of documents by an operator
  PENDING_REVIEW = "PENDING_REVIEW",
  // The client has pending make the pay for the first service schedule
  PENDING_PAY = "PENDING_PAY",
  // The operator reject the documents upload by the client
  REJECT_BY_DOCUMENTS = "REJECT_BY_DOCUMENTS",
  // The pay of first service schedule is made by the client
  PAY_ACCEPTED = "PAY_ACCEPTED",
}