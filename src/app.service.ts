import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Viet Duc! Long time no see. Try your best!!!';
  }
}
