import { Injectable } from '@nestjs/common';
import { Decimal } from 'frappe-schema/generated/prisma/frappe/runtime/index-browser';
import { FrappePrismaService } from 'src/data_layer/frappe-prisma.service';

@Injectable()
export class FrappeLogicService {
  /**
   *
   */
  constructor(private readonly db: FrappePrismaService) {}

  async getCourses(): Promise<
    {
      name: string;
      creation: Date | null;
      modified: Date | null;
      modified_by: string | null;
      owner: string | null;
      docstatus: number;
      idx: number;
      title: string | null;
      video_link: string | null;
      tags: string | null;
      image: string | null;
      category: string | null;
      status: string | null;
      published: number;
      published_on: Date | null;
      upcoming: number;
      featured: number;
      disable_self_learning: number;
      short_introduction: string | null;
      description: string | null;
      paid_course: number;
      enable_certification: number;
      paid_certificate: number;
      evaluator: string | null;
      course_price: Decimal;
      currency: string | null;
      amount_usd: Decimal;
      enrollments: number;
      lessons: number;
      rating: string | null;
      user_tags: string | null;
      comments: string | null;
      assign: string | null;
      liked_by: string | null;
    }[]
  > {
    try {
      return await this.db.tabLMS_Course.findMany();
    } catch (error) {
      console.log(error);
    }
  }
}
