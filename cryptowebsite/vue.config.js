
 // Initialement on avait ça avant ngrok et tout le tralala

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// vue.config.js
/*const { defineConfig } = require('@vue/cli-service')




module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Host': 'https://e6cd-2a02-842a-8132-f501-590a-4872-43b4-7ab7.ngrok-free.app'
    }
  }
}
// https://31a2-81-220-234-77.ngrok-free.app
*/

/*
// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}*/
