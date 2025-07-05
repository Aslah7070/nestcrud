import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello hello';
  }
  getData(): string {
    return 'Hello my dataa';
  }
}
