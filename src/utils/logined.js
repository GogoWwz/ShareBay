import Storage from '@/utils/storage'

const LOGIN_PAGE = [
    '/user/login',
    '/user/register'
]

export default pathname => {
    if(LOGIN_PAGE.includes(pathname)) {
        return true
    }
    if(Storage.get('user')) {
        return true 
    }
    return false
}