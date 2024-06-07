import mongoose, { Schema } from 'mongoose';
export interface Problem extends mongoose.Document {
  problem_no: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  tags: {};
  constraints: {};
  test_cases:{};
  starter_code: {};
  test_code:{}
}

export const ProblemSchema:Schema<Problem>=new Schema({
    problem_no: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    difficulty: {type: String, required: true},
    tags: {type: Array, required: true},
    constraints: {type: Array, required: true},
    test_cases: {type: Array, required: true},
    starter_code: {type: Object, required: true},
    test_code: {type: Object, required: true}
})

export const ProblemModel =mongoose.models.Problem || mongoose.model<Problem>('Problem', ProblemSchema);



