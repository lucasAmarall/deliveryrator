import { IFeedback } from "../../../interfaces/IFeeback";

export interface IFeedbackProps {
  feedback: IFeedback;
  onDelete: (feedback: IFeedback) => void;
  onLike: (feedback: IFeedback) => void;
}
