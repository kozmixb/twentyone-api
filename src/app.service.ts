import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome() {
    return '{"service":"TwentyOne-api"}';
  }
}
