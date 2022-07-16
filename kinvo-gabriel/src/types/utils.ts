export type FirstReturn<T> = T extends (param: any) => infer RETURN ? RETURN : any

export type ConnectedOperations<TRawOperations> = {
  [K in keyof TRawOperations]: FirstReturn<TRawOperations[K]>
}
