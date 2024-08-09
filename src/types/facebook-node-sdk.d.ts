// types/facebook-node-sdk.d.ts

declare module 'facebook-node-sdk' {
    interface FacebookOptions {
      appId: string;
      appSecret: string;
      accessToken: string;
    }
  
    interface FacebookApiCallback<T> {
      (error: Error | null, response: T): void;
    }
  
    class Facebook {
      constructor(options: FacebookOptions);
      api<T>(path: string, callback: FacebookApiCallback<T>): void;
      api<T>(path: string, params: object, callback: FacebookApiCallback<T>): void;
    }
  
    export = Facebook;
  }