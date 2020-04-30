import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponUpdateManyMutationInput } from "../../../inputs/ProductsOnCounponUpdateManyMutationInput";
import { ProductsOnCounponWhereInput } from "../../../inputs/ProductsOnCounponWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponUpdateManyMutationInput, { nullable: false })
  data!: ProductsOnCounponUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProductsOnCounponWhereInput, { nullable: true })
  where?: ProductsOnCounponWhereInput | null;
}
