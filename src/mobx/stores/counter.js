import { observable, action } from 'mobx';

class Counter {
  @observable value = 0;

  @action decrement() {
    this.value--;
  }

  @action increment() {
    console.log('123213');
    this.value++;
  }
}

export default new Counter();
