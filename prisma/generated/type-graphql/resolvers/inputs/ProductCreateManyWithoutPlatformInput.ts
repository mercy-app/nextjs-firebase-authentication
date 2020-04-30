import * as TypeGraphQL from "type-graphql";
import { ProductCreateWithoutPlatformInput } from "../inputs/ProductCreateWithoutPlatformInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput[] | null;
}
