import React, { MouseEventHandler } from "react";
import { formatStringOrRawValue } from "../../../utils/formatStringOrRawValue";
import { IFeedbackProps } from "./interface";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const showDeleteIcon = (date: string) => {
  const date1 = new Date();
  const date2 = new Date(date);
  // eslint-disable-next-line
  // @ts-ignore
  if (date1 - date2 > 5 * 60 * 1000) {
    return false;
  }
  return true;
};
const FeedbackItem = ({ feedback, onDelete, onLike }: IFeedbackProps) => {
  const preventDefault = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  return (
    <Box boxShadow={4} mt="24px" mb="24px" p="16px">
      <ListItemText
        primary={
          <Typography component="span" variant="h5">
            {feedback.message}
          </Typography>
        }
        secondary={
          <>
            <Typography component="span" variant="h6">
              {formatStringOrRawValue(feedback.createdAt)}
            </Typography>
          </>
        }
      />
      <Divider />
      <Box mt="16px" display="flex">
        {showDeleteIcon(feedback.createdAt) && (
          <Box mr="16px">
            <Link
              href="#"
              onClick={(
                ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>
              ) => {
                preventDefault(ev);
                onDelete(feedback);
              }}
            >
              <>
                <DeleteForeverIcon />
              </>
            </Link>
          </Box>
        )}

        <Link
          href="#"
          onClick={(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            preventDefault(ev);
            onLike(feedback);
          }}
        >
          <Box display="flex">
            <FavoriteIcon color="primary" />
            <Typography component="span" variant="body1">
              {feedback.like}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default FeedbackItem;
