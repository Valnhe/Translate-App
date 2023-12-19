
import { useReducer } from "react"

const initialState = {
    fromLanguage: 'en',
    toLanguage: 'fr',
    fromText: 'Hello, how are you?',
    result: 'Bonjour, comment allez-vous?',
    loading: false
  }
  
  function reducer (state, action) {
    const { type } = action
  
    if (type === 'INTERCHANGE_LANGUAGES') {
  
      return {
        ...state,
        fromText: state.result,
        result: state.fromText,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
  
    if (type === 'SET_FROM_LANGUAGE') {
  
      return {
        ...state,
        fromLanguage: action.payload,
        result: '',
      }
    }
  
    if (type === 'SET_TO_LANGUAGE') {
  
      return {
        ...state,
        toLanguage: action.payload,
        result: '',
      }
    }
  
    if (type === 'SET_FROM_TEXT') {
  
      return {
        ...state,
        fromText: action.payload,
        result: ''
      }
    }
  
    if (type === 'SET_RESULT') {
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    return state
  }

  export function useTranslation () {
    const [{
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading
    }, dispatch] = useReducer(reducer, initialState)
  
    const interchangeLanguages = () => {
      dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }
  
    const setFromLanguage = (payload) => {
      dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }
  
    const setToLanguage = (payload) => {
      dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }
  
    const setFromText = (payload) => {
      dispatch({ type: 'SET_FROM_TEXT', payload })
    }
  
    const setResult = (payload) => {
      dispatch({ type: 'SET_RESULT', payload })
    }
  
    return {
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading,
      interchangeLanguages,
      setFromLanguage,
      setToLanguage,
      setFromText,
      setResult
    }
  }
  