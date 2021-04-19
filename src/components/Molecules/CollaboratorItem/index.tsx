import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { ICollaboratorItemProps } from "./interface";
import { Link } from "react-router-dom";
import { Paths } from "../../../constants/Paths";

const CollaboratorItem: React.FC<ICollaboratorItemProps> = ({
	collaborator,
}: ICollaboratorItemProps) => {
	const { id, avatar, name, role, company } = collaborator;
	const link = `${Paths.details}/${id}`;

	return (
		<Link to={link}>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt={name} src={avatar} />
				</ListItemAvatar>
				<ListItemText
					primary={name}
					secondary={
						<React.Fragment>
							<Typography component="span" variant="body2" color="textPrimary">
								{role}
							</Typography>
							{` - ${company}`}
						</React.Fragment>
					}
				/>
			</ListItem>
		</Link>
	);
};

export default CollaboratorItem;
