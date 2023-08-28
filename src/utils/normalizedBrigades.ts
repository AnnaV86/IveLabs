import { IBrigades, IConnectionState, IDepartments } from '../models/models';

export const normalizedBrigades = (
  brigades: IBrigades[],
  departments: IDepartments[],
  connection: IConnectionState[]
) => {
  const normalizedValue: IBrigades[] = [...brigades].map((brigade) => {
    const departmentName = departments?.find(
      (el) => el.id === brigade.department.id
    );

    const connectionState = connection.find(
      (el) => el.connectionStateId === brigade.connectionStateId
    );

    return {
      ...brigade,
      departmentName: departmentName?.name,
      connectionState: connectionState?.name,
    };
  });

  return normalizedValue;
};
