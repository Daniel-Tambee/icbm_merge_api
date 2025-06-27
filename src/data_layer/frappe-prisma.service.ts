import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'frappe-schema/generated/prisma/frappe';

@Injectable()
export class FrappePrismaService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super();
  }
}
