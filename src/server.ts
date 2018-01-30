const path = require('path')
const express = require('express')

const app = express()
const DEFAULT_PORT = 3000
const DISTRIBUTION_DIRECTORY = path.join(__dirname, "../dist")
const APPLICATION_BUNDLE = path.join(DISTRIBUTION_DIRECTORY, "index.html")

app.set("port", process.env.PORT || DEFAULT_PORT)
app.use(express.static(DISTRIBUTION_DIRECTORY))

app.get("*", (request, response) => {
  response.sendFile(APPLICATION_BUNDLE)
})

app.listen(app.get("port"))
console.log("Server running on port " + app.get("port"))