import axios from "axios";

export const countriesWithCodes = async () => {
  try {
    const result = await axios.get(
      "https://restcountries.com/v2/all?fields=callingCodes,alpha2Code"
    );
    console.log(result);
    return { error: false, data: result.data };
  } catch (e) {
    return { error: true, data: e };
  }
};
