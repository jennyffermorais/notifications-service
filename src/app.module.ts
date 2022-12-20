import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

// acopla vários controllers e vários services
// podemos ter vários modules
// um module pode importar outro

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
