import APIService from "../";
import { IAPIService } from "../../interfaces/IAPIService.interface";
import { ICollaborator } from "../../interfaces/ICollaborator.interface";
import { IFeedback } from "../../interfaces/IFeeback";

class CollaboratorService {
  proxy: IAPIService;

  constructor(proxy: IAPIService) {
    this.proxy = proxy;
  }

  list() {
    return this.proxy.get<ICollaborator[], null>("/collaborator");
  }
  getFeedbacks(id: string) {
    return this.proxy.get<IFeedback[], null>(`/collaborator/${id}/feedback`);
  }
  changeFeedbackLikesCounter(
    collaboratorId: string,
    feedbackId: string,
    like: number
  ) {
    return this.proxy.put<IFeedback[], { like: number }>(
      `/collaborator/${collaboratorId}/feedback/${feedbackId}`,
      { like }
    );
  }
  deleteFeedback(collaboratorId: string, feedbackId: string) {
    return this.proxy.delete<IFeedback[]>(
      `/collaborator/${collaboratorId}/feedback/${feedbackId}`
    );
  }
  newFeedback(collaboratorId: string, message: string) {
    return this.proxy.post<
      IFeedback,
      { collaboratorId: string; message: string; like: 0 }
    >(`/collaborator/${collaboratorId}/feedback`, {
      collaboratorId,
      message,
      like: 0,
    });
  }
}

export default CollaboratorService;
