import * as TypeGraphQL from "type-graphql";

export enum PlatformType {
  ECOMMERCE = "ECOMMERCE",
  BOOKING_HR = "BOOKING_HR",
  BOOKING_DATE = "BOOKING_DATE"
}
TypeGraphQL.registerEnumType(PlatformType, {
  name: "PlatformType",
  description: undefined,
});
