export interface IUser {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  emailVerified: boolean;
  phoneNumber: null;
  isAnonymous: boolean;
  tenantId: null;
  providerData: ProviderDatum[];
  apiKey: string;
  appName: string;
  authDomain: string;
  stsTokenManager: StsTokenManager;
  redirectEventId: null;
  lastLoginAt: string;
  createdAt: string;
  multiFactor: MultiFactor;
}

export interface MultiFactor {
  enrolledFactors: any[];
}

export interface ProviderDatum {
  uid: string;
  displayName: null;
  photoURL: null;
  email: string;
  phoneNumber: null;
  providerId: string;
}

export interface StsTokenManager {
  apiKey: string;
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export class User implements IUser {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: null;
  isAnonymous: boolean;
  tenantId: null;
  providerData: ProviderDatum[];
  apiKey: string;
  appName: string;
  authDomain: string;
  stsTokenManager: StsTokenManager;
  redirectEventId: null;
  lastLoginAt: string;
  createdAt: string;
  multiFactor: MultiFactor;

  constructor(data?: IUser) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    this.uid = data['uid'];
    this.displayName = data['displayName'];
    this.photoURL = data['photoURL'];
    this.email = data['email'];
    this.emailVerified = data['emailVerified'];
    this.phoneNumber = data['phoneNumber'];
    this.isAnonymous = data['isAnonymous'];
    this.tenantId = data['tenantId'];
    this.providerData = data['providerData'];
    this.apiKey = data['apiKey'];
    this.appName = data['appName'];
    this.authDomain = data['authDomain'];
    this.stsTokenManager = data['stsTokenManager'];
    this.redirectEventId = data['redirectEventId'];
    this.lastLoginAt = data['lastLoginAt'];
    this.createdAt = data['createdAt'];
    this.multiFactor = data['multiFactor'];
  }

  static fromJS(data: any): User {
    data = typeof data === 'object' ? data : {};
    let result = new User();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['uid'] = this.uid;
    data['displayName'] = this.displayName;
    data['photoURL'] = this.photoURL;
    data['email'] = this.email;
    data['emailVerified'] = this.emailVerified;
    data['phoneNumber'] = this.phoneNumber;
    data['isAnonymous'] = this.isAnonymous;
    data['tenantId'] = this.tenantId;
    data['providerData'] = this.providerData;
    data['apiKey'] = this.apiKey;
    data['appName'] = this.appName;
    data['authDomain'] = this.authDomain;
    data['stsTokenManager'] = this.stsTokenManager;
    data['redirectEventId'] = this.redirectEventId;
    data['lastLoginAt'] = this.lastLoginAt;
    data['createdAt'] = this.createdAt;
    data['multiFactor'] = this.multiFactor;
    return data;
  }

  clone(): User {
    const json = this.toJSON();
    let result = new User();
    result.init(json);
    return result;
  }
}
