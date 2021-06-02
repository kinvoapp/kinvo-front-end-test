import { getMyFix } from '../../store/ducks/local/actions'
import { LocalTypes } from '../../store/ducks/local/types'
import { NotifyTypes } from '../../store/ducks/notify/types'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

jest.mock('axios', () => {
  return {
    get: jest.fn(),
    post: jest.fn()
  }
})

const middlewares: any = [thunk]
const mockStore = configureStore(middlewares)

describe('actions', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should create all actions instances for dispatch get subpage success', async () => {
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
      {
        data: { token: 'jwt-example' }
      }
    )

    const initialState = {}
    const store = mockStore(initialState)

    const expectedPayload = [
      NotifyTypes.SET_LOADING,
      LocalTypes.TOGGLE_MY_FIX,
      NotifyTypes.SET_LOADING
    ]

    return store.dispatch<any>(getMyFix()).then(() => {
      const actions = store.getActions().map(action => action.type)
      expect(actions).toEqual(expectedPayload)
    })
  })
  it('should create all actions instances for dispatch get subpage failed', async () => {
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
      {
        data: {
          error: true,
          success: null
        }
      }
    )

    const initialState = {}
    const store = mockStore(initialState)

    const expectedPayload = [
      NotifyTypes.SET_LOADING,
      NotifyTypes.SET_MESSAGE,
      NotifyTypes.SET_LOADING
    ]

    return store.dispatch<any>(getMyFix()).then(() => {
      const actions = store.getActions().map(action => action.type)
      expect(actions).toEqual(expectedPayload)
    })
  })
})
