export default class CounterService {
  activeToInactive = 0;
  InactiveToactive = 0;

  activeToInactiveCount() {
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }
  InactiveToactiveCount() {
    this.InactiveToactive++;
    console.log(this.InactiveToactive);
  }
}
