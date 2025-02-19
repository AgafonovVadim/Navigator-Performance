import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getContacts() {
    return {
      phone: '+7 812 488-0-488',
      email: 'info@navigator.ru',
      address: 'Санкт-Петербург, Лахтинский пр., 83',
    };
  }
}
