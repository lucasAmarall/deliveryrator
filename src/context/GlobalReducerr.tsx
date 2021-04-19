import { IAction } from "../interfaces/IAction.interface";
import { IState } from "../interfaces/IState.interface";
import { GlobalActions } from "../context/GlobalActions";

const GlobalReducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
	case GlobalActions.set_collaborators_list: {
		return {
			...state,
			collaboratorList: action.payload,
		};
	}
	default: {
		throw new Error(`Unhandled action type: ${action}`);
	}
	}
};

export default GlobalReducer;
