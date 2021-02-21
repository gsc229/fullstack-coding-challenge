export const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:8000/api'
export const loginUrl = process.env.REACT_APP_LOGIN_URL || 'http://localhost:8000/login/'
export const environment = process.env.REACT_APP_ENVIRONMENT
export const isDev = environment === 'development'
export const isDemo = process.env.REACT_APP_DEMO_VERSION === "true"