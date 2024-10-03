const app = {
one:1,
  init: () => {
    console.log("app running");
  },
};

setTimeout(app.init, 1000);
