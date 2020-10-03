const ncp = require('ncp').ncp
const fs = require('fs-extra')

const Directory = {
  source: './build',
  destination: './'
}

async function boot(){
  console.log('=> Getting old files name...')
  const oldFilesName = await getOldFilesName()

  console.log('=> Removing old files...')
  await removeOldFiles(oldFilesName)

  console.log("=> Adding new files...")
  await addNewFiles()

  console.log('=> DONE!')
}
boot()

function removeOldFiles(oldFilesName){
  oldFilesName.map(oldFile => {
    fs.remove(oldFile, error => {
      if(error){
        return console.error(error)
      }
    })
  })
}

async function getOldFilesName(){
  const files = await fs.readdir(Directory.destination)
  .then(files => files)
  .catch(error => console.error(error))

  const oldFilesName = files.filter(oldFilesList)
    function oldFilesList(file){
      if(file.startsWith("static")) return file
      if(file.startsWith("asset-manifest.json")) return file
      if(file.startsWith("favicon")) return file
      if(file.startsWith("index.html")) return file
      if(file.startsWith("manifest.json")) return file
      if(file.startsWith("precache")) return file
      if(file.startsWith("service-worker.js")) return file
    }
  return oldFilesName
}

function addNewFiles(){
  ncp.limit = 16
  ncp(Directory.source, Directory.destination, function(error) {
   if(error) {
     return console.error(error)
   }
  });
}