import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContext";

const useGlobalState = () => {
	const context = useContext(GlobalStateContext);
	if (context === undefined) {
		throw new Error("useGlobalState must be used within a global provider");
	}
	return context;
};

export default useGlobalState;
