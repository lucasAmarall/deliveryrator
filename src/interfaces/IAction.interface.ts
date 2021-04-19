import { GlobalActions } from "../context/GlobalActions";

export interface IAction {
  type: keyof typeof GlobalActions;
  // eslint-disable-next-line
  payload?: any;
}
