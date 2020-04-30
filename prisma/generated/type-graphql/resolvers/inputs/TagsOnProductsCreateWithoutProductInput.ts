import * as TypeGraphQL from "type-graphql";
import { TagCreateOneWithoutProductsInput } from "../inputs/TagCreateOneWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => TagCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  tag!: TagCreateOneWithoutProductsInput;
}
