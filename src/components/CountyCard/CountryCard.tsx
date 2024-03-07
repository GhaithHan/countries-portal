import { CountryDetailsType } from "../../types/types";

type CountryCardProps = {
  name: string;
  population: number;
  capital: string[];
  flags: CountryDetailsType["flags"];
  region: CountryDetailsType["continents"];
  languages: CountryDetailsType["languages"];
  continents: CountryDetailsType["continents"];
};

export function CountryCard({
  name,
  population,
  capital,
  flags,
  region,
  languages,
  continents,
}: CountryCardProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{capital}</p>
      <p>{population}</p>
      <p>{population}</p>
      <img src={flags.png} alt={flags.alt} />
      <ul>
        {languages &&
          Object.entries(languages).map((language) => {
            return <li>{language}</li>;
          })}
      </ul>
      <p>{continents}</p>
      <p>{region}</p>
    </div>
  );
}
