import * as TypeGraphQL from "type-graphql";
import { TagUpdateManyMutationInput } from "../../../inputs/TagUpdateManyMutationInput";
import { TagWhereInput } from "../../../inputs/TagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagArgs {
  @TypeGraphQL.Field(_type => TagUpdateManyMutationInput, { nullable: false })
  data!: TagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagWhereInput, { nullable: true })
  where?: TagWhereInput | null;
}
