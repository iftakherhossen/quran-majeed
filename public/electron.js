// Module to control the application lifecycle and the native browser window.
const  isDev = require('electron-is-dev');
const { app, BrowserWindow, protocol, Menu } = require("electron");
const path = require("path");
const url = require("url");


// Create the native browser window.
function createWindow() {
  const mainWindow = new BrowserWindow({
    minWidth: 1000,
    minHeight: 700,
    icon: __dirname + '/icon.ico',
    autoHideMenuBar: isDev ? false : true,
    center: true,
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });


  // In production, set the initial browser path to the local bundle generated
  // by the Create React App build process.
  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";
  mainWindow.loadURL(appURL);

  app.setAboutPanelOptions({
    applicationName: "Al-Quran Majeed",
    applicationVersion: "0.0.1",
  })
  
  mainWindow.onbeforeunload = function () {
    mainWindow.scrollTo(0, 0);
  }

  // Automatically open Chrome's DevTools in development mode.
    // if (!app.isPackaged) {
    //   mainWindow.webContents.openDevTools();
    // }
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
function setupLocalFilesNormalizerProxy() {
  protocol.registerHttpProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error("Failed to register protocol");
    }
  );
}

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  setupLocalFilesNormalizerProxy();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
const allowedNavigationDestinations = "https://my-electron-app.com";
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Menu Functions
const handleOpenFile = () => {
  console.log("open file clicked!");
}
const handleOpenRecent = () => {
  console.log("open file clicked!");
}

// Adding Menu
const menu_list = [
  {
    label: "File",
    submenu: [
      {
        label: "Open File...",
        click: handleOpenFile()
      },
      {
        label: "Open Recent...",
        click: handleOpenRecent()
      }
    ],
  }
];

// Setting new menu to desktop app
const menu = Menu.buildFromTemplate(menu_list);
// Menu.setApplicationMenu(menu)