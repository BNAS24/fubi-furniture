import { models, model, Schema } from "mongoose";

export interface ITest {
  name: string;
  age: number;
  description: string;
}

const testSchema = new Schema<ITest>({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Test = models.Test || model("Test", testSchema);

export default Test;
