import React, { useCallback, useEffect, useRef, useState } from "react";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CollaboratorItem from "../../Molecules/CollaboratorItem";
import List from "../../Molecules/List";
import useCollaboratorListData from "../../../hooks/useCollaboratorListData";
import useGlobalState from "../../../hooks/useGlobalState";
import useGlobalDispatch from "../../../hooks/useGlobalDispatch";
import { GlobalActions } from "../../../context/GlobalActions";
import { ICollaborator } from "../../../interfaces/ICollaborator.interface";
import { useFakeLoading } from "../../../hooks/useFakeLoading";

const CollaboratorsList: React.FC<{ maxHeight?: number }> = ({
	maxHeight = 400,
}) => {
	const { collaboratorList } = useGlobalState();
	const { range, loadMore, loading, page } = useFakeLoading(20);

	const [collaboratorListLoaded, setCollaboratorListLoaded] = useState<
    ICollaborator[]
  >([]);
	const dispatch = useGlobalDispatch();
	// eslint-disable-next-line
  const listRef: any = useRef(null);

	const saveToStore = (data: ICollaborator[]) => {
		if (collaboratorList.length) return;
		dispatch({
			type: GlobalActions.set_collaborators_list,
			payload: data,
		});
	};

	const _loadMore = useCallback(() => {
		loadMore();
	}, [page]);

	const { load } = useCollaboratorListData({
		saveToStore,
		alreadyLoaded: !!collaboratorList.length,
	});

	useEffect(() => {
		!collaboratorList.length && load();
	}, []);

	useEffect(() => {
		setCollaboratorListLoaded(collaboratorList.slice(0, range[1]));
	}, [range, collaboratorList]);

	return (
		<div style={{ maxHeight, overflow: "auto" }} ref={listRef}>
			<List>
				{collaboratorListLoaded?.map((collaborator, index) => (
					<div key={index}>
						<CollaboratorItem collaborator={collaborator} />
						{index != collaboratorList.length - 1 && (
							<Divider variant="inset" component="li" />
						)}
					</div>
				))}
				{collaboratorListLoaded.length !== collaboratorList.length && (
					<Box
						height="48px"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Button onClick={_loadMore} variant="contained" color="primary">
							{loading ? "Loading..." : "Load more"}
						</Button>
					</Box>
				)}
			</List>
		</div>
	);
};

export default CollaboratorsList;
