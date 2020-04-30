import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutRoomInput } from "../inputs/ProductCreateWithoutRoomInput";
import { ProductUpdateWithoutRoomDataInput } from "../inputs/ProductUpdateWithoutRoomDataInput";
import { ProductUpsertWithoutRoomInput } from "../inputs/ProductUpsertWithoutRoomInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutRoomInput {
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

  @TypeGraphQL.Field(_type => ProductUpdateWithoutRoomDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutRoomDataInput | null;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutRoomInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutRoomInput | null;
}
