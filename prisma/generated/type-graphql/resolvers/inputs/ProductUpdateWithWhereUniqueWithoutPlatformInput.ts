import * as TypeGraphQL from "type-graphql";
import { ProductUpdateWithoutPlatformDataInput } from "../inputs/ProductUpdateWithoutPlatformDataInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutPlatformDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ProductUpdateWithoutPlatformDataInput;
}
