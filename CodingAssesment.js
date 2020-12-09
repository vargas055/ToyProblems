const Axios = require('axios');
const Fs = require('fs');
const Path = require('path')
const Url = 'https://api.github.com/search/users?q=followers:%3E10000+sort:followers&per_page=50'

async function downloader () {
    let profiles;
    await Axios.get(Url)
    .then(data => {
        profiles = data.data.items
        profiles.forEach(element => {
            async function download() {
                let url = `${element.avatar_url}`
                let path = Path.resolve(__dirname, 'images', `${element.login}.jpeg`)
                const writer = Fs.createWriteStream(path)
    
                const response = await Axios({
                    url,
                    method: 'GET',
                    responseType: 'stream'
                })
                response.data.pipe(writer)
                return new Promise((resolve, reject) => {
                    writer.on('finish', resolve)
                    writer.on('error', reject)
                })
            }
            download()
        });
    })
}

downloader()



//     async function downloader (){
//         profiles.forEach(element => {

//             let url = `${element.avatar_url}`
//             let path = Path.resolve(__dirname, 'images', `${element.login}.jpeg`)
//             const writer = Fs.createWriteStream(path)

//             const response = await Axios({
//                 url,
//                 method: 'GET',
//                 responseType: 'stream'
//             })
//             debugger
//             response.data.pipe(writer)
//             debugger
//             return new Promise((resolve, reject) => {
//                 writer.on('finish', resolve)
//                 writer.on('error', reject)
//             })
//         });

//     }
//     downloader()


// debugger
// console.log()

// const Fs = require('fs')  
// const Path = require('path')  
// const Axios = require('axios')

// {async function downloadImage () {  
//   const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
//   const path = Path.resolve(__dirname, 'images', 'code.jpg')
//   const writer = Fs.createWriteStream(path)

//   const response = await Axios({
//     url,
//     method: 'GET',
//     responseType: 'stream'
//   })

//   response.data.pipe(writer)

//   return new Promise((resolve, reject) => {
//     writer.on('finish', resolve)
//     writer.on('error', reject)
//   })
// }

// downloadImage()  }