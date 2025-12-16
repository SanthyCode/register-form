import { User } from '../domain/User.js';

export class RegistrationService {
  constructor(countryApi) {
    this.countryApi = countryApi;
  }

  async getCountries() {
    return await this.countryApi.fetchCountries();
  }

  validateStep(user, step) {
    switch (step) {
      case 1:
        return user.validateStep1();
      case 2:
        return user.validateStep2();
      case 3:
        return user.validateStep3();
      default:
        return false;
    }
  }

  submitForm(user) {
    console.log('Form Data:', user);
    return true; // Simulate success
  }
}