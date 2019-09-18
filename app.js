// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello"); //resolve in 1000 milli seconds
//     }, 1000);
//   });

//   const error = false;
//   if (!error) {
//     const response = await promise;  //proceed only the promise is resolved
//     return response;
//   } else {
//     await Promise.reject(new Error("Swomthing not right"));
//   }
// }

// myFunc()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
const http = new HTTP();

http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

const data = {
  name: "sam yao",
  username: "moviegoer",
  email: "yaob@miamioh.edu"
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
