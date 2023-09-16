export const enum ServiceStates {
  // The service has been schedule for apply the service
  SCHEDULE = "SCHEDULE",
  // The service is pending of schedule for apply the service
  UNSCHEDULED = "UNSCHEDULED",
  // The client cancel the applying of recurring service
  INACTIVE = "INACTIVE",
  // The service is pending of pay by the client
  PENDING_PAY = "PENDING_PAY",
}