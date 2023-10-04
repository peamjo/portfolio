import Property from "../../components/Property";
import project4Img from "../../public/assets/projects/project4.png";
import project42Img from "../../public/assets/projects/project4-2.png";


const Jenkins = () => {
  return (
    <div>
      <Property
        title="Event Driven Architecture"
        tech_all="Microservices"
        overview="In this project, I want to try creating a CI/CD pipeline to create a stack in CloudFormation using an automation server. I chose to use Jenkins in this project. First I went on the AWS marketplace to look for the Jenkins package. This particular one is run on Debian. I then created the Jenkins EC2 instance.
        Install CloudFormation, Pipeline and Git Plugin in Jenkins
        I then install a few plugins that was necessary to build a CI/CD pipeline for CloudFormation in Jenkins including the “Pipeline”, “CloudFormation” and “Git” plugins.
        At first I did not realize that these were not already installed in Jenkins as I first thought that they were included since launch, especially popular and often-used features like creating Pipeline.
    Install AWS CLI using SSH
        Next I connect to the Jenkins EC2 instance by SSH using PuTTY.
        The biggest unexpected problem I faced during this project was SSH to the instance, since this error message kept popping up and I did not know why as I made sure to use the correct .ppk key for PuTTY already.
        It turned out that the username was the problem, and it was supposed to be “bitnami”, which was not the name that one would know unless it was written in the instructions (which it wasn’t). I found out because after a few failed usernames, I tried “root” and the terminal instructed me to use “bitnami” instead.
    Jenkins File
        The JenkinsFile (GitHub) is a simple one to spin up a CloudFormation stack.
        This was my first time using Jenkins so I wanted to use a simple task and test if it actually works as I expected or not.
    Enhance EC2 Role
        Created a new role for a specifically created user to use in Jenkins.
        In addition to Amazon SSMManagedInstanceCore policy, I added AWSCloudFormationFullAccess and AmazonS3FullAccess.
    Run Cft using Jenkins Pipeline
        I set up a Jenkins pipeline, select Pipeline Script from Git, and built the pipeline.
        I checked CloudFormation to see that the stack was built in CloudFormation.
    
    This project allowed me to understand these AWS and other DevOps services much better. 
    Actually using Jenkins as part of a CI/CD pipeline to make sure that the infrastructure is always ready to be built made it so much easier for me to understand its concept.
    I ran across some unexpected problems and realized that these little things are sometimes inevitable and the more I know and understand the technology to a deeper level, the faster I can be to solve these problems"
        background={project4Img}
        demo="/assets/projects/project4-2.png"
        tech_list={["Jenkins", "EC2", "CloudFormation"]}
      />
    </div>
  );
};

export default Jenkins;
