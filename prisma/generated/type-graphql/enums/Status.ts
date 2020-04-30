import * as TypeGraphQL from "type-graphql";

export enum Status {
  PENDING = "PENDING",
  PAID = "PAID",
  COMPLETED = "COMPLETED"
}
TypeGraphQL.registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
