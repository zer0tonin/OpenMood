import React from "react";
import { Card, CardItem, Left, Icon, Body, Text, H2, H3 } from "native-base";
import emoji from "node-emoji"

import { MoodType, Mood } from "./Mood";

function moodTypeToIcon(moodType: MoodType) {
  switch(moodType) {
    case MoodType.Joy:
      return "😀";
    case MoodType.Sadness:
      return "😢";
    case MoodType.Anger:
      return "😠";
    case MoodType.Surprise:
      return "😮";
    case MoodType.Fear:
      return "😨";
    case MoodType.Disgust:
      return "🤢";
  }
}

export default function MoodView(props: Mood) {
  return (
    <Card key={props.id}>
      <CardItem>
        <Left>
          <Body>
            <H2>{moodTypeToIcon(props.moodType)} {props.moodType}</H2>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>Thought: {props.thoughts}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text>Behaviour: {props.behaviour}</Text>
        </Body>
      </CardItem>
    </Card>
  );
}
