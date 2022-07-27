import { React, useState, useEffect } from "react";
import { countriesWithCodes } from "@SilalApp/common/components/web/services/CountriesApi/index";
import { Icon } from "@iconify/react";
// import FormControl from '../../../';
import FormControl from "./../../../../../SellerWeb/src/views/components/auth/FormControl/FormControl";
// import FormControl from "@SilalApp/sellerweb/src/views/components/auth/FormControl/FormControl";

export default function CountrySelectForm({ setSelectedCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
    console.log("Hello world.");
  }, []);

  const getCountries = async () => {
    const result = await countriesWithCodes();
    if (result.error) {
      alert(result.data);
      return;
    }
    const data = result.data.map((item, index) => {
      return {
        label: `${item.alpha2Code} + ${item.callingCodes[0]}`,
        value: "+" + item.callingCodes[0],
        default: index === 0 ? true : false,
      };
    });
    setCountries(data);
  };

  return (
    <FormControl
      style={{ border: "none", padding: "5px" }}
      select={true}
      options={countries}
      onChange={(country) => setSelectedCountry(country)}
      dropdownIcon={
        <Icon icon="ant-design:caret-down-filled" color="#05AE4B" />
      }
    />

    // <>
    //   <input type={"text"} />
    //   <select>
    //     <option value="1">Option1</option>
    //     <option value="1">Option2</option>
    //     <option value="1">Option3</option>
    //   </select>
    // </>
  );
}
