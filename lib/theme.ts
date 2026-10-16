export const themeStorageKey = "theme";

/** Runs in <head> before paint so a saved theme never flashes. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${themeStorageKey}");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
