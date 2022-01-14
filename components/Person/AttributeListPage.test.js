import React from 'react'
import { render, screen } from '@testing-library/react'
import AttributeListPage from './AttributeListPage'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import i18n from '../../../../app/i18n'
import { I18nextProvider } from 'react-i18next'
import attributes from './attributes'

const permissions = [
  'https://jans.io/oauth/config/attributes.readonly',
  'https://jans.io/oauth/config/attributes.write',
  'https://jans.io/oauth/config/attributes.delete',
]
const INIT_STATE = {
  permissions: permissions,
}

const INIT_ATTRIBUTE_STATE = {
  items: [attributes[0]],
  item: {},
  loading: false,
}
const store = createStore(
  combineReducers({
    authReducer: (state = INIT_STATE) => state,
    attributeReducer: (state = INIT_ATTRIBUTE_STATE) => state,
    noReducer: (state = {}) => state,
  }),
)

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>{children}</Provider>
  </I18nextProvider>
)

it('Should render the attribute list page properly', () => {
  render(<AttributeListPage />, {
    wrapper: Wrapper,
  })
  const inum = attributes[0].inum
  const displayName = attributes[0].displayName
  screen.getByText(/Inum/)
  screen.getByText(/Display Name/)
  screen.getByText(/Status/)
  screen.getByText(inum)
  screen.getByText(displayName)
})
