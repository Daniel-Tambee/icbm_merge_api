import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'frappe-schema/generated/prisma/frappe';

@Injectable()
export class FrappePrismaService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super({
      datasourceUrl:
        'mysql://_d8e7a160b7badfc3:6Gjfb2oKPK0OMwNO@localhost:3306/_d8e7a160b7badfc3',
    });
  }
}
