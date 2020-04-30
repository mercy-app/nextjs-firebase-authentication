import * as TypeGraphQL from "type-graphql";
import { CompanyWhereUniqueInput } from "../../../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, { nullable: false })
  where!: CompanyWhereUniqueInput;
}
