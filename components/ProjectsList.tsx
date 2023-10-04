import Property from "../components/Property";
import project1Img from "../public/assets/projects/project1.png";
import project2Img from "../public/assets/projects/project2.png";
import project3Img from "../public/assets/projects/project3.png";
import project4Img from "../public/assets/projects/project4.png";
import project5Img from "../public/assets/projects/project5.jpg";
import project6Img from "../public/assets/projects/project6.png";


const Property1 = () => {
  return (
    <div>
      <Property
        title="Deploy a Wordpress Website on AWS"
        tech_all="VPC / NAT Gateway / Security Groups"
        overview="This was the first project on AWS that I did, in order to understand more about the platform as a whole. 
 First, I created a VPC, and then the Internet Gateway, Subnets, Route Table and NAT Gateway in order to allow the VPC to be able to be connected to the internet.
Then I configured the security groups in order to allow access via only the ports that are necessary.
After that I used Putty to SSH to the VPC to install Wordpress.
I also bought a domain name and registered for the SSL AWS certificate to make sure the security on the website is maintained.
        "
        background={project1Img}
        demo="/project1-video.mkv"
        tech_list={[
          "VPC",
          "NAT Gateway",
          "Security Groups",
          "RDS",
          "EFS",
          "EC2",
        ]}
      />
    </div>
  );
};

const Property2 = () => {
  return (
    <div>
      <Property
        title="Build a Serverless Web Application"
        tech_all="AWS Lambda / API Gateway / Amplify"
        overview="I learnt how to create a simple serverless web application that enables users to request rides from the application.
The application present users with an HTML-based user interface for indicating the location where they would like to be picked up and will interact with a RESTful web service on the backend to submit the request and dispatch a nearby ride.
I used AWS Amplify, Cognito, API Gateway, Lambda and DynamoDB."
        background={project2Img}
        demo="/project2-video.mkv"
        tech_list={[
          "AWS Lambda",
          "API Gateway",
          "Amplify",
          "DynamoDB",
          "Cognito",
          "Cloud9",
          "CodeCommit",
        ]}
      />
    </div>
  );
};

const Property3 = () => {
  return (
    <div>
      <Property
        title="Using Terraform to build a Dev Environment"
        tech_all="Terraform"
        overview="For this project I wanted to learn about IaC (Infrastructure as Code) so I built a Dev Environment using Terraform.
It was the first time using any IaC program and it allowed me to understand how it worked a lot more. By not accessing the actual AWS and being able to interact with a lot of the services using code instead, I understood a lot more about how IaC works and enjoyed working with it."
        background={project3Img}
        demo="/assets/terraform.png"
        tech_list={["Terraform", "IAM", "VPC", "EC2"]}
      />
    </div>
  );
};

const Property4 = () => {
  return (
    <div>
      <Property
        title="Jenkins Demo"
        tech_all="Jenkins"
        overview="In this project, I want to try creating a CI/CD pipeline to create a stack in CloudFormation using an automation server. I chose to use Jenkins in this project.

    1. Install Jenkins from AWS Marketplace
        a. First I went on the AWS marketplace to look for the Jenkins package. This particular one is run on Debian. 
        b. I then created the Jenkins EC2 instance.
    2. Install CloudFormation, Pipeline and Git Plugin in Jenkins
        a. I then install a few plugins that was necessary to build a CI/CD pipeline for CloudFormation in Jenkins including the “Pipeline”, “CloudFormation” and “Git” plugins.
        b. At first I did not realize that these were not already installed in Jenkins as I first thought that they were included since launch, especially popular and often-used features like creating Pipeline.
    3. Install AWS CLI using SSH
        a. Next I connect to the Jenkins EC2 instance by SSH using PuTTY.
        b. The biggest unexpected problem I faced during this project was SSH to the instance, since this error message kept popping up and I did not know why as I made sure to use the correct .ppk key for PuTTY already.
        c. It turned out that the username was the problem, and it was supposed to be “bitnami”, which was not the name that one would know unless it was written in the instructions (which it wasn’t). I found out because after a few failed usernames, I tried “root” and the terminal instructed me to use “bitnami” instead.
    4. Jenkins File
        1. The JenkinsFile (GitHub) is a simple one to spin up a CloudFormation stack.
        2. This was my first time using Jenkins so I wanted to use a simple task and test if it actually works as I expected or not.
    5. Enhance EC2 Role
        1. Created a new role for a specifically created user to use in Jenkins.
        2. In addition to Amazon SSMManagedInstanceCore policy, I added AWSCloudFormationFullAccess and AmazonS3FullAccess.
    6. Run Cft using Jenkins Pipeline
        1. I set up a Jenkins pipeline, select Pipeline Script from Git, and built the pipeline.
        2. I checked CloudFormation to see that the stack was built in CloudFormation.
    
    This project allowed me to understand these AWS and other DevOps services much better. 
    Actually using Jenkins as part of a CI/CD pipeline to make sure that the infrastructure is always ready to be built made it so much easier for me to understand its concept.
    I ran across some unexpected problems and realized that these little things are sometimes inevitable and the more I know and understand the technology to a deeper level, the faster I can be to solve these problems"
        background={project4Img}
        demo="/assets/terraform.png"
        tech_list={["Jenkins", "EC2", "CloudFormation"]}
      />
    </div>
  );
};

const Property5 = () => {
  return (
    <div>
      <Property
        title="LevelUp! Lab for Serverless"
        tech_all="Serverless"
        overview="For this project I wanted to learn about IaC (Infrastructure as Code) so I built a Dev Environment using Terraform.
It was the first time using any IaC program and it allowed me to understand how it worked a lot more. By not accessing the actual AWS and being able to interact with a lot of the services using code instead, I understood a lot more about how IaC works and enjoyed working with it."
        background={project5Img}
        demo="/assets/terraform.png"
        tech_list={["API Gateway", "AWS Lambda", "Amazon DynamoDB"]}
      />
    </div>
  );
};

const Property6 = () => {
  return (
    <div>
      <Property
        title="Event Driven Architecture"
        tech_all="Microservices"
        overview="Create S3 bucket
- First I created the S3 bucket in order for the
SNS - Standard (not FIFO)
- Then I created an SNS Topic. This SNS Topic will trigger the SQS Queues whenever there is an EVENT published from the S3 Bucket.
- JSON Advanced Access Policy
SQS Queue - 2 queues
- Created 2 queues to receive triggers from the SNS Topic.
Lambda - IAM roles & policies. 2 instances
- Created 2 instances to receive triggers from the SQS queues and process the EVENT
S3 Event Notification
- In S3 I set up the Event Notification for “All object create events”
SNS subscriptions to SQS queues
- Subscription Filter Policy
- The first filter is for PUT, and the second is for COPY
Upload file to test
Copy file to test
Check CloudLogs to see notification"
        background={project6Img}
        demo="/assets/terraform.png"
        tech_list={["S3", "SNS", "SQS", "Lambda"]}
      />
    </div>
  );
};

export default Property1; Property2; Property3; Property4; Property5; Property6;
