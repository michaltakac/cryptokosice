const { join } = require("path");
const { pinata } = require("./pinata");

const sourcePath = join(__dirname, "../public");

const options = {
  pinataMetadata: {
    name: `Crypto Košice`
  },
  pinataOptions: {
    cidVersion: 0
  }
};

pinata
  .testAuthentication()
  .then(result => {
    if (result.authenticated) {
      pinata
        .pinFromFS(sourcePath, options)
        .then(() => {
          //handle results here
          console.log("Crypto Košice was pinned successfully!");
        })
        .catch(err => {
          console.log(err);
        });
    }
  })
  .catch(err => {
    console.log(err);
  });
