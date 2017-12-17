export class NewUser
{
    constructor() {
      this.isEnabled = true;
      this.isLockedOut = false;
      this.roles = ['administrator'];
    }

    password: string;
    userId: string;
    userName: string;
    fullName: string;
    email: string;
    jobTitle: string;
    phoneNumber: string;
    configuration: string;
    isEnabled: boolean;
    isLockedOut: boolean;
    roles: [
      string
    ];
}
