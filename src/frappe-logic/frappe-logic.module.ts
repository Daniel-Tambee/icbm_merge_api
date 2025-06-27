import { Module } from '@nestjs/common';
import { FrappeLogicService } from './frappe-logic.service';
import { FrappeController } from './frappe.controller';
import { FrappePrismaService } from 'src/data_layer/frappe-prisma.service';

@Module({
  providers: [FrappeLogicService,FrappePrismaService],
  controllers: [FrappeController]
})
export class FrappeLogicModule {}
