import * as Constants from './constants'

// Set Actions
export const setLoading = (payload) => {
  return {
    type: Constants.SET_LOADING,
    payload,
  }
}

// Update Actions
export const updateField = (object) => {
  return {
    type: Constants.UPDATE_FIELD,
    object,
  }
}

// Reset Actions
export const resetFormValues = () => {
  return {
    type: Constants.RESET_FORM_VALUES,
  }
}
