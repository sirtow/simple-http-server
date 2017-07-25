var argv, options;
argv = require('optimist').argv;
options = {};
if (argv.p) options.port = argv.p;
if (argv.port) options.port = argv.port;
if (argv.d) options.directory = argv.d;
if (argv.directory) options.directory = argv.directory;
if (argv.nocolors) options.colors = false;
if (argv.nologs) options.nologs = true;
if (argv.help) options.help = true;


var url = require('../lib/server').run(options);


if (argv.launch) {
  require('../lib/server').printLine("Launching ".yellow + url.green + " in your default browser.".yellow+"\n");
  require("openurl").open(url);
}