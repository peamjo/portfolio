import Property from "../components/Property.tsx";
import project1Img from "../public/assets/projects/project1.png";

const Property1 = () => {
  return (
    <div>
      <Property
        title="Deploy a Wordpress Website on AWS"
        tech_all="VPC / NAT Gateway / Security Groups"
        overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        "
        background={project1Img}
        demo="http://localhost:3000/"
        code="http://localhost:3000/"
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

export default Property1
