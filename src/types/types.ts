export interface ITask {
  id: number,
  task: string,
  done: boolean,
}

export type FilterType = 'all' | 'completed' | 'active';