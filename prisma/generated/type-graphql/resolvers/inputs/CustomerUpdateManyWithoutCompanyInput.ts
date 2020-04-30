import * as TypeGraphQL from "type-graphql";
import { CustomerCreateWithoutCompanyInput } from "../inputs/CustomerCreateWithoutCompanyInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereNestedInput } from "../inputs/CustomerUpdateManyWithWhereNestedInput";
import { CustomerUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutCompanyInput";
import { CustomerUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutCompanyInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: CustomerCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CustomerWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CustomerWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CustomerWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CustomerWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CustomerUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CustomerScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput[] | null;
}
