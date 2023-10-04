import Property from "../../components/Property";
import project5Img from "../../public/assets/projects/project5.jpg";

const Serverless = () => {
  return (
    <div>
      <Property
        title="LevelUp! Lab for Serverless"
        tech_all="Serverless"
        overview="I wanted to learn these technologies used here so I decided to create this project. It is basically a simple API-Driven architecturel. When API invokes Lambda, which contains logic for CRUD operations for DynamoDB table, it then processes the logic onto the DynamoDB database."
        background={project5Img}
        demo="/assets/projects/project5.jpg"
        tech_list={["API Gateway", "AWS Lambda", "Amazon DynamoDB"]}
      />
    </div>
  );
};

export default Serverless;
