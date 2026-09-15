import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly pprofileService: ProfileService) { }

  @Query(() => Profile, {
    name: 'profile',
    description: 'Мой профиль',
  })
  profile(): Promise<Profile> {
    return this.pprofileService.getProfile();
  }
}
