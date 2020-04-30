import * as TypeGraphQL from "type-graphql";
import { CustomerUpdateWithoutUserDataInput } from "../inputs/CustomerUpdateWithoutUserDataInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CustomerUpdateWithoutUserDataInput;
}
