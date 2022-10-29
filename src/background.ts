if (typeof window !== "undefined") {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js", {
      scope: "/"
    });
  }
}

const paragraphNormal =
  "font-size: 15px; color: #FFFCF2; background: #0a0f14; padding: 10px; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;";

console.log(
  "%cYou must be a developer. If you are, you can check out the source code here:",
  paragraphNormal
);

console.log("https://github.com/cohenerickson/Portfolio");
