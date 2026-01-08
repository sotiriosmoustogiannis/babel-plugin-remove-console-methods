# 📦 babel-plugin-remove-console-methods

A customizable Babel plugin that removes selected `console.*` statements from your JavaScript/React code.  
Useful for cleaning production bundles while still allowing developers to keep important logs using a `// keep` comment.

## ✨ Features

- 🔧 Remove specific console methods (e.g. `log`, `info`, `debug`)
- 🛑 Preserve console statements using `// keep`
- 🧠 Detects inline `// keep` comments
- 🌐 Works with JS, React, and TypeScript (via Babel)
- ⚙️ Optional production-only usage
- 📉 Helps reduce bundle size for production builds

## 🚀 Installation

```bash
npm install --save-dev babel-plugin-remove-console-methods
```
or
```bash
yarn add --dev babel-plugin-remove-console-methods
```

**It is not a public npm package yet so the above commands will not work but you can use it like**
```bash
npm install --save-dev git+https://github.com/your-username/babel-plugin-remove-console-advanced.git
```

**Run the plugin to test it by using this command after you have download the reposirotory**
```bash
npx babel examples/input.js --out-file examples/output.js
```

**Use the plugin locally (development / testing)**
If you want to test it without publishing, you can **link it locally**.
#### Step 1 — Link the plugin globally

Go to the plugin folder:
```bash
cd path/to/babel-plugin-remove-console-advanced
npm link
```
#### Step 2 — Link the plugin in your project

Go to your project folder:

```bash
cd path/to/your-project
npm link babel-plugin-remove-console-advanced
```

#### Step 3 — Add it to your Babel configuration

```js
module.exports = {
  plugins: [
    ["babel-plugin-remove-console-advanced", { remove: ["log", "info"] }]
  ]
};
```

## 🛠 Usage

Add the plugin to your Babel configuration:

### babel.config.js

```js
module.exports = {
  plugins: [
    ["babel-plugin-remove-console-methods", {
      remove: ["log", "info", "debug"]
    }]
  ]
};
```

Default behavior
If you do not pass remove options, only console.log will be removed:

## Example Input/Output

### Input
```js
console.log("log");
console.info("info");
console.warn("warning");
console.error("error");

console.log("keep this"); // keep this log
console.debug("debugging"); // keep it

console.log("another keep");
console.debug("debugging without keep comment");

const add = (a,b) => {
  return a + b;
}

add(1,3);
console.log('The Addition of 1 and 3 is', add(1,3));
```

### Output
```js
console.warn("warning");
console.error("error");
console.log("keep this"); // keep this log
console.debug("debugging"); // keep it

const add = (a, b) => {
  return a + b;
};
add(1, 3);
```

## Using Comment // keep

Prevent removal incuding keep on comment:

### Inline:
```js
console.log("keep this"); // keep
console.log("keep this"); // keep also this
```

## ⚙️ Plugin Options

| Option  | Type  | Default   | Description                         |
|---------|-------|-----------|-------------------------------------|
| remove  | array | ["log"]   | List of console methods to remove   |

### Example

```js
{ remove: ["log", "info", "debug"] }
```

You can remove any valid console method, such as:
- log
- info
- debug
- warn
- error
- trace
- table

## 🌐 Use the plugin in Production Builds

You can configure the plugin to remove console calls **only in production**:

```js
module.exports = function (api) {
  const env = api.env(); // "development" or "production"

  const plugins = [];

  if (env === "production") {
    plugins.push([
      "babel-plugin-remove-console-methods",
      { remove: ["log", "info", "debug"] }
    ]);
  }

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins
  };
};
```

## 🧪 How It Works Internally

The plugin:

1. Traverses the AST and finds `CallExpression` nodes  
2. Identifies `console.<method>` calls  
3. Checks if the method is listed in the `remove` option  
4. Reads all comments in the file  
5. Detects “keep” comments on:  
   - the same line  
6. Removes the console call if no keep-rule applies

## 📄 License

MIT © 2026 — Sotiris

