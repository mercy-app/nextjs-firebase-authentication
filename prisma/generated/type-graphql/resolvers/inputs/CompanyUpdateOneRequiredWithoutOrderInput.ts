import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutOrderInput } from "../inputs/CompanyCreateWithoutOrderInput";
import { CompanyUpdateWithoutOrderDataInput } from "../inputs/CompanyUpdateWithoutOrderDataInput";
import { CompanyUpsertWithoutOrderInput } from "../inputs/CompanyUpsertWithoutOrderInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateOneRequiredWithoutOrderInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput, {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutOrderInput | null;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutOrderDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CompanyUpdateWithoutOrderDataInput | null;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutOrderInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CompanyUpsertWithoutOrderInput | null;
}
