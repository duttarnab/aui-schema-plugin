import AttributeListPage from './components/Person/AttributeListPage'
import AttributeAddPage from './components/Person/AttributeAddPage'
import AttributeEditPage from './components/Person/AttributeEditPage'
import AttributeViewPage from './components/Person/AttributeViewPage'
import attributeReducer from './redux/reducers/AttributeReducer'
import attributeSaga from './redux/sagas/AttributeSaga'
import { ATTRIBUTE_READ, ATTRIBUTE_WRITE } from '../../app/utils//PermChecker'

const pluginMetadata = {
  menus: [
    {
      title: 'menus.schema',
      icon: 'fa-database',
      children: [
        {
          title: 'menus.person',
          path: '/attributes',
          permission: ATTRIBUTE_READ,
        },
      ],
    },
  ],
  routes: [
    {
      component: AttributeEditPage,
      path: '/attribute/edit:gid',
      permission: ATTRIBUTE_WRITE,
    },
    {
      component: AttributeViewPage,
      path: '/attribute/view:gid',
      permission: ATTRIBUTE_READ,
    },
    {
      component: AttributeAddPage,
      path: '/attribute/new',
      permission: ATTRIBUTE_WRITE,
    },
    {
      component: AttributeListPage,
      path: '/attributes',
      permission: ATTRIBUTE_READ,
    },
  ],
  reducers: [{ name: 'attributeReducer', reducer: attributeReducer }],
  sagas: [attributeSaga()],
}

export default pluginMetadata
