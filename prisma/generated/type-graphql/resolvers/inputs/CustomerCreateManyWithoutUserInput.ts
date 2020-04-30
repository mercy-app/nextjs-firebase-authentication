import * as TypeGraphQL from "type-graphql";
import { CustomerCreateWithoutUserInput } from "../inputs/CustomerCreateWithoutUserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: CustomerCreateWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CustomerWhereUniqueInput[] | null;
}
