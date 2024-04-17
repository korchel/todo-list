export interface ITodo {
  id: number,
  todo: string,
  completed: boolean,
}

export interface IRequestParams {
  limit: number,
  skip: number,
}

export interface IResponseParams {
  todos: Array<{
    id: number,
    todo: string,
    completed: boolean,
    userId: 26
  }>,
  total: number,
  skip: string,
  limit: number
}