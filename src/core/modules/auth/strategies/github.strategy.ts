import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github';
import { environment } from 'src/config';

export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      scope: ['public_profile'],
      callbackURL: '<http://localhost:3000/auth/github/callback>',

      clientID: environment.GITHUB_CLIENT_ID,
      clientSecret: environment.GITHUB_CLIENT_SECRET,
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: Profile) {
    return profile;
  }
}
