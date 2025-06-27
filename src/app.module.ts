import { Module } from '@nestjs/common';

import { DataLayerModule } from './data_layer/data_layer.module';
import { PaystackModule } from './paystack/paystack.module';
import { CounselorLlmModule } from './counselor-llm/counselor-llm.module';
import { OdooLogicModule } from './odoo-logic/odoo-logic.module';
import { FrappeLogicModule } from './frappe-logic/frappe-logic.module';

@Module({
  imports: [DataLayerModule, PaystackModule, CounselorLlmModule, OdooLogicModule, FrappeLogicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
