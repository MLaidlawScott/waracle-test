import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@waracle-test/prisma-client';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesModule } from '../modules/cakes/cakes.module';

@Module({
  imports: [CakesModule, PrismaClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
