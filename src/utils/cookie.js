import Cookies from 'js-cookie'

export default {
    set: (name, value, minutesToExpire = 99999) => {
        Cookies.set(name, value, { expires: 360 })
    },

    get: (name) => {
        return Cookies.get(name)
    },

    remove: (name) => {
        Cookies.remove(name)
    }
}