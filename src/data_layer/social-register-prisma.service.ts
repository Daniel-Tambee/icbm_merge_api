import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'social-register/generated/prisma/socialRegister';

@Injectable()
export class SocialRegisterPrismaService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super();
  }
}
