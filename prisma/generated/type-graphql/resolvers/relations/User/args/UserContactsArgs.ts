import * as TypeGraphQL from "type-graphql";
import { ContactOrderByInput } from "../../../inputs/ContactOrderByInput";
import { ContactWhereInput } from "../../../inputs/ContactWhereInput";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserContactsArgs {
  @TypeGraphQL.Field(_type => ContactWhereInput, { nullable: true })
  where?: ContactWhereInput | null;

  @TypeGraphQL.Field(_type => ContactOrderByInput, { nullable: true })
  orderBy?: ContactOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: true })
  after?: ContactWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: true })
  before?: ContactWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
