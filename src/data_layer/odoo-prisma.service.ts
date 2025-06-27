import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'odoo-schema/generated/prisma/odoo';

@Injectable()
export class OdooPrismaService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super();
  }
}
