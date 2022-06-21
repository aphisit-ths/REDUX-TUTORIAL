import { ActionType } from './../action-types/index';

interface SearchReositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchReositoriesActionSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchReositoriesActionErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchReositoriesAction
  | SearchReositoriesActionSuccessAction
  | SearchReositoriesActionErrorAction;

  
