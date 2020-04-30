import * as TypeGraphQL from "type-graphql";
import { CompanyIdUserIdCompoundUniqueInput } from "../inputs/CompanyIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerWhereUniqueInput {
  @TypeGraphQL.Field(_type => CompanyIdUserIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  companyId_userId?: CompanyIdUserIdCompoundUniqueInput | null;
}
