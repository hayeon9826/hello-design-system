## hello-design-system

This package provides tailwind design system components for React projects.

## Installation

You need Node.js and Tailwind CSS installed.

1.  Install the package in your project directory with:

```
// with npm
npm install -D hello-design-system

// with yarn
yarn add --dev hello-design-system
```

2. Then add hello-design-system to your `tailwind.config.js` files:

```typescript
module.exports = {
  //...
  content: [
    // ...
    "./node_modules/hello-design-system/**/*.{js,jsx,ts,tsx}",
  ],
};
```
