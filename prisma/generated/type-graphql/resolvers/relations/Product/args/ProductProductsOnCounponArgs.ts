import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponOrderByInput } from "../../../inputs/ProductsOnCounponOrderByInput";
import { ProductsOnCounponWhereInput } from "../../../inputs/ProductsOnCounponWhereInput";
import { ProductsOnCounponWhereUniqueInput } from "../../../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ProductProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereInput, { nullable: true })
  where?: ProductsOnCounponWhereInput | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponOrderByInput, { nullable: true })
  orderBy?: ProductsOnCounponOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, { nullable: true })
  after?: ProductsOnCounponWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, { nullable: true })
  before?: ProductsOnCounponWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
