export interface IBrigades {
  id: number;
  brigade_name: string;
  connectionStateId: number;
  department: { id: number };
  position: {
    field: string;
    cluster: number;
    well: number;
  };
  connectionState?: string;
  departmentName?: string;
}

export interface IDepartments {
  id: number;
  name: string;
}

export interface IConnectionState {
  connectionStateId: number;
  name: string;
}

export interface IPoint {
  x: string;
  y: number;
}
