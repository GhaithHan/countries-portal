import {
  ContinentType,
  FlagsType,
  LanguagesType,
  NameType,
  RegionType,
} from "../../types/types";
import clsx from "clsx";
import { useHover } from "../../hooks/useHover";

type CountryCardProps = {
  name: NameType;
  population: number;
  capital?: string[];
  flags: FlagsType;
  region?: RegionType;
  languages?: LanguagesType;
  continents: ContinentType[];
  onClick?: () => void;
};

export function CountryCard({
  name,
  population,
  capital,
  flags,
  region,
  continents,
}: CountryCardProps) {
  const { onmouseleave, onmouseover, showDetails } = useHover();

  return (
    <div
      className={clsx(
        "cursor-pointer shadow-md h-full w-full font-merriweather relative rounded-t-xl",
        !showDetails && "rounded-b-xl"
      )}
      onMouseOver={onmouseover}
      onMouseLeave={onmouseleave}
    >
      <img
        className="rounded-t-xl w-full lg:h-64 h-32 lg:object-cover"
        src={flags.png}
        alt={flags.alt}
      />
      <p className="font-bold lg:text-xl pl-2 text-lg">{name.official}</p>

      <div
        className={clsx(
          "pl-2 pb-2 absolute bg-white w-full z-50 rounded-b-xl text-sm lg:text-lg transition-opacity duration-500",
          showDetails ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="font-semibold">
          Capital: {capital?.find((cap) => typeof cap === "string")}
        </p>
        <p className="font-normal">Population: {population}</p>
        <p className="font-normal">Continent: {continents}</p>
        <p className="font-normal">Region: {region}</p>
      </div>
    </div>
  );
}
