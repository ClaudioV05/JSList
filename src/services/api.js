import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api '
});