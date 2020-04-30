import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingUpdaterecurringInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  set?: string[] | null;
}
