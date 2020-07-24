# FlexCore
FlexCore is a hyperlight IE10+ CSS/SASS flex framework built to be built on.

## Features
- Less than 1KB gzipped
- Responsive, out-of-the-box styles like `flex-smart` and `flex-list`
- No need to fiddle with `-md`, `-sm` prefixes
- Customizable SASS components

## Documentation
[View FlexCore documentation here.](https://sdbagel.com/FlexCore)

## Usage

### CSS and SASS
Get the raw SASS and CSS files of FlexCore [from the releases](https://github.com/SDBagel/FlexCore/releases). Use the `/dist` folder for compiled CSS and `/src/sass` for the SASS files.

`flexcore.min.css` includes the base styles, and `flexcore-full.min.css` includes all optional module styles. Include the file in your HTML and you're good to go!

### Web Builder
Build your own shim of FlexCore from our website. Coming soon.

## Compatibility
FlexCore adopts a Bootstrap-like naming scheme. This results in potential incompatibilities, meaning it is recommended that the two aren't used together.

Core styles and modules are guaranteed to function *with overlap* in Bootstrap.

Components are not guaranteed to function as they are intentionally designed to replace Bootstrap components.
