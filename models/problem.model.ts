import mongoose, { Schema } from 'mongoose';
export interface Problem extends mongoose.Document {
  problem_no: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  examples: {};
  tags: {};
  constraints: {};
  test_cases:{};
  starter_code: string;
}

export const ProblemSchema:Schema<Problem>=new Schema({
    problem_no: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    difficulty: {type: String, required: true},
    examples: {type: Array, required: true},
    tags: {type: Array, required: true},
    constraints: {type: Array, required: true},
    test_cases: {type: Array, required: true},
    starter_code: {type: String, required: true}
})

export const ProblemModel =mongoose.models.Problem || mongoose.model<Problem>('Problem', ProblemSchema);



