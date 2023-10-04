import Property from "../components/Property";
import project3Img from "../public/assets/projects/project3.png";

const Property4 = () => {
  return (
    <div>
      <Property
        title="Using Terraform to build a Dev Environment"
        tech_all="Terraform"
        overview="In this project, I want to try creating a CI/CD pipeline to create a stack in CloudFormation using an automation server. I chose to use Jenkins in this project.

    1. Install Jenkins from **AWS Marketplace**
    1. First I went on the AWS marketplace to look for the Jenkins package. This particular one is run on Debian. 
    2. I then created the Jenkins EC2 instance."
        background={project3Img}
        demo="/assets/terraform.png"
        tech_list={["Jenkins", "EC2", "CloudFormation"]}
      />
    </div>
  );
};

export default Property4;
