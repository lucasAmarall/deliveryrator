import { GlobalActions } from "../context/GlobalActions";

export interface IAction {
  type: keyof typeof GlobalActions;
  // TODO
  payload?: any;
}
