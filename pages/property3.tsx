import Property from "../components/Property";
import project3Img from "../public/assets/projects/project3.png";

const Property3 = () => {
  return (
    <div>
      <Property
        title="Using Terraform to build a Dev Environment"
        tech_all="Terraform"
        overview="test"
        background={project3Img}
        demo="http://localhost:3000/"
        code="http://localhost:3000/"
        tech_list={["Terraform", "IAM", "VPC", "EC2"]}
      />
    </div>
  );
};

export default Property3;
