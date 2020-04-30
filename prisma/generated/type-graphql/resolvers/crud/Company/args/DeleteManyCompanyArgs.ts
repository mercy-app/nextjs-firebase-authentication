import * as TypeGraphQL from "type-graphql";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyWhereInput, { nullable: true })
  where?: CompanyWhereInput | null;
}
