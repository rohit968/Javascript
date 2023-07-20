//Default parameters -> We can provide defaultparameters so that if not given by the user in arguments, the code still runs instead of giving undefined or NaN

const add = (a, b = 0) => a + b; //Here b=0 is default parameter.

console.log(add(4));// If we do not provide the value of b, it is taken as default value i.e. 0
console.log(add(4, 5));// If we provide the value of b, then this value will be used instead of default

