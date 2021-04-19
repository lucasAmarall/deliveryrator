import { useContext } from "react";
import { GlobalDispatchContext } from "../context/GlobalContext";

const useGlobalDispatch = () => {
	const context = useContext(GlobalDispatchContext);
	if (context === undefined) {
		throw new Error("useGlobalDispatch must be used within a global provider");
	}
	return context;
};

export default useGlobalDispatch;
