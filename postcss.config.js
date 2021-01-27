// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    "postcss-nested": {},
    "postcss-custom-properties": {
      // The importFrom option specifies sources where Custom Properties can be imported from,
      // which might be CSS, JS, and JSON files, functions, and directly passed objects.
      importFrom: "styles/globals.css", // => :root { --color: red }
    },
    autoprefixer: {},
  },
};
