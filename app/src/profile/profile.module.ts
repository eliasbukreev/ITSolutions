import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver.js';
import { ProfileService } from './profile.service.js';

@Module({
  providers: [ProfileService, ProfileResolver],
  exports: [ProfileService],
})
export class ProfileModule { }
