import axios from "axios";
import { useEffect, useState } from "react";
import { CountryDetailsType } from "../types/types";

const HTTP_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [countries, setCountries] = useState<CountryDetailsType[]>([]);

  useEffect(() => {
    async function getAllCountries() {
      try {
        const response = await axios.get(HTTP_COUNTRIES_URL);
        console.log("response", response);
        setCountries(response.data);
      } catch (e) {
        console.log("e", e);
      }
    }

    getAllCountries();
  }, []);

  return (
    <>
      {countries?.map((country) => {
        return (
          <div key={country.fifa}>
            <p>{country.name.official}</p>
          </div>
        );
      })}
    </>
  );
}
