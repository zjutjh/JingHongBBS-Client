// import userCenter from 'xxx.js'

import { req } from './request.js';

// 普通请求
// export const getDate = async () => {
//   let res = await req({
//     url: `/api/public/getDate`,
//     method: `GET`,
//   });
//   return res;
// };


// graghql请求
export const querys = {
  test: "query MyQuery {jh_bbs_comments {id}}",
  test2: "..."
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
