const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
  //   document.cookie = `uid=${userId}; max-age=2`;
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${user}`;
});

retrBtn.addEventListener("click", () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  //   console.log(data);

  // this way of accessing data is a bad idea because if the data changes
  // the structure and order will likely change also
  //   console.log(data[1].split("=")[1]); // user value
  console.log(data.includes("uid").split("=")[1]);
});
