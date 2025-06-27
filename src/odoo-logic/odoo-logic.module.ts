import { Module } from '@nestjs/common';
import { OdooLogicService } from './odoo-logic.service';
import { OdooController } from './odoo.controller';

@Module({
  providers: [OdooLogicService],
  controllers: [OdooController]
})
export class OdooLogicModule {}
