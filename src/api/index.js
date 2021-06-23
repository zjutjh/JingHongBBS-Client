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

export const querys = {
  test: "query MyQuery {jh_bbs_comments {id}}"
}

export const graphql = async (query) => {
  let res = await req({
    url: `/api`,
    method: `POST`,
    data: {
      query
    }
  });
  return res;
};
