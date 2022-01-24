import { read_cookie } from 'sfcookies';

export var HEADER_API_ADMIN = {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json',
        //'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': 'Bearer ' + read_cookie('jwt_admin')
    }
}

export var HEADER_API = {
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json',
        //'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': 'Bearer ' + read_cookie('jwt_user')
    }
}


// export const BASE_URL_API = "http://ec2-18-222-12-16.us-east-2.compute.amazonaws.com:1223/";
export const BASE_URL_API = "http://localhost:1223/";