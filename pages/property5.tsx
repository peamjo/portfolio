import Property from "../components/Property";
import project3Img from "../public/assets/projects/project3.png";

const Property5 = () => {
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

export default Property5;
