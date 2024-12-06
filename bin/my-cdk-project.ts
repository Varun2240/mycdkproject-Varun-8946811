import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyCdkProjectStack } from '../lib/my-cdk-project-stack';

const app = new cdk.App();

// Define your bucket name
const myBucketName = "MyFirstBucket";

// Pass an empty object for StackProps if you don't need specific properties, 
// or pass specific properties such as environment configuration.
new MyCdkProjectStack(app, 'MyCdkProjectStack', {
  // Optional stack properties, e.g., env, account, region
  stackName: 'MyCdkProjectStack',
});
