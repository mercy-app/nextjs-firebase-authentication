import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateInput } from "../../../inputs/ProductsOnCounponCreateInput";
import { ProductsOnCounponUpdateInput } from "../../../inputs/ProductsOnCounponUpdateInput";
import { ProductsOnCounponWhereUniqueInput } from "../../../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, { nullable: false })
  where!: ProductsOnCounponWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponCreateInput, { nullable: false })
  create!: ProductsOnCounponCreateInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateInput, { nullable: false })
  update!: ProductsOnCounponUpdateInput;
}
