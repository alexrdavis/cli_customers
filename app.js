let prompt = require("prompt")

prompt.start();

prompt.get(['username', "name"], function(err, result) {
    let user = {
        "username": result.username,
        "name": result.name
    }
    console.log(user);
})