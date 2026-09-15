import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Profile } from './models/profile.model.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) { }

  async getProfile(): Promise<Profile> {
    const profile = await this.prisma.profile.findFirst({
      include: { skills: true, experience: true, projects: true },
      orderBy: { id: 'asc' },
    });

    if (!profile) {
      throw new NotFoundException('Профиля нет?');
    }

    return {
      ...profile,

      //Нужен мапер между null значение в Prisma и endDate?: Date в GraphQL
      experience: profile.experience.map((e) => ({
        ...e,
        endDate: e.endDate ?? undefined,
      })),
    };
  }
}
