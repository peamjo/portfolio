import Property from "../components/Property";
import project6Img from "../public/assets/projects/project3.png";

const Property6 = () => {
  return (
    <div>
      <Property
        title="Event Driven Architecture"
        tech_all="Microservices"
        overview="Create S3 bucket
- First I created the S3 bucket in order for the
SNS - Standard (not FIFO)
- Then I created an SNS Topic. This SNS Topic will trigger the SQS Queues whenever there is an EVENT published from the S3 Bucket.
- JSON Advanced Access Policy
SQS Queue - 2 queues
- Created 2 queues to receive triggers from the SNS Topic.
Lambda - IAM roles & policies. 2 instances
- Created 2 instances to receive triggers from the SQS queues and process the EVENT
S3 Event Notification
- In S3 I set up the Event Notification for “All object create events”
SNS subscriptions to SQS queues
- Subscription Filter Policy
- The first filter is for PUT, and the second is for COPY
Upload file to test
Copy file to test
Check CloudLogs to see notification"
        background={project6Img}
        demo="/assets/terraform.png"
        tech_list={["S3", "SNS", "SQS", "Lambda"]}
      />
    </div>
  );
};

export default Property6;
