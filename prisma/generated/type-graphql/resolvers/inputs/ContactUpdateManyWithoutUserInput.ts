import * as TypeGraphQL from "type-graphql";
import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactScalarWhereInput } from "../inputs/ContactScalarWhereInput";
import { ContactUpdateManyWithWhereNestedInput } from "../inputs/ContactUpdateManyWithWhereNestedInput";
import { ContactUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ContactUpdateWithWhereUniqueWithoutUserInput";
import { ContactUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ContactUpsertWithWhereUniqueWithoutUserInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ContactCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: ContactCreateWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ContactWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ContactWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ContactWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ContactWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [ContactUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: ContactUpdateWithWhereUniqueWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [ContactUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ContactUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ContactScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ContactUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ContactUpsertWithWhereUniqueWithoutUserInput[] | null;
}
