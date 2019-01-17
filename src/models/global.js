import Storage from '@/utils/storage'


export default {
    namespace: 'global',
    state: {
        
    },
    subscriptions: {
        setup({ history }) {
            return history.listen(({ pathname, search }) => {
                if(!Storage.get('user')) {
                    history.replace('/user/login')
                }
            })
        }
    }
}