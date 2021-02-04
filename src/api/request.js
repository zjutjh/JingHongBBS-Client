export const req = async (obj) => {
  try {
    let [error, res] = await uni.request(obj);
    return res.data;
  } catch (error) {
    console.log('error! ', error);
  }
};
