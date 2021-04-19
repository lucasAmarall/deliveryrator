export interface ICollaborator {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  company: string;
  role: string;
  [index: string]: string;
}
