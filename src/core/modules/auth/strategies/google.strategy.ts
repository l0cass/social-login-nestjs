import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
// import { environment } from 'src/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      // scope: ['email', 'profile'],
      // callbackURL: '',
      //
      // clientID: environment.GOOGLE_CLIENT_ID,
      // clientSecret: environment.GOOGLE_CLIENT_SECRET,
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: Profile) {
    return profile;
  }
}
