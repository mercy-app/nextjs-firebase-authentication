import * as TypeGraphQL from "type-graphql";
import { CustomerCreateWithoutUserInput } from "../inputs/CustomerCreateWithoutUserInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereNestedInput } from "../inputs/CustomerUpdateManyWithWhereNestedInput";
import { CustomerUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutUserInput";
import { CustomerUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutUserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: CustomerCreateWithoutUserInput[] | null;

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

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: CustomerUpdateWithWhereUniqueWithoutUserInput[] | null;

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

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput[] | null;
}
