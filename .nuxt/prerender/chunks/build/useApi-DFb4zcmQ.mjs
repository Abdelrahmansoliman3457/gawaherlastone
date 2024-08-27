import axios from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/axios/index.js';

const useApi = () => {
  const baseURL = "https://dashboard.jawahiraa.aait-sa.com/api/";
  return axios.create({
    baseURL
  });
};

export { useApi as u };
//# sourceMappingURL=useApi-DFb4zcmQ.mjs.map
