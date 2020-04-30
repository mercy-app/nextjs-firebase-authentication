import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponWhereInput } from "../../../inputs/ProductsOnCounponWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereInput, { nullable: true })
  where?: ProductsOnCounponWhereInput | null;
}
