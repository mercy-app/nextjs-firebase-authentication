import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsUpdateManyMutationInput } from "../../../inputs/TagsOnProductsUpdateManyMutationInput";
import { TagsOnProductsWhereInput } from "../../../inputs/TagsOnProductsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagsOnProductsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsUpdateManyMutationInput, { nullable: false })
  data!: TagsOnProductsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagsOnProductsWhereInput, { nullable: true })
  where?: TagsOnProductsWhereInput | null;
}
