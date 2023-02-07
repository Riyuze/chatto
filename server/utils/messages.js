const moment = require('moment');

formatMessage = (username, text, id) => {
    return {
        username, text, id, time: moment().format('h:mm a')
    }
}

module.exports = {
    formatMessage
}