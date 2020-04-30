import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateInput } from "../../../inputs/CompanyUpdateInput";
import { CompanyWhereUniqueInput } from "../../../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyUpdateInput, { nullable: false })
  data!: CompanyUpdateInput;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, { nullable: false })
  where!: CompanyWhereUniqueInput;
}
