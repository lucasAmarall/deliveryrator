import React, { useEffect, useRef } from "react";
import Divider from "@material-ui/core/Divider";
import CollaboratorItem from "../../Molecules/CollaboratorItem";
import List from "../../Molecules/List";
import useCollaboratorListData from "../../../hooks/useCollaboratorListData";
import useGlobalState from "../../../hooks/useGlobalState";
import useGlobalDispatch from "../../../hooks/useGlobalDispatch";
import { GlobalActions } from "../../../context/GlobalActions";
import { ICollaborator } from "../../../interfaces/ICollaborator.interface";

const CollaboratorsList: React.FC<{ maxHeight?: number }> = ({
	maxHeight = 400,
}) => {
	const { collaboratorList } = useGlobalState();
	const dispatch = useGlobalDispatch();
	// eslint-disable-next-line
  const listRef: any = useRef(null);

	const saveToStore = (data: ICollaborator[]) => {
		dispatch({
			type: GlobalActions.set_collaborators_list,
			payload: data,
		});
	};
	const { load } = useCollaboratorListData({
		saveToStore,
		alreadyLoaded: !!collaboratorList.length,
	});

	useEffect(() => {
		!collaboratorList.length && load();
	}, []);

	return (
		<div style={{ maxHeight, overflow: "auto" }} ref={listRef}>
			<List>
				{collaboratorList.map((collaborator, index) => (
					<div key={index}>
						<CollaboratorItem collaborator={collaborator} />
						{index != collaboratorList.length - 1 && (
							<Divider variant="inset" component="li" />
						)}
					</div>
				))}
			</List>
		</div>
	);
};

export default CollaboratorsList;
