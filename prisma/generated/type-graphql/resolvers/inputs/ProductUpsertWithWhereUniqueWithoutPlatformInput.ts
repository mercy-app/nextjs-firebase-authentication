import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutPlatformInput } from "../inputs/ProductCreateWithoutPlatformInput";
import { ProductUpdateWithoutPlatformDataInput } from "../inputs/ProductUpdateWithoutPlatformDataInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutPlatformDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPlatformInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutPlatformInput;
}
