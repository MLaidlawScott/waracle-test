import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@waracle-test/prisma-client';
import { ServeStaticModule } from '@nestjs/serve-static'; // <- INSERT LINE
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesModule } from '../modules/cakes/cakes.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'cakes-web'),
      exclude: ['/api'],
    }),
    CakesModule,
    PrismaClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
