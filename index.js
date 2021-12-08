const { ping } = require('tcp-ping-node');
const { Options } = require('./config.js');
const chalk = require('chalk');
const Settings = { 
    host: Options.Pinger.Host ? Options.Pinger.Host : 'www.bing.com', 
    port: Options.Pinger.Port ? Options.Pinger.Port : '80', 
    timeout: Options.Pinger.Timeout ? Options.Pinger.Timeout : 10000
};

setInterval( async () => {
    const result = await ping(Settings);
    if (result.success) {
        console.log(chalk.cyanBright("[Miljte#8707]: ") + chalk.yellowBright(result.host) + chalk.greenBright(" Alive With " + result.time + "Ms"))
    } else {
        console.log(chalk.cyanBright("[Miljte#8707]: ") + chalk.yellowBright(result.host) + chalk.redBright(": Not Alive"))
    }
}, Options.Interval.Time ? Options.Interval.Time : 100);