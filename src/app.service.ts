import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'My first Nest deployment is succesfull second time! :)';
  }
}
