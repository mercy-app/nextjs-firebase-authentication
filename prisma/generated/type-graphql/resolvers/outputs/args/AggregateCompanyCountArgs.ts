import * as TypeGraphQL from "type-graphql";
import { CompanyOrderByInput } from "../../inputs/CompanyOrderByInput";
import { CompanyWhereInput } from "../../inputs/CompanyWhereInput";
import { CompanyWhereUniqueInput } from "../../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCompanyCountArgs {
  @TypeGraphQL.Field(_type => CompanyWhereInput, { nullable: true })
  where?: CompanyWhereInput | null;

  @TypeGraphQL.Field(_type => CompanyOrderByInput, { nullable: true })
  orderBy?: CompanyOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, { nullable: true })
  after?: CompanyWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, { nullable: true })
  before?: CompanyWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
