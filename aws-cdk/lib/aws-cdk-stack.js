const {Stack} = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const cloudFront = require('aws-cdk-lib/aws-cloudfront');

class NexScoreAppStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'NexScoreAppBucket', {
      bucketName: 'nexscore-app',
      deletionPolicy: 'Retain',
      websiteIndexDocument: 'index.html',
    });

    const cloudFrontOAI = new cloudFront.OriginAccessIdentity(this, 'OAI');

    new cloudFront.CloudFrontWebDistribution(this, 'CloudfrontDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: cloudFrontOAI,
          },
          behaviors: [{isDefaultBehavior: true}],
        },
      ],
    });

    bucket.grantRead(cloudFrontOAI.grantPrincipal);
  }
}

module.exports = {NexScoreAppStack};
