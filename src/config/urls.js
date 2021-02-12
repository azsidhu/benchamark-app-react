export const API = 'http://localhost:8000'
export const clientURL = 'http://localhost:3000'
export const LoginURL = `${API}/accounts/login`
export const RegisterURL = `${API}/accounts/register`
export const FetchProfileURL = `${API}/instagram_benchmark/profile`
export const FetchMediaURL = `${API}/instagram_benchmark/media?page=`
export const FetchMediaDetailURL = `${API}/instagram_benchmark/media/revision`
export const CrawlUserURL = `${API}/instagram_benchmark/profile/crawl`
export const CrawlStatusURL = `${API}/instagram_benchmark/profile/crawl/status`
export const CrawlImagesDownloadURL = `${API}/instagram_benchmark/profile/crawl/zip`
export const InstaRedirect =
  'https://api.instagram.com/oauth/authorize/?client_id=4d8f538893ba481f88c0614865dc9310&redirect_uri=http://127.0.0.1:3000/igconnected&response_type=token'
export const FetchNewDataURL = `${API}/instagram_benchmark/profile/load`
export const HeaderLogoURL =
  'https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg'
