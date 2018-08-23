module.exports = (props) => {
  return {
    id: 'changeLogo',
    index: 4,
    title: 'Choose your own logo',
    instructions: `Let's change the logo with your own. In order to do that, you need to open the root folder  and take a look at the chunky.json file. Also you need to add your new logo in the assets folder`,
    help: `Tap the 'open file' button and open the chunky.json file. Look for logo`,
    files: ['chunky.json']
  }
}
