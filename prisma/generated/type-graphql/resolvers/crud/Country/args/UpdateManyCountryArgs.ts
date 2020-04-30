import * as TypeGraphQL from "type-graphql";
import { CountryUpdateManyMutationInput } from "../../../inputs/CountryUpdateManyMutationInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCountryArgs {
  @TypeGraphQL.Field(_type => CountryUpdateManyMutationInput, { nullable: false })
  data!: CountryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, { nullable: true })
  where?: CountryWhereInput | null;
}
