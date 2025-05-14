import { Module } from '@nestjs/common';
import { IpModule } from './ip/ip.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [IpModule, ConfigModule.forRoot({ envFilePath: '.env' })],
})
export class AppModule {}
