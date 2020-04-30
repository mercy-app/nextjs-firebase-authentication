import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutOrderInput } from "../inputs/CompanyCreateWithoutOrderInput";
import { CompanyUpdateWithoutOrderDataInput } from "../inputs/CompanyUpdateWithoutOrderDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpsertWithoutOrderInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutOrderDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CompanyUpdateWithoutOrderDataInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput, {
    nullable: false,
    description: undefined
  })
  create!: CompanyCreateWithoutOrderInput;
}
