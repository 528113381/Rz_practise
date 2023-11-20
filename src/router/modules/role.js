import Layout from '@/layout'

export default {
  path: '/role',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Role',
      component: () => import('@/views/role/index'),
      meta: { title: '角色', icon: 'dashboard' }
    }
  ]
}