import { Module } from '@nestjs/common';
import { CounselorLlmClientService } from './counselor-llm-client.service';

@Module({
  providers: [CounselorLlmClientService]
})
export class CounselorLlmModule {}
