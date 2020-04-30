import * as TypeGraphQL from "type-graphql";
import { OrderCreateWithoutCompanyInput } from "../inputs/OrderCreateWithoutCompanyInput";
import { OrderUpdateWithoutCompanyDataInput } from "../inputs/OrderUpdateWithoutCompanyDataInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: OrderUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: OrderCreateWithoutCompanyInput;
}
