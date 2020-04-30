import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounponWhereUniqueInput } from "../../../inputs/ProductsOnCounponWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProductsOnCounponArgs {
  @TypeGraphQL.Field(_type => ProductsOnCounponWhereUniqueInput, { nullable: false })
  where!: ProductsOnCounponWhereUniqueInput;
}
