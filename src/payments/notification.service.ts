export class NotificationService {
  async notify() {
    // simulate user receiving STK push/ verifying by entering OTP
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(8000); // intentionally to delay for 2 seconds
    return {
      status: 'ok',
    };
  }
}
