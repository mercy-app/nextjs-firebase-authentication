import * as TypeGraphQL from "type-graphql";
import { PlatformCreateWithoutCompanyInput } from "../inputs/PlatformCreateWithoutCompanyInput";
import { PlatformUpdateWithoutCompanyDataInput } from "../inputs/PlatformUpdateWithoutCompanyDataInput";
import { PlatformUpsertWithoutCompanyInput } from "../inputs/PlatformUpsertWithoutCompanyInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateOneRequiredWithoutCompanyInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  create?: PlatformCreateWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PlatformWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutCompanyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PlatformUpdateWithoutCompanyDataInput | null;

  @TypeGraphQL.Field(_type => PlatformUpsertWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PlatformUpsertWithoutCompanyInput | null;
}
