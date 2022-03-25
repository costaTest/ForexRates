exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({value: '1.33455'})
    }
}