import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsUpdateManyMutationInput } from "../../../inputs/CategoriesOnProductsUpdateManyMutationInput";
import { CategoriesOnProductsWhereInput } from "../../../inputs/CategoriesOnProductsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateManyMutationInput, { nullable: false })
  data!: CategoriesOnProductsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereInput, { nullable: true })
  where?: CategoriesOnProductsWhereInput | null;
}
