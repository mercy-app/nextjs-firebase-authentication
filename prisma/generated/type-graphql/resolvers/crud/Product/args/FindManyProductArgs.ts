import * as TypeGraphQL from "type-graphql";
import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, { nullable: true })
  where?: ProductWhereInput | null;

  @TypeGraphQL.Field(_type => ProductOrderByInput, { nullable: true })
  orderBy?: ProductOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, { nullable: true })
  after?: ProductWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, { nullable: true })
  before?: ProductWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
