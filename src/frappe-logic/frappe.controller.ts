import { Controller, Get } from '@nestjs/common';
import { FrappeLogicService } from './frappe-logic.service';
import { tabLMS_Course } from 'frappe-schema/generated/prisma/frappe';

@Controller('frappe')
export class FrappeController {
  /**
   *
   */
  constructor(private readonly logic: FrappeLogicService) {}

  @Get('courses')
  getCourses(): Promise<tabLMS_Course[]> {
    return this.logic.getCourses();
  }
}
