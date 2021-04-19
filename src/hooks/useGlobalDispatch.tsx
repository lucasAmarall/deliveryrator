import { useContext } from "react";
import { GlobalDispatchContext } from "../context/GlobalContext";
import { IDispatch } from "../interfaces/IDispatch.interface";

const useGlobalDispatch = (): IDispatch => {
	const context = useContext(GlobalDispatchContext);
	if (context === undefined) {
		throw new Error("useGlobalDispatch must be used within a global provider");
	}
	return context;
};

export default useGlobalDispatch;
