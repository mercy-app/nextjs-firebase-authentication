import * as TypeGraphQL from "type-graphql";
import { AddressOrderByInput } from "../../../inputs/AddressOrderByInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, { nullable: true })
  where?: AddressWhereInput | null;

  @TypeGraphQL.Field(_type => AddressOrderByInput, { nullable: true })
  orderBy?: AddressOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, { nullable: true })
  after?: AddressWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, { nullable: true })
  before?: AddressWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
