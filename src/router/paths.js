/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/authorization',
    name: 'Authorization',
    view: 'Authorization'
  },
  {
    path: '/pharmacies',
    name: 'Pharmacies',
    view: 'Pharmacies'
  },
  {
    path: '/pharmacies/:id',
    name: 'PharmaciesInfo',
    view: 'PharmaciesInfo'
  },
  {
    path: '/companies',
    name: 'Companies',
    view: 'Companies'
  },
  {
    path: '/companies/:id',
    name: 'CompaniesInfo',
    view: 'CompaniesInfo'
  }
]
