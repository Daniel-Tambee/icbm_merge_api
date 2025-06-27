import { Module } from '@nestjs/common';
import { OdooPrismaService } from './odoo-prisma.service';
import { FrappePrismaService } from './frappe-prisma.service';
import { SocialRegisterPrismaService } from './social-register-prisma.service';
import { SignupPrismaService } from './signup-prisma.service';

@Module({
  providers: [OdooPrismaService, FrappePrismaService, SocialRegisterPrismaService, SignupPrismaService]
})
export class DataLayerModule {}
