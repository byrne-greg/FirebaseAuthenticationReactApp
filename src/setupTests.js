// Ensure any error/warning/log output to console is flagged as a failing test
global.console.error = error => {
  throw new Error(error);
};
global.console.warn = error => {
  throw new Error(error);
};
global.console.log = error => {
  throw new Error(error);
};
