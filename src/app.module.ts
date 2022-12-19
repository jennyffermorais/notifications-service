import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';

// acopla vários controllers e vários services
// podemos ter vários modules
// um module pode importar outro

@Module({
  imports: [],
  controllers: [AppController], // controllers
  providers: [PrismaService], // services
})
export class AppModule {}
