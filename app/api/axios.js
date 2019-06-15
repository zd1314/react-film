import axios from 'axios';
import querystring from 'querystring';
//post
export function axiosPost(url, params, callback, errorcallback) {
  let config = {
    'headers': { 'Content-Type': 'application/x-www-form-urlencoded' }
  }

  axios.post(url, querystring.stringify(params))
    .then(result => callback(result))
    .catch(e => { console.log('Ops', 'error', e); if (errorcallback != null) { errorcallback(e) } });
}
//get
export function axiosGet(url, callback, errorcallback) {
  let data = {
    'headers': { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  axios.get(url, data)
    .then(result => callback(result))
    .catch(e => { console.log("Ops, error", e); if (errorcallback != null) { errorcallback(e); } });
}
