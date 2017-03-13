import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {
  public get adalConfig(): any {
    return {
      tenant: 'armno.onmicrosoft.com',
      clientId: '93310a66-c46e-4c83-8e96-fd44085afd67',
      redirectUri: window.location.origin + '/profile',
      postLogoutRedirectUri: window.location.origin + '/',
      cacheLocation: 'localStorage'
    };
  }
}
