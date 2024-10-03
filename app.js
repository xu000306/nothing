const app = {
  one: 1,
  two: 2,
  init: () => {
    console.log("app running");
  },
};

setTimeout(app.init, 1000);
