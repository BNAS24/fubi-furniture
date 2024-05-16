import { models, model, Schema } from "mongoose";

const testSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  rank: {
    type: Number,
  },
});

const Test = models.Test || model("Test", testSchema);

export default Test;
