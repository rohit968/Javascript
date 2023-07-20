//We can add functions inside a function.
//The inner function needs to be called inside the outer function in order to be executed.


const app = () => {
  console.log('APP');
  const myFunc = () => {
    console.log('MyFunc');
  }
  myFunc();
}

app(); // This will run both the function as the myFunc() is also being called from app()

myFunc(); //THis will give error as it is declared inside the scope of app().