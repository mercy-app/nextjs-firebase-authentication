import * as TypeGraphQL from "type-graphql";
import { BookingWhereInput } from "../inputs/BookingWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingFilter {
  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: BookingWhereInput | null;

  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: BookingWhereInput | null;

  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: BookingWhereInput | null;
}
