import * as TypeGraphQL from "type-graphql";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressUpdateWithoutCompanyDataInput } from "../inputs/AddressUpdateWithoutCompanyDataInput";
import { AddressUpsertWithoutCompanyInput } from "../inputs/AddressUpsertWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressUpdateOneRequiredWithoutCompanyInput {
  @TypeGraphQL.Field(_type => AddressCreateWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  create?: AddressCreateWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AddressWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCompanyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: AddressUpdateWithoutCompanyDataInput | null;

  @TypeGraphQL.Field(_type => AddressUpsertWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: AddressUpsertWithoutCompanyInput | null;
}
