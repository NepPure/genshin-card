/**
This script is a helper for building webpack with specified language data.

By itself, the distribution will include all languages
  node build

If you want to limit the languages packed, then append a space-separated list of language names.
For example:
  node build english
will produce a distribution in the dist folder with only the English genshin data.

More examples:
  npm run build build english chinesesimplified korean japanese
  npm run build french german
  npm run build all achievements filename:dist/data/scripts/all-achievements
  npm run build all characters filename:dist/data/scripts/all-characters

Available language names can be found in src/language.js file
*/

// this script should be called from the root directory.

const execSync = require('child_process').execSync;
const argsArr = process.argv.slice(2);
let filename = '';

for(const arg of argsArr) {
  if(arg.startsWith('filename:'))
    filename = arg.slice(arg.indexOf(':')+1);
}

execSync('node ./generate.js ' + argsArr.join(' '), { cwd: 'src', stdio: [0, 1, 2] });
execSync(`npx webpack --config webpack/webpack.main.config.js --env filename=${filename}`, { stdio:[0, 1, 2] });