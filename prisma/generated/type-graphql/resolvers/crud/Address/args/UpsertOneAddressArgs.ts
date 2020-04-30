import * as TypeGraphQL from "type-graphql";
import { AddressCreateInput } from "../../../inputs/AddressCreateInput";
import { AddressUpdateInput } from "../../../inputs/AddressUpdateInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, { nullable: false })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressCreateInput, { nullable: false })
  create!: AddressCreateInput;

  @TypeGraphQL.Field(_type => AddressUpdateInput, { nullable: false })
  update!: AddressUpdateInput;
}
