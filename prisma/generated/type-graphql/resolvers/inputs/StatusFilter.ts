import * as TypeGraphQL from "type-graphql";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StatusFilter {
  @TypeGraphQL.Field(_type => Status, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof Status | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof Status | null;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof Status> | null;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof Status> | null;
}
