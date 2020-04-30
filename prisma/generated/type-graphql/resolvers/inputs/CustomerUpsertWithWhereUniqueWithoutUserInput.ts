import * as TypeGraphQL from "type-graphql";
import { CustomerCreateWithoutUserInput } from "../inputs/CustomerCreateWithoutUserInput";
import { CustomerUpdateWithoutUserDataInput } from "../inputs/CustomerUpdateWithoutUserDataInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CustomerUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: CustomerCreateWithoutUserInput;
}
