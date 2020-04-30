import * as TypeGraphQL from "type-graphql";
import { OrderUpdateWithoutCompanyDataInput } from "../inputs/OrderUpdateWithoutCompanyDataInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: OrderUpdateWithoutCompanyDataInput;
}
