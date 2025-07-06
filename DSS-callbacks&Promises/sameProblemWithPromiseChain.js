// ** Promise were invented to solve the callback hell problem, but they can also lead to a similar issue if not used correctly. **

// ** Promise Chaining **]

/*
STEP 1. Place Order
STEP 2. Cut Fruit
STEP 3. Add water & Ice
STEP 4. Start Machine
STEP 5. Select Container
STEP 6. Add Toppins
STEP 7. Serve Ice Cream 
*/

let stocks = {
  Fruits: ["Banana", "Strawberry", "Apple", "Mango"],
  Liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Choclate", "Peanuts"],
};

let isStoreOpened = true;

// ** Now, ever steps are taking some time to execute, putting delay method seperately.
function stepDuration(time) {
  return new Promise((resolve, reject) => {
    if (isStoreOpened) {
      setTimeout(resolve, time);
    } else {
      reject("Shop is closed ...");
    }
  });
}

function orderWithPromise() {
  // Execute Steps
  stepDuration(2000) // If you want step duration to behave as a Promise, stepDuration should return promise
    .then(function () {
        console.log("STEP 2: Cutting the fruit .... " + stocks.Fruits[1]);
      },(err) => {
        // Rejection Part
        console.log(err);
      }
    )
    // 3rd Step:
    .then(() => {
        console.log(
          "STEP 3: Adding .... " + stocks.Liquid[0] + " and " + stocks.Liquid[1]
        );
      },(err) => {
        console.log(err);
      }
    )
    // 4th Step:
    .then(() => {
        console.log("STEP 4: Starting the machine ....");
        isStoreOpened = false;
      }, (err) => {
        console.log(`${err} : Machine is not Starting`);
      })
    .then(() => {
        console.log("STEP 5: Selecting the container .... " + stocks.holder[0]);
      })
    // 6th Step:
    .then(() => {
        console.log("STEP 6: Adding toppings .... " + stocks.toppings[0] + " and " + stocks.toppings[1]
        );
      })
    // 7th Step:
    .then(() => {
        console.log("STEP 7: Serving the ice cream ....");
      },
      (err) => {
        console.log(err);
      }
    )
    .catch((err) => {
      console.log("Error: " + err);
    })
    .finally(finalCall);
}

function finalCall() {
  console.log("Order Completed. Thank you for visiting!");
}

// ** Not passing callback doing it with Promise.
orderWithPromise();
