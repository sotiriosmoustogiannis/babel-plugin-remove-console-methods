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
npm install --save-dev babel-plugin-remove-console-advanced
```
or
```bash
yarn add --dev babel-plugin-remove-console-advanced
```

## 🛠 Usage

Add the plugin to your Babel configuration:

### babel.config.js

```js
module.exports = {
  plugins: [
    ["babel-plugin-remove-console-advanced", {
      remove: ["log", "info", "debug"]
    }]
  ]
};
```
