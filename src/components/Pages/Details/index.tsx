import React, { useEffect, useState } from "react";

import { IDetailsProps } from "./interface";
import { styles } from "./styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import FeedBackList from "../../Templates/FeedBackList";
import useGlobalState from "../../../hooks/useGlobalState";

import useCollaboratorListData from "../../../hooks/useCollaboratorListData";
import useGlobalDispatch from "../../../hooks/useGlobalDispatch";
import { GlobalActions } from "../../../context/GlobalActions";
import { formatStringOrRawValue } from "../../../utils/formatStringOrRawValue";
import { ICollaborator } from "../../../interfaces/ICollaborator.interface";
import useFeedbackList from "../../../hooks/useFeedbackList";
import { useHistory, useParams } from "react-router";
import { Paths } from "../../../constants/Paths";

const collaboratorFinder = (
  CollaboratorsList: ICollaborator[],
  id: string
): ICollaborator | undefined =>
  CollaboratorsList.find((collaborator) => collaborator.id == id);

const infoToShowOnGrid = ["id", "createdAt", "name", "company", "role"];

const Details: React.FC<IDetailsProps> = () => {
  const history = useHistory();
  const { id: collaboratorId } = useParams<{ id: string }>();
  const [renderList, updateList] = useState(1);
  const { newFeedback, feedbackMessage, setFeedbackMessage } = useFeedbackList(
    collaboratorId
  );
  const [
    collaboratorSelected,
    setCollaboratorSelected,
  ] = useState<ICollaborator>({
    id: "",
    createdAt: "",
    name: "Loading...",
    avatar: "",
    company: "",
    role: "",
  });

  const dispatch = useGlobalDispatch();
  const { collaboratorList } = useGlobalState();

  const saveToStore = (data: ICollaborator[]) => {
    dispatch({
      type: GlobalActions.set_collaborators_list,
      payload: data,
    });
  };

  const { load } = useCollaboratorListData({
    alreadyLoaded: false,
    saveToStore,
  });

  useEffect(() => {
    if (!collaboratorList?.length) load();
  }, [collaboratorList]);

  useEffect(() => {
    const collaboratorFound = collaboratorFinder(
      collaboratorList,
      collaboratorId
    );
    collaboratorFound && setCollaboratorSelected(collaboratorFound);
  }, [collaboratorList]);

  return (
    <>
      <Box bgcolor="primary.main">
        <Container maxWidth="md">
          <Box position="fixed" top="32px" left="32px" zIndex="2">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(Paths.home)}
            >
              Voltar
            </Button>
          </Box>
          <Box
            height="70vh"
            minHeight="700px"
            maxHeight="1000px"
            display="flex"
            alignItems="flex-start"
          >
            <Box
              height="75%"
              width="100%"
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              style={styles.header}
              mt={-2}
              borderRadius={16}
            >
              <Box
                mb={24}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                color="white"
              >
                <Avatar sizes="250" style={styles.sizeAvatar} />
                <Typography variant="h4" component="h1">
                  {collaboratorSelected?.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box mt={-46.8} display="flex" mb={8} alignItems="center">
        <Container maxWidth="md">
          <Box width="100%" boxShadow={16} bgcolor="white">
            <List component="ul" aria-label="information">
              {Object.keys(collaboratorSelected ?? {}).map((key: string) => {
                if (!infoToShowOnGrid.includes(key)) return null;
                return (
                  <ListItem key={key}>
                    <ListItemText
                      primary={`${key}: ${formatStringOrRawValue(
                        collaboratorSelected?.[key] || ""
                      )}`}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Box>
              <Box display="flex" p="8px" flexWrap="wrap">
                <TextField
                  id="standard-basic"
                  label="Feedback"
                  fullWidth
                  multiline
                  value={feedbackMessage}
                  onChange={(ev) => setFeedbackMessage(ev.target.value)}
                />
              </Box>
              <Box p={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => newFeedback(() => updateList(renderList + 1))}
                >
                  Enviar feedback
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {collaboratorId && (
        <Box mt={-6} display="flex" mb={8} alignItems="center">
          <Container maxWidth="md">
            <FeedBackList collaboratorId={collaboratorId} key={renderList} />
          </Container>
        </Box>
      )}
    </>
  );
};

export default Details;
