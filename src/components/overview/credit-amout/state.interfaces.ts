export interface ICompareAmountSubject {
  isCompleted: boolean;
  amount: number;
  citeria: number;
  name: string;
}
export enum FilterStatus {
  COMPLETED = 'COMPLETED',
  INCOMPLETE = 'INCOMPLETE',
  ALL = 'ALL',
}

export type ToggleState =
  | FilterStatus.ALL
  | FilterStatus.COMPLETED
  | FilterStatus.INCOMPLETE
  | undefined;

export type IAmountCredit = ICompareAmountSubject[];
export var citeria = {
  MAIN: 42,
  NETWORK: 10,
  SOFTWARE: 10,
  HARDWARE: 10,
  CEINTERREST: 9,
  PROJECT: 6,
  ENGLISH: 12,
  SOCIETY: 6,
  HUMEN: 6,
  MATHSCI: 6,
  FREE: 6,
};
