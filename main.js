const { app, BrowserWindow } = require("electron/main");
const fetch = require("electron-fetch").default;

const { alterUser } = require("./alterUser");

const urlPost = "http://127.0.0.1:8000/api/";
const dataPost = {
  name: "Jacob",
  age: 72,
  city: "Sopot",
  district: "Oliwa",
  walk: false,
  coffee: false,
  tea: false,
};

const urlPatch = "http://127.0.0.1:8000/api/1/update/";
const dataPatch = {
  walk: false,
  coffee: false,
  tea: false,
};

alterUser(urlPost, dataPost, "POST");
alterUser(urlPatch, dataPatch, "PATCH");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
      postData();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
