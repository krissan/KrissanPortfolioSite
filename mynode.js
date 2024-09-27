const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';

// Conditionally load dotenv only if running locally and environment variables aren't already set
if (!process.env.dataset || !process.env.sanityProjectId) {
  require('dotenv').config({ path: 'src/.env' });
}
const envFile = `export const environment = {
    dataset: '${process.env.dataset}',
    sanityProjectId: '${process.env.sanityProjectId}',
};
`;


const targetPath = path.join(__dirname, './src/environments/environment.prod.ts');
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated environment.prod.ts`);
    }
});
