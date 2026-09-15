import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Мои проекты' })
export class Project {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ description: 'url' })
  url: string;
}
