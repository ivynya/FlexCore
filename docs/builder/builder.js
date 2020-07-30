var buildDict = {
  "core-base": "builder/core/base.scss",
  "core-alignment": "builder/core/alignment.scss",
  "mod-container": "builder/modules/container.scss",
  "mod-flexlist": "builder/modules/flexlist.scss",
  "mod-navigation": "builder/modules/navigation.scss",
  "comp-buttons": "builder/components/buttons.scss",
  "comp-card": "builder/components/card.scss"
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
    fetch(`https://cssminifier.com/raw?input=${result}`, { method: "POST" })
    .then(res => res.text())
    .then(res => {
      console.log(`Built and minified: ${res}`);
      document.getElementById("build-result").value = res;
    })
  });
}