const {Observable} = require('rxjs');

//создание Observable
const observable = new Observable(subscriber => {
  subscriber.next('Первое значение');
  setTimeout(() => {
    subscriber.next('Второе значение через 2с');
    subscriber.complete();
  }, 2000);
});


//Подписка на Observable
observable.subscribe(
  x => {
    console.log(x);
  },
  undefined,
  () => {
    console.log('done');
  }
);

//или так
const observer = {
  next: (x) => {
    console.log(x);
  },
  complete: () => {
    console.log('done');
  }
};
observable.subscribe(observer);

const a = {x: 123, y: 567};

a.console();
