const fs = require('fs')
const path = require('path')

if (!process.env.IMAGES_DIRECTORY) throw new Error('Please provide an IMAGES_DIRECTORY')
if (!process.env.DISPLAY_NAME_CSV_PATH) throw new Error('Please provide an DISPLAY_NAME_CSV_PATH')

const IMAGES_DIRECTORY = process.env.IMAGES_DIRECTORY
const DISPLAY_NAME_CSV_PATH = process.env.DISPLAY_NAME_CSV_PATH

const displayNameCSV = fs.readFileSync(DISPLAY_NAME_CSV_PATH, 'utf8')
  .split('\r\n')
  .map(x => x.split('\t'))

const shortNameToDisplayName = shortName => {
  for (const row of displayNameCSV) {
    const rowShortName = row[4]
    const rowDisplayName = row[5]
    if (rowShortName === shortName) return rowDisplayName
  }

  throw new Error(`No entry found for ${shortName}`)
}

const parser = (IMAGES_DIRECTORY) => {
  const images = fs.readdirSync(path.resolve(__dirname, IMAGES_DIRECTORY))

  return images
    .map(x => [x, x.replace('.png', '').split('_')])
    .map(x => ({
      name: x[1][0],
      armor: {
        shortname: x[1][1],
        displayname: shortNameToDisplayName(x[1][1]),
      },
      weapon: {
        shortname: x[1][2],
        displayname: shortNameToDisplayName(x[1][2]),
      },
      img: x[0]
    }))
}

console.log(JSON.stringify(parser(IMAGES_DIRECTORY), null, 2))

module.exports = { parser }

