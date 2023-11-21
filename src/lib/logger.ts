type WhoIsLogging = 'HTTP' | 'INFRA' | 'CORE';

// ANSI escape code
const reset = '\x1b[0m';

// Foreground colors
const red = '\x1b[31m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';

const info = (who: WhoIsLogging, message: string) => {
  console.info(`[${green}${who}${reset}] ${message}`);
};

const warn = (who: WhoIsLogging, message: string) => {
  console.warn(`[${yellow}${who}${reset}] ${message}`);
};

const error = (who: WhoIsLogging, message: string) => {
  console.error(`[${red}${who}${reset}] ${message}`);
};

export {
  info,
  warn,
  error,
};
