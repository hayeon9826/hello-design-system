## hello-design-system

This package provides Tailwind design system components for React projects.

## Installation

Ensure that you have Node.js (>=18.17.0) and Tailwind CSS installed.

1. Install the package in your project directory:

```bash
// with npm
npm install -D hello-design-system

// with yarn
yarn add --dev hello-design-system
```

2. Add `hello-design-system` to the `content` array in your `tailwind.config.js`:

```typescript
module.exports = {
  //...
  content: [
    // ...
    "./node_modules/hello-design-system/**/*.{js,jsx,ts,tsx}",
  ],
};
```

## Demo Site

Visit the Hello Design System Demo Site to explore and try out various components:

- [Demo Site](https://hello-design-system.vercel.app/)
- [Demo Site GitHub](https://github.com/hayeon9826/hello-next)
- [Hello Design System GitHub](https://github.com/hayeon9826/hello-design-system)
