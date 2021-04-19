import { AxiosResponse } from "axios";
import { IAPIService } from "../../interfaces/IAPIService.interface";
import { ICollaborator } from "../../interfaces/ICollaborator.interface";
import { IFeedback } from "../../interfaces/IFeeback";

class CollaboratorService {
  proxy: IAPIService;

  constructor(proxy: IAPIService) {
  	this.proxy = proxy;
  }

  list(): Promise<AxiosResponse<ICollaborator[]>> {
  	return this.proxy.get<ICollaborator[], null>("/collaborator");
  }
  getFeedbacks(id: string): Promise<AxiosResponse<IFeedback[]>> {
  	return this.proxy.get<IFeedback[], null>(`/collaborator/${id}/feedback`);
  }
  changeFeedbackLikesCounter(
  	collaboratorId: string,
  	feedbackId: string,
  	like: number
  ): Promise<AxiosResponse<IFeedback>> {
  	return this.proxy.put<IFeedback, { like: number }>(
  		`/collaborator/${collaboratorId}/feedback/${feedbackId}`,
  		{ like }
  	);
  }
  deleteFeedback(
  	collaboratorId: string,
  	feedbackId: string
  ): Promise<AxiosResponse> {
  	return this.proxy.delete<IFeedback[]>(
  		`/collaborator/${collaboratorId}/feedback/${feedbackId}`
  	);
  }
  newFeedback(collaboratorId: string, message: string): Promise<AxiosResponse> {
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
