module.exports = {
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",
  "**/*.(ts|tsx|js)": (filenames) => [
    `npx eslint ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`
  ]
};
