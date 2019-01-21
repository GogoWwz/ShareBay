import isLogin from '@/utils/logined'


export default {
    namespace: 'global',
    state: {
        
    },
    subscriptions: {
        setup({ history }) {
            return history.listen(({ pathname, search }) => {
                if(!isLogin(pathname)) {
                    history.replace('/user/login')
                }
            })
        }
    }
}