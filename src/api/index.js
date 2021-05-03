// import userCenter from 'xxx.js'

import { req } from './request.js';

// 示例请求
// export const getDate = async () => {
//   let res = await req({
//     url: `/api/public/getDate`,
//     method: `GET`,
//   });
//   return res;
// };

export const graphTest = async () => {
  let res = await req({
    url: `/api`,
    method: `POST`,
    data: {
      query: "query MyQuery {jh_bbs_comments {id}}",
    }
  });
  return res;
};
