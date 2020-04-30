import * as TypeGraphQL from "type-graphql";
import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactCreateManyWithoutUserInput {
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
}
