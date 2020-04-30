import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutPlatformInput } from "../inputs/CategoryCreateWithoutPlatformInput";
import { CategoryUpdateWithoutPlatformDataInput } from "../inputs/CategoryUpdateWithoutPlatformDataInput";
import { CategoryUpsertWithoutPlatformInput } from "../inputs/CategoryUpsertWithoutPlatformInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateOneRequiredWithoutPlatformInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutPlatformInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPlatformDataInput, {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithoutPlatformDataInput | null;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithoutPlatformInput | null;
}
