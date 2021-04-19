import React from "react";
import useFeedbackList from "../../../hooks/useFeedbackList";
import FeedbackItem from "../../Molecules/FeedbackItem";
import List from "../../Molecules/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const FeedBackList: React.FC<{ collaboratorId: string }> = ({
	collaboratorId,
}) => {
	const { feedbacks, newLike, deleteFeedback } = useFeedbackList(
		collaboratorId
	);

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
		<List>
			{feedbacks?.map((feedback, index) => (
				<FeedbackItem
					key={index}
					feedback={feedback}
					onLike={newLike}
					onDelete={deleteFeedback}
				/>
			))}
		</List>
	);
};

export default FeedBackList;
