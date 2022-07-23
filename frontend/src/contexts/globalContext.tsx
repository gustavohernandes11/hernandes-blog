import { createContext } from 'react'
import { initialGlobalState } from './initialGlobalState'

const globalState = createContext(initialGlobalState);

