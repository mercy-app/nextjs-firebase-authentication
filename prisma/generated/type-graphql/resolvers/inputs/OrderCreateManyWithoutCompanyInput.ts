import * as TypeGraphQL from "type-graphql";
import { OrderCreateWithoutCompanyInput } from "../inputs/OrderCreateWithoutCompanyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderCreateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: OrderCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: OrderWhereUniqueInput[] | null;
}
