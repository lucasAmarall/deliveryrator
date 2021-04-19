import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducerr";

import { IState } from "../interfaces/IState.interface";

import { IDispatch } from "../interfaces/IDispatch.interface";
import { IGlobalProvider } from "../interfaces/IGlobalProvider.interface";

export const GlobalStateContext = createContext<IState | undefined>(undefined);
export const GlobalDispatchContext = createContext<IDispatch | undefined>(
	undefined
);

export const GlobalProvider = ({ children }: IGlobalProvider) => {
	const [state, dispatch] = useReducer(GlobalReducer, {
		collaboratorList: [],
	});

	return (
		<GlobalStateContext.Provider value={state}>
			<GlobalDispatchContext.Provider value={dispatch}>
				{children}
			</GlobalDispatchContext.Provider>
		</GlobalStateContext.Provider>
	);
};
