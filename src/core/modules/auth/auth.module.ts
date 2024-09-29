import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/config';
import { AuthController } from './auth.controller';
import { GithubStrategy /*, GoogleStrategy */ } from './strategies';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: environment.JWT_SECRET,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [GithubStrategy /*, GoogleStrategy */],
  controllers: [AuthController],
})
export class AuthModule {}
