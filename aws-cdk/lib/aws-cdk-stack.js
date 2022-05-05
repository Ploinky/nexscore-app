const {Stack} = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const iam = require('aws-cdk-lib/aws-iam');

class NexScoreAppStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'NexScoreAppBucket', {
      bucketName: 'nexscore-app',
      deletionPolicy: 'Retain',
      websiteIndexDocument: 'index.html',
      blockPublicAccess: new s3.BlockPublicAccess({restrictPublicBuckets: false}),
    });

    const bucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [
        `${bucket.bucketArn}/*`,
      ],
      principals: [new iam.Anyone()],
    });

    bucket.addToResourcePolicy(bucketPolicy);
  }
}

module.exports = {NexScoreAppStack};
