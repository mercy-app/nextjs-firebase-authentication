import * as TypeGraphQL from "type-graphql";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: AddressCreateWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: AddressWhereUniqueInput[] | null;
}
