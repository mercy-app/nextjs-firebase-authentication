import * as TypeGraphQL from "type-graphql";
import { CompanyWhereUniqueInput } from "../../../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, { nullable: false })
  where!: CompanyWhereUniqueInput;
}
