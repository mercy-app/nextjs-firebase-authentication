import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateWithoutProductInput } from "../inputs/ProductsOnCounponCreateWithoutProductInput";
import { ProductsOnCounponWhereUniqueInput } from "../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponCreateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [ProductsOnCounponCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: ProductsOnCounponCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProductsOnCounponWhereUniqueInput[] | null;
}
