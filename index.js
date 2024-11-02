const app = require("./app");
let port = 9000 | 9001

app.listen(port, () => {
    console.log("server run in port : ", port);
})