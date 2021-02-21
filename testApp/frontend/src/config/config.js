export const baseUrl = process.env.REACT_APP_ROUTINES_BASE_URL || 'http://localhost:8000/api/'
export const environment = process.env.REACT_APP_ENVIRONMENT
export const isDev = environment === 'development'
export const isDemo = process.env.REACT_APP_DEMO_VERSION === "true"