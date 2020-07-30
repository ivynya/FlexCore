var buildDict = {
  "core-base": "@use './core/base';",
  "core-alignment": "@use './core/alignment';",
  "mod-container": "@use './modules/container';",
  "mod-flexlist": "@use './modules/flexlist';",
  "mod-navigation": "@use './modules/navigation';",
  "comp-buttons": "@use './components/buttons';",
  "comp-card": "@use './components/card';"
}

function mapper() {
  let returnString = "";
  for (const key in buildDict) {
    let el = document.getElementById(key);
    if (el && el.checked)
      returnString += buildDict[key];
  }

  console.log(`Build string: ${returnString}`);
  return returnString;
}

function builder() {
  let sass = new Sass();
  let scss = mapper();
  sass.compile(scss, (result) => {
    console.log(`Built file: ${result}`);
    document.getElementById("build-result").value = result;
  });
}