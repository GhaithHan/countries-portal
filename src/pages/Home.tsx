import axios from "axios";
import { useEffect, useState } from "react";
import { CountryDetailsType } from "../types/types";
import { CountryCard } from "../components/CountyCard/CountryCard";

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
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-3 lg:gap-8 p-6 lg:p-12 md:p-8 md:gap-6">
      {countries?.map((country) => {
        return (
          <CountryCard
            key={country.cca3}
            name={country.name}
            population={country.population}
            capital={country.capital}
            flags={country.flags}
            region={country.region}
            continents={country.continents}
            languages={country.languages}
          />
        );
      })}
    </div>
  );
}
