import React, { useEffect, useState } from "react";
import { IFeedback } from "../interfaces/IFeeback";
import APIService from "../api";

import CollaboratorService from "../api/services/collaboratorService";

const service = new CollaboratorService(APIService);

const useFeedbackList = (collaboratorId: string) => {
  const [feedbacks, setFeedbacks] = useState<IFeedback[] | null>();
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const load = () => {
    service.getFeedbacks(collaboratorId).then((res) => {
      setFeedbacks(res.data);
    });
  };

  const addUiLike = (feedback: IFeedback) => {
    let counter = 0;
    const data = feedbacks?.map((_fed: IFeedback) => {
      if (_fed.id === feedback.id) {
        counter = feedback.like + 1;
        return {
          ..._fed,
          like: counter,
        };
      }
      return _fed;
    });
    setFeedbacks(data ? [...data] : []);
    return counter;
  };

  const removeUiLike = (feedback: IFeedback, like: number) => {
    const data = feedbacks?.map((_fed: IFeedback) => {
      if (_fed.id === feedback.id) {
        return {
          ..._fed,
          like: like,
        };
      }
      return _fed;
    });
    setFeedbacks(data ? [...data] : []);
  };

  const newLike = (feedback: IFeedback) => {
    const counter = addUiLike(feedback);
    service
      .changeFeedbackLikesCounter(collaboratorId, feedback.id, counter)
      .catch(() => {
        removeUiLike(feedback, counter - 1);
      });
  };

  const deleteFeedback = (feedback: IFeedback) => {
    service.deleteFeedback(collaboratorId, feedback.id).finally(() => {
      load();
    });
  };

  const newFeedback = (call?: () => void) => {
    if (feedbackMessage) {
      service.newFeedback(collaboratorId, feedbackMessage).finally(() => {
        setFeedbackMessage("");
        call?.();
      });
    }
  };

  useEffect(() => {
    load();
  }, [collaboratorId]);

  return {
    deleteFeedback,
    newLike,
    load,
    newFeedback,
    setFeedbackMessage,
    feedbackMessage,
    feedbacks,
  };
};

export default useFeedbackList;
