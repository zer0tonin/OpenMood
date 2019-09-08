export enum MoodType {
  Joy = "Joy",
  Sadness = "Sadness",
  Anger = "Anger",
  Surprise = "Surprise",
  Fear = "Fear",
  Disgust = "Disgust",
}

export class Mood {
  id: number;
  time: Date;
  moodType: MoodType;
  thoughts: string;
  behaviour: string;

  constructor(id: number, time: Date, moodType: MoodType, thoughts: string, behaviour: string) {
    this.id = id;
    this.time = time;
    this.moodType = moodType;
    this.thoughts = thoughts;
    this.behaviour = behaviour;
  }
}
