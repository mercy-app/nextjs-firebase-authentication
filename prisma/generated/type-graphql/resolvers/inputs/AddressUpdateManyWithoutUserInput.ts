import * as TypeGraphQL from "type-graphql";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereNestedInput } from "../inputs/AddressUpdateManyWithWhereNestedInput";
import { AddressUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutUserInput";
import { AddressUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AddressUpsertWithWhereUniqueWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: AddressCreateWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: AddressWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: AddressWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: AddressWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: AddressWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: AddressUpdateWithWhereUniqueWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: AddressUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: AddressScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [AddressUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: AddressUpsertWithWhereUniqueWithoutUserInput[] | null;
}
