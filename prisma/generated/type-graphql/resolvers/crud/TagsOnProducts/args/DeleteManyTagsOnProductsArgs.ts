import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsWhereInput } from "../../../inputs/TagsOnProductsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTagsOnProductsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereInput, { nullable: true })
  where?: TagsOnProductsWhereInput | null;
}
