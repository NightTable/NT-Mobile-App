import { Axios } from "axios";
import { COUNTRY_CODE, LOCAL_URL, LOCAL_URL_HOME_VG } from "@env";

//axios
import { GetRequest } from "../Utils/Axios";

//get countries code

export const getCountriesCode = async () => {


  console.log(`${LOCAL_URL}${COUNTRY_CODE}`);
  const data = await GetRequest(`${LOCAL_URL}${COUNTRY_CODE}`, "");
  return data;
};
