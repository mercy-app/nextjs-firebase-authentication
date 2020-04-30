import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutRoomInput } from "../inputs/ProductCreateWithoutRoomInput";
import { ProductUpdateWithoutRoomDataInput } from "../inputs/ProductUpdateWithoutRoomDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutRoomInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutRoomDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutRoomDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutRoomInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutRoomInput;
}
