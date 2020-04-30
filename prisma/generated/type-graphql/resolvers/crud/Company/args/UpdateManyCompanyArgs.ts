import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateManyMutationInput } from "../../../inputs/CompanyUpdateManyMutationInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyUpdateManyMutationInput, { nullable: false })
  data!: CompanyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CompanyWhereInput, { nullable: true })
  where?: CompanyWhereInput | null;
}
