import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponUpdateInput } from "../../../inputs/ProductsOnCounponUpdateInput";
import { ProductsOnCounponWhereUniqueInput } from "../../../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateInput, { nullable: false })
  data!: ProductsOnCounponUpdateInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, { nullable: false })
  where!: ProductsOnCounponWhereUniqueInput;
}
