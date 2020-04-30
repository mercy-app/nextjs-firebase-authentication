import * as TypeGraphQL from "type-graphql";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyDataInput } from "../inputs/AddressUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => AddressScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: AddressScalarWhereInput;

  @TypeGraphQL.Field(_type => AddressUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: AddressUpdateManyDataInput;
}
