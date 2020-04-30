import * as TypeGraphQL from "type-graphql";
import { CardCreateInput } from "../../../inputs/CardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCardArgs {
  @TypeGraphQL.Field(_type => CardCreateInput, { nullable: false })
  data!: CardCreateInput;
}
