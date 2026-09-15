import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Skill } from './skill.model.js';
import { Experience } from './experience.model.js';
import { Project } from './project.model.js';

@ObjectType({ description: 'Мой профиль' })
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String], { description: 'Мои ссылки' })
  links: string[];

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
