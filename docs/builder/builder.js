var buildDict = {
  "core-base": "builder/core/_base.scss",
  "core-alignment": "builder/core/_alignment.scss",
  "mod-container": "builder/modules/_container.scss",
  "mod-flexlist": "builder/modules/_flexlist.scss",
  "mod-navigation": "builder/modules/_navigation.scss",
  "comp-buttons": "builder/components/_buttons.scss",
  "comp-card": "builder/components/_card.scss"
}

function mapper() {
  let returnString = "";
  for (const key in buildDict) {
    let el = document.getElementById(key);
    if (el && el.checked) {
      fetch(buildDict[key])
      .then(res => res.text())
      .then(res => returnString += res)
      .catch(ex => console.log(ex));
    }
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