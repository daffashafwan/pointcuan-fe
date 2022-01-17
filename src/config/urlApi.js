import { read_cookie } from 'sfcookies';

export var HEADER_API_ADMIN = {
    headers: {
        'Authorization': 'Bearer ' + read_cookie('jwt_admin')
    }
}

export var HEADER_API = {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': 'Bearer ' + read_cookie('user_jwt')
    }
}


export const BASE_URL_API = "http://localhost:1223/";