import * as TypeGraphQL from "type-graphql";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerFilter {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CustomerWhereInput | null;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CustomerWhereInput | null;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CustomerWhereInput | null;
}
