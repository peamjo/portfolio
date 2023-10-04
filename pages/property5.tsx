import Property from "../components/Property";
import project5Img from "../public/assets/projects/project5.png";

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

export default Property5;
