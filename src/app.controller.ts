import { Controller, Get, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/about')
  @Render('about')
  getAboutPage(@Query('auth') auth: string) {
    return {
      loggedIn: auth === 'true',
      pageTitle: 'О нашей компании',
    };
  }

  @Get('/contacts')
  @Render('contacts')
  getContactsPage(@Query('auth') auth: string) {
    return {
      loggedIn: auth === 'true',
      contacts: this.appService.getContacts(),
    };
  }

  @Post('login')
  @Render('partials/message')
  login() {
    return {
      success: true,
      message: 'Вход выполнен успешно!',
    };
  }

  @Get('*')
  @Render('index')
  getIndexPage(@Query('auth') auth: string) {
    const isAuthenticated = auth === 'true';
    return {
      loggedIn: isAuthenticated,
      username: isAuthenticated ? 'Vadim' : null,
    };
  }
}
