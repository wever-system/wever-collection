const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const btnMin: HTMLElement | null = document.getElementById("min");
const btnMax: HTMLElement | null = document.getElementById("max");
const btnClose: HTMLElement | null = document.getElementById("close");

btnMin?.addEventListener("click", () => {
  ipc.send("minimizeApp");
});
btnMax?.addEventListener("click", () => {
  ipc.send("maximizeApp");
});
btnClose?.addEventListener("click", () => {
  ipc.send("closeApp");
});
