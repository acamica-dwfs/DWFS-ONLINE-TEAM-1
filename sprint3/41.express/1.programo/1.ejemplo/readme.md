1. iniciar  el proyecto con  npm init -y
2. instalar express
   npm install express
3. instalar una depencia de desarrollo
   npm install  nodemon -D
4. creamos el archivo de  server.js e insertamos
   const express = require('express')
   const app2 = express()
   const port = 3000
   app2.listen(port, () => {
   console.log(`Example app2 listening at http://localhost:${port}`)
   })
5. ejecutamos la aplicacion
   nodemon server.js 



