/*ajax 请求函数模块
* 之所以返回一个Promise对象，是因为axios发送请求之后返回的是一个Promise对象
* 带着服务器的响应response返回，再外嵌套一层Promise则可以将response.data
* 返回给调用该ajax方法的对象。就可以直接操作服务器返回的数据。
* */
import axios from "axios";
export default function ajax(url,data={},type='GET'){
  return new Promise(function (resolve,reject) {
    let promise;
    if(type === 'GET'){
    //  准备url与query参数的拼接
      let dataStr = '';
      Object.keys(data).forEach(key =>{
        dataStr += key + '=' +data[key] + '&'
      });
      if(dataStr !== ''){
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url +'?' +dataStr;
      }

      //  发送get请求
      promise = axios.get(url);
    }else{
      promise = axios.post(url,data);
    }

    promise.then(res =>{
      resolve(res.data);
    }).catch(err=>{
      reject(err);
    })
  })
}
