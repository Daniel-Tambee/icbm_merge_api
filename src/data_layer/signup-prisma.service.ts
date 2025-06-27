import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'signup-schema/generated/prisma/signUpDb';

@Injectable()
export class SignupPrismaService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super();
  }
}
