import * as TypeGraphQL from "type-graphql";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyDataInput } from "../inputs/CustomerUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CustomerScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CustomerScalarWhereInput;

  @TypeGraphQL.Field(_type => CustomerUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CustomerUpdateManyDataInput;
}
