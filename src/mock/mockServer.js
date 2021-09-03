/*使用mock.js 提供mock接口*/

import Mock from 'mockjs'
import data from './data';

//返回goods的接口
Mock.mock('/goods', {code:1, data:data.goods});

Mock.mock('/comment', {code:1, data:data.ratings});

Mock.mock('/info', {code:1, data:data.info});




