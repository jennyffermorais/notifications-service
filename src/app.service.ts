import { Injectable } from '@nestjs/common';

// tudo oq não for relacionado a definição de rotas fica aqui

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
