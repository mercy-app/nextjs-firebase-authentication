import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponCreateInput } from "../../../inputs/ProductsOnCounponCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponCreateInput, { nullable: false })
  data!: ProductsOnCounponCreateInput;
}
