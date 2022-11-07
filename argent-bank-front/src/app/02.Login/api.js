import Axios from 'axios'
import {CONFIG} from '../../config.js'

export default class LoginAPI {
    static async Login (email, password){
        const res = await Axios({
            method: 'post',
            url: CONFIG.BASE_URL + '/login',
            header:{

            },
            data:{
                email,
                password
            }
        })
        return res.data
    }
}
