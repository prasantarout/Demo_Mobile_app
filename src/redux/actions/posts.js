import axios from 'axios';
import {POSTS,DELETE_POSTS,UPDATES, GET} from '../../config/urls'

export function getPosts(data){
    return axios.get(POSTS)
}
export function getData(id){
    return axios.get(GET + `${id}`)
}
export function deletePost(id){
    return axios.delete(DELETE_POSTS + `${id}`)
}
export function updatePost(id){
    return axios.put(UPDATES + `${id}`)
}