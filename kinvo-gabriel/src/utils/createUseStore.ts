import { useMemo } from 'react'
import { ReduxState } from '../store'
import { ConnectedOperations } from '../types/utils'
import { useSelector, useDispatch } from 'react-redux'

export type CreateUseStoreResult<StoreState, TRawOperations extends object> = () => {
  storeState: StoreState
  operations: ConnectedOperations<TRawOperations>
}

type StoreName = keyof ReduxState 

// Improve StoreState typing so that the type needs to exetend the value of a key of the reduxState
export const createUseStore = <StoreState, TRawOperations extends object> (rawOperations: TRawOperations, name: StoreName): CreateUseStoreResult<StoreState, TRawOperations> => () => {
  const storeState = useSelector<ReduxState, StoreState>((state) => state[name] as any)
  const dispatch = useDispatch()

  const connectedOperations = useMemo(() => {
    const operationNames = Object.keys(rawOperations) as (keyof TRawOperations)[]
    return operationNames.reduce((acc, operationName) => {
      return {
        ...acc,
        [operationName]: (rawOperations[operationName] as any)(dispatch)
      }
    }, {} as ConnectedOperations<typeof rawOperations>)
  }, [dispatch])


  return {
    operations: connectedOperations,
    storeState
  }
}
