var buildDict = {
  "core-base": "builder/core/base.scss",
  "core-alignment": "builder/core/alignment.scss",
  "mod-container": "builder/modules/container.scss",
  "mod-flexlist": "builder/modules/flexlist.scss",
  "mod-navigation": "builder/modules/navigation.scss",
  "comp-buttons": "builder/components/buttons.scss",
  "comp-card": "builder/components/card.scss"
}

function getter(key) {
  return new Promise((resolve, reject) => {
    if (!document.getElementById(key).checked)
      resolve("");

    fetch(buildDict[key])
    .then(res => resolve(res.text()))
    .catch(ex => reject(ex));
  });
}

function mapper() {
  return new Promise((resolve, reject) => {
    Promise.all(Object.keys(buildDict).map(key => getter(key)))
    .then(vals => resolve(vals.join(" ")))
    .catch(ex => reject(ex));
  });
}

async function builder() {
  let sass = new Sass();
  let scss = await mapper();
  sass.compile(scss, (result) => {
    result = result.text;
    document.getElementById("build-result").value = result;
  });
}