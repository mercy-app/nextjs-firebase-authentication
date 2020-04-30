import * as TypeGraphQL from "type-graphql";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCardArgs {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;
}
