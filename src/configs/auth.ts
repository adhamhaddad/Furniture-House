export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/jwt/login',
  registerCustomerEndpoint: '/jwt/register',
  registerTenantEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
