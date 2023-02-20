const { ipcRenderer } = require("electron");

let path;

ipcRenderer.on("filedata", (e, data) => {
     document.getElementById("editor").value = data.data;
     path = data.path;
});

const os = require("os");
const fs = require("fs-extra");
const { dialog } = require("electron");