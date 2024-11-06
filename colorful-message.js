import chalk from 'chalk';

const chalkTxt = (message) => {
    return chalk.red(message);
};

export { chalkTxt };  // Use 'export' instead of 'module.exports'
