import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Профессиональные навыки' })
export class Skill {
  @Field(() => ID)
  id: string;

  @Field({ description: 'Имя навыка' })
  name: string;
}
