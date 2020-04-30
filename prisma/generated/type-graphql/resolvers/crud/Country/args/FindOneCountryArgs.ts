import * as TypeGraphQL from "type-graphql";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, { nullable: false })
  where!: CountryWhereUniqueInput;
}
