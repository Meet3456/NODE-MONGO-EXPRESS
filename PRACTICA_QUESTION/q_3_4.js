const fs = require('fs')
const path =  require('path')
const pathdirectory = path.join(__dirname,'files')  // __dirname = gives the path to current directory:
const filepath = `${pathdirectory}/test.txt`

// TO CREATE AND WRITE DATA IN NEW FILE(TEST.TXT) IN FILES FOLDER:
fs.writeFileSync(filepath , 'This is a NEW test file')


//READ
fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item)
})


//UPDATE:
fs.appendFile(filepath,'This is the updated text in test.txt' , (err)=>{
    if(!err){
        console.log("File has been updated")
    }
})


//DELETE
fs.unlinkSync(filepath , (err)=>{
    if(!err){
        console.log("File has been Deleted")
    }
})