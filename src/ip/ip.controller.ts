import { Body, Controller, Get, Post } from '@nestjs/common';
import { IpService } from './ip.service';

@Controller('services')
export class IpController {
  constructor(private readonly ipService: IpService) {}

  @Get('ip')
  findAll() {
    return this.ipService.findAll();
  }

  @Post('notion')
  createDatabase(@Body() body: any) {
    return this.ipService.createDatabase(body);
  }

  @Post('email')
  sendEmail(@Body() body: any) {
    return this.ipService.sendEmail(body);
  }
}
