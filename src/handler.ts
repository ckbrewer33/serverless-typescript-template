import { APIGatewayProxyHandler } from 'aws-lambda';
import { echo } from '@queries/exampleQuery';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event) => {
  echo('hello');
  const retValue = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    }, null, 2),
  };

  return retValue;
};
