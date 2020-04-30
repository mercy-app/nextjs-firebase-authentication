import * as TypeGraphQL from "type-graphql";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyFilter {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CompanyWhereInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CompanyWhereInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CompanyWhereInput | null;
}
