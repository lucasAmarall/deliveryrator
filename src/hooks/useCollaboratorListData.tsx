import { useState } from "react";
import { ICollaborator } from "../interfaces/ICollaborator.interface";
import APIService from "../api/index";
import CollaboratorService from "../api/services/collaboratorService";

const service = new CollaboratorService(APIService);

const useCollaboratorListData = ({
  saveToStore,
  alreadyLoaded,
}: {
  saveToStore: (data: ICollaborator[]) => void;
  alreadyLoaded: boolean;
}) => {
  const [collaboratorsList, setCollaboratorsList] = useState<ICollaborator[]>(
    []
  );

  const load = async () => {
    if (alreadyLoaded) return;
    try {
      const { data } = await service.list();
      saveToStore(data);
      setCollaboratorsList(data);
    } catch {
      setCollaboratorsList([]);
    }
  };

  return {
    load,
    collaboratorsList,
  };
};

export default useCollaboratorListData;
