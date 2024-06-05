export interface IBaseExecuteUseCasePort<TPortParams, TDataReturn> {
  execute: (portParams?: TPortParams) => TDataReturn | Promise<TDataReturn>;
}
