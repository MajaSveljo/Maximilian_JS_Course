const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extactedId = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  if (extactedId) {
    console.log("Got the id - ", extactedId);
  } else {
    console.log("Could not find id");
  }

  if (extractedUser) {
    console.log("Got the user - ", extractedUser);
  } else {
    console.log("Could not find user");
  }
});
