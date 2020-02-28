import axios from 'axios'
function login(params){
    return axios.post('http://api.baxiaobu.com/index.php/home/v1/login',params)
}
function datajson(){
    return axios.get('data.json')
}
export {login,datajson}