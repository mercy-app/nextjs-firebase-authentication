import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutRoomInput } from "../inputs/ProductCreateWithoutRoomInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutRoomInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutRoomInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutRoomInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | null;
}
