import React, { useEffect, useState } from "react";
import useFeedbackList from "../../../hooks/useFeedbackList";
import FeedbackItem from "../../Molecules/FeedbackItem";
import List from "../../Molecules/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useFakeLoading } from "../../../hooks/useFakeLoading";
import { IFeedback } from "../../../interfaces/IFeeback";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const FeedBackList: React.FC<{ collaboratorId: string }> = ({
	collaboratorId,
}) => {
	const { range, loadMore, loading } = useFakeLoading(20);

	const { feedbacks, newLike, deleteFeedback } = useFeedbackList(
		collaboratorId
	);

	const [feedBackLoaded, setFeedBackLoaded] = useState<IFeedback[]>([]);

	useEffect(() => {
		if (feedbacks) setFeedBackLoaded(feedbacks.slice(0, range[1]));
	}, [range, feedbacks]);

	if (!feedbacks?.length) {
		return (
			<Container>
				<Typography variant="h4" component="h1">
          Loading...
				</Typography>
			</Container>
		);
	}
	return (
		<>
			<List>
				{feedBackLoaded.map((feedback, index) => (
					<FeedbackItem
						key={index}
						feedback={feedback}
						onLike={newLike}
						onDelete={deleteFeedback}
					/>
				))}
			</List>
			{feedBackLoaded.length !== feedbacks.length && (
				<Box
					height="48px"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Button onClick={loadMore} variant="contained" color="primary">
						{loading ? "Loading..." : "Load more"}
					</Button>
				</Box>
			)}
		</>
	);
};

export default FeedBackList;
