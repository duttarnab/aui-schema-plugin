import {
  GET_ATTRIBUTES,
  GET_ATTRIBUTES_RESPONSE,
  ADD_ATTRIBUTE,
  ADD_ATTRIBUTE_RESPONSE,
  EDIT_ATTRIBUTE,
  EDIT_ATTRIBUTE_RESPONSE,
  DELETE_ATTRIBUTE,
  DELETE_ATTRIBUTE_RESPONSE,
  SET_ATTRIBUTE_ITEM,
  SEARCH_ATTRIBUTES,
} from './types'

export const getAttributes = (options) => ({
  type: GET_ATTRIBUTES,
  payload: { options },
})

export const searchAttributes = (options) => ({
  type: SEARCH_ATTRIBUTES,
  payload: { options },
})

export const getAttributesResponse = (data) => ({
  type: GET_ATTRIBUTES_RESPONSE,
  payload: { data },
})
export const addAttribute = (data) => ({
  type: ADD_ATTRIBUTE,
  payload: { data },
})
export const addAttributeResponse = (data) => ({
  type: ADD_ATTRIBUTE_RESPONSE,
  payload: { data },
})

export const editAttribute = (data) => ({
  type: EDIT_ATTRIBUTE,
  payload: { data },
})
export const editAttributeResponse = (data) => ({
  type: EDIT_ATTRIBUTE_RESPONSE,
  payload: { data },
})

export const deleteAttribute = (inum) => ({
  type: DELETE_ATTRIBUTE,
  payload: { inum },
})

export const deleteAttributeResponse = (inum) => ({
  type: DELETE_ATTRIBUTE_RESPONSE,
  payload: { inum },
})

export const setCurrentItem = (item) => ({
  type: SET_ATTRIBUTE_ITEM,
  payload: { item },
})
