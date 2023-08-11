console.log("ok")

const getApi = "src/json/data.json"

fetch(getApi)
  .then((result) => result.json())
  .then((data) => console.log(data.data))
  // .then(({ data }) => console.log(data))