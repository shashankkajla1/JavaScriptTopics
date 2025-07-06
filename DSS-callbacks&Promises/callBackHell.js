/*
STEP 1. Place Order
STEP 2. Cut Fruit
STEP 3. Add water & Ice
STEP 4. Start Machine
STEP 5. Select Container
STEP 6. Add Toppins
STEP 7. Serve Ice Cream 
*/

// Callbacks : To achive r/l ship's b/w each steps.

let stocks = {
  Fruits: ["Banana", "Strawberry", "Apple", "Mango"],
  Liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Choclate", "Peanuts"],
};

function order(startPrepration, txt) {
  console.log("Start Preparing Order .... ");
  startPrepration(txt); // startPrepration is a callback with txt as an argument
}

// ** Call Back Hell **
let isStoreOpened = false;

function prepare(txt) {
  setTimeout(() => {
    if (!isStoreOpened) {
      console.log("STEP 1: Prepration has started ....");

      setTimeout(function () {
        console.log(`STEP 2: Cutting the fruit .... ${stocks.Fruits[1]}`);
        setTimeout(() => {
          console.log(
            `STEP 3: Adding .... ${stocks.Liquid[0]} and ${stocks.Liquid[1]}`
          );
          setTimeout(() => {
            console.log("STEP 4: Starting the machine ....");
            setTimeout(() => {
              console.log(
                "STEP 5: Selecting the container .... " + stocks.holder[0]
              );
              setTimeout(() => {
                console.log(
                  `STEP 6: Adding toppings .... ${stocks.toppings[0]} and ${stocks.toppings[1]}`
                );
                setTimeout(() => {
                  console.log("STEP 7: Serving Ice Cream ...." + txt);
                }, 2000);
              });
            });
          }, 2000);
        }, 2000);
      }, 2000);
    }
  }, 2000);
}

order(prepare, "hello");

// It will run only if isStoreOpened = true.
// Here, if any of Fn fail inside this it will through an error and rest of code won't execute it.
