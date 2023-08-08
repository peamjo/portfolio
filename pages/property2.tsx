import Property from "../components/Property";
import project2Img from "../public/assets/projects/project2.png";

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

export default Property2;
