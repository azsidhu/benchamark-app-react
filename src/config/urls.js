const API = 'http://localhost:8000'
const LoginURL = `${API}/accounts/login`
const RegisterURL = `${API}/accounts/register`
const FetchProfileURL = `${API}/instagram_benchmark/profile`
const FetchMediaURL = `${API}/instagram_benchmark/media`
const InstaRedirect =
  'https://api.instagram.com/oauth/authorize/?client_id=4d8f538893ba481f88c0614865dc9310&redirect_uri=http://127.0.0.1:3000/igconnected&response_type=token'

export { LoginURL, RegisterURL, FetchProfileURL, FetchMediaURL, InstaRedirect }
