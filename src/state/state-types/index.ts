export enum ESubjectType {
  MAIN = 'MAIN',
  SOFTWARE = 'SOFTWARE',
  NETWORK = 'NETWORK',
  HARDWARE = 'HARDWARE',
  PROJECT = 'PROJECT',
  ENGLISH = 'ENGLISH',
  HUMEN = 'HUMEN',
  MATHSCI = 'MATHSCI',
  SOCIETY = 'SOCIETY',
}

export type TypeOfSubject =
  | ESubjectType.MAIN
  | ESubjectType.SOFTWARE
  | ESubjectType.NETWORK
  | ESubjectType.HARDWARE
  | ESubjectType.PROJECT
  | ESubjectType.ENGLISH
  | ESubjectType.HUMEN
  | ESubjectType.MATHSCI
  | ESubjectType.SOCIETY;

export interface ISubject {
  id: string;
  name: string;
  credit: number;
  type: TypeOfSubject;
}

export interface ISemester {
  semester: number;
  subjects: ISubject[];
}

export interface IAllSemester {
  data: ISemester[];
  error: string | null;
}

export interface IInputdata {
  semester: number;
  subject: ISubject;
}
