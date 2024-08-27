import axios from "axios";
const useApi = () => {
  const baseURL = "https://dashboard.jawahiraa.aait-sa.com/api/";
  return axios.create({
    baseURL
  });
};
export {
  useApi as u
};
//# sourceMappingURL=useApi-DFb4zcmQ.js.map
