import * as TypeGraphQL from "type-graphql";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;
}
