import * as TypeGraphQL from "type-graphql";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, { nullable: true })
  where?: CountryWhereInput | null;
}
