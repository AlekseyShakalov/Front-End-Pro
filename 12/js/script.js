"use strict";


let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("done");
    reject(new Error("Unsuccessfully"));
  }, 5000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise was finished!");
  });

async function getPromise() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise was finished!");
  }
}
getPromise()