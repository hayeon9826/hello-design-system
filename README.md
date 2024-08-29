## hello-design-system

This package provides Tailwind design system components for React projects.

## Installation

Ensure that you have Node.js (>=18.17.0) and Tailwind CSS installed.

### For Version 1.1.5 or Higher (>= 1.1.5)

#### 1. Install the package in your project directory:

```bash
# with npm
npm install -D hello-design-system

# with yarn
yarn add --dev hello-design-system
```

#### 2. Add hello-design-system styles to your globals.css file:

Open your globals.css (or any global CSS file) and add the following line:

```css
/* globals.css */
@import "hello-design-system/build/build.css";
```

#### 3. Import your global.css to the root file

```jsx
import "globals.css";
```

<br />

### (LEGACY) For Version 1.1.4 or Lower (<= 1.1.4)

#### 1. Install the package in your project directory:

```bash
# with npm
npm install -D hello-design-system

# with yarn
yarn add --dev hello-design-system
```

#### 2. Add hello-design-system to your tailwind.config.js files:

Include hello-design-system in the content array of your tailwind.config.js file to ensure Tailwind scans the component files:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    // your existing paths...
    "./node_modules/hello-design-system/**/*.{js,jsx,ts,tsx}",
  ],
  // other settings...
};
```

## Notes

Make sure your project is properly configured to use Tailwind CSS. If you're new to Tailwind, please refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation) for the setup guide.

## Demo Site

Visit the Hello Design System Demo Site to explore and try out various components:

- [Demo Site](https://hello-design-system.vercel.app/)
- [Demo Site GitHub](https://github.com/hayeon9826/hello-next)
- [Hello Design System GitHub](https://github.com/hayeon9826/hello-design-system)
- [NPM Repo](https://www.npmjs.com/package/hello-design-system)
