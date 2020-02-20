let user_name: string = "bob";
let user_job: string = "worker";

let sentence: string = `hello my name us ${ user_name }

i am a ${ user_job }. `

console.log(sentence);

function component(type: string, inner: string) {
  const element = document.createElement(type);

  element.innerHTML = inner;

  return element;
}

document.body.appendChild(component('p', 'test '));

for (let i = 0; i < 10 ; i++) {
  setTimeout( function() {
    let elt = document.body.getElementsByTagName('p');
    elt[0].innerHTML = `${i}`;
  }, 1000 * i);
}

function asyncMethod(callBack: any) {
  setTimeout(() => {
    console.log("Async Callback");
    callBack();
  }, 10000);
}

asyncMethod(() => document.body.appendChild(component('div', sentence)));

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async is done!");
    resolve();
  }, 1500);
});


