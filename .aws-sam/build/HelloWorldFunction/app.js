const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    sslEnabled: false,
    paramValidation: false,
    convertResponseTypes: false
});

exports.lambdaHandler = async (event, context) => {
    let response;
    try {
        const params = {
            TableName: "denis_test"
        };
          
        const data = await dynamoClient.scan(params).promise();
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                data: data,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    return response
};
