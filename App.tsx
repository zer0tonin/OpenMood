import React from "react";
import { AppLoading } from "expo";
import { Container, Title, Header, Left, Body, Right } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { Mood, MoodType } from './src/Mood/Mood';
import MoodView from './src/Mood/MoodView';

const moods = [
  new Mood(1, new Date(), MoodType.Joy, "I should do it again", "Ate a good meal"),
  new Mood(2, new Date(), MoodType.Fear, "It scares me", "Saw an insect"),
]

interface State {
  isReady: boolean;
}

interface Props {}

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>OpenMood</Title>
          </Body>
          <Right />
        </Header>
        {moods.map(MoodView)}
      </Container>
    );
  }
}
