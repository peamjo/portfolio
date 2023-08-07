import Property from "../components/Property.tsx";
import project2Img from "../public/assets/projects/project2.png";

const Property2 = () => {
  return (
    <div>
      <Property
        title="Build a Serverless Web Application"
        tech_all="AWS Lambda / API Gateway / Amplify"
        overview="test"
        background={project2Img}
        demo="http://localhost:3000/"
        code="http://localhost:3000/"
        tech_list={["AWS Lambda", "API Gateway", "Amplify", "DynamoDB", "Cognito", "Cloud9", "CodeCommit"]}
      />
    </div>
  );
};

export default Property2;
