const cdk = require('aws-cdk-lib');
const {Template} = require('aws-cdk-lib/assertions');
const AwsCdk = require('../lib/aws-cdk-stack');

test('Resources Created', () => {
  const app = new cdk.App();

  const stack = new AwsCdk.NexScoreAppStack(app, 'NexScoreAppStack');

  const template = Template.fromStack(stack);

  template.hasResource('AWS::S3::Bucket', {
    'Properties': {
      'BucketName': 'nexscore-app',
    },
  });
});
