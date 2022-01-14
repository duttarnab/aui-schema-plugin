import React from 'react'
import { render, screen } from '@testing-library/react'
import AttributeDetailPage from './AttributeDetailPage'
import i18n from '../../../../app/i18n'
import attributes from './attributes'
import { I18nextProvider } from 'react-i18next'

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
)
const permissions = [
  'https://jans.io/oauth/config/attributes.readonly',
  'https://jans.io/oauth/config/attributes.write',
  'https://jans.io/oauth/config/attributes.delete',
]
const row = attributes[0]

it('Should render the attribute detail page properly', () => {
  render(<AttributeDetailPage row={row} permissions={permissions} />, {
    wrapper: Wrapper,
  })
  screen.getByText(/Display Name/)
  screen.getByText(/Description/)
  screen.getByText(/Status/)
  screen.getByText(/Attribute Edit Type/)
  screen.getByText(/Attribute View Type/)
})
