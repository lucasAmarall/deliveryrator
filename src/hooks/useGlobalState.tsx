import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContext";
import { IState } from "../interfaces/IState.interface";

const useGlobalState = (): IState => {
	const context = useContext(GlobalStateContext);
	if (context === undefined) {
		throw new Error("useGlobalState must be used within a global provider");
	}
	return context;
};

export default useGlobalState;
