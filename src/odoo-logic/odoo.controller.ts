import { Controller } from '@nestjs/common';
import { OdooLogicService } from './odoo-logic.service';

@Controller('odoo')
export class OdooController {
    /**
     *
     */
    constructor(private readonly service:OdooLogicService) {
        
    }


    
}
