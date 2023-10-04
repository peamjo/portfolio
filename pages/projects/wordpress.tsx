import Property from "../../components/Property";
import project1Img from "../../public/assets/projects/project1.png";

const Wordpress = () => {
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

export default Wordpress;
