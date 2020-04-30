import * as TypeGraphQL from "type-graphql";
import { AddressWhereInput } from "../inputs/AddressWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressFilter {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: AddressWhereInput | null;

  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: AddressWhereInput | null;

  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: AddressWhereInput | null;
}
