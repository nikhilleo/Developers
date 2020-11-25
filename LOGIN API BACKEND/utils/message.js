
const moment = require("moment");

function formatMessage(username,message){
    return{
        username:username,
        message:message,
        time: moment().format("h:mm a")
    }
}


module.exports = formatMessage;