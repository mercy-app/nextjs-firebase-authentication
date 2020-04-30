import * as TypeGraphQL from "type-graphql";
import { AddressUpdateWithoutUserDataInput } from "../inputs/AddressUpdateWithoutUserDataInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: AddressUpdateWithoutUserDataInput;
}
