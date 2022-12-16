const { getText } = require("./02_setupPromises");
const start = async () => {
  try {
    const first = await getText("../content/sub-folder/firstText.txt")
    console.log(first)
  } catch(err) {
    console.log(err)
  }
}

start()