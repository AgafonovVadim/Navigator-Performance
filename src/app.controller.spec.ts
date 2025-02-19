import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getIndexPage', () => {
    it('should return unauthorized session when auth is not "true"', () => {
      const result = appController.getIndexPage('false');
      expect(result).toEqual({ session: { loggedIn: false } });
    });
    it('should return authorized session when auth is "true"', () => {
      const result = appController.getIndexPage('true');
      expect(result).toEqual({
        session: { username: 'Vadim', loggedIn: true },
      });
    });
    it('should return unauthorized session when auth is undefined', () => {
      const result = appController.getIndexPage('');
      expect(result).toEqual({ session: { loggedIn: false } });
    });
  });
});
