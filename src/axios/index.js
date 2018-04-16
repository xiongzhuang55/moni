import vue from 'vue'
import axios from 'axios'
import 'babel-polyfill'

let instance = axios.create({
  method: 'post',
  baseURL: process.env.HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
});

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {params: params})
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      })
  })
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      })
  });
}
