console.log("Script sab.js");
let mainScript = document.createElement("script");
mainScript.setAttribute("async", "true");
try {
    var sab = new SharedArrayBuffer(1);

    if (sab) {
        mainScript.setAttribute("src", "picsimlab_mt.js");
        console.log("multithread supported");
    } else {
        mainScript.setAttribute("src", "picsimlab_wasm.js"); 
        console.log("multithread not supported");
    }
} catch(e) {
    mainScript.setAttribute("src", "picsimlab_wasm.js");
    console.log("multithread not supported");
}
document.body.appendChild(mainScript);
