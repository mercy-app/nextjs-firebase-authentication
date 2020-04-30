import * as TypeGraphQL from "type-graphql";
import { BookingScalarWhereInput } from "../inputs/BookingScalarWhereInput";
import { BookingUpdateManyDataInput } from "../inputs/BookingUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class BookingUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => BookingScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: BookingScalarWhereInput;

  @TypeGraphQL.Field(_type => BookingUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: BookingUpdateManyDataInput;
}
