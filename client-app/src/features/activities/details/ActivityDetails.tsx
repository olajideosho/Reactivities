import React, { useContext } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";

export const ActivityDetails: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {selectedActivity: activity, openEditForm, cancelSelectedActivity} = activityStore;
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span>{activity!.date}</span>
        </Card.Meta>
        <Card.Description>{activity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => openEditForm(activity!.id)}
            basic
            content="Edit"
            color="blue"
          />
          <Button
            onClick={cancelSelectedActivity}
            basic
            content="Cancel"
            color="grey"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
