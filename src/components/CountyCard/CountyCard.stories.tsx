import { CountryCard } from "./CountryCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Cards/CountryCard",
  component: CountryCard,
  tags: ["autodocs"],
} satisfies Meta<typeof CountryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EuropeanCountry: Story = {
  args: {
    name: {
      official: "Republic of Kenya",
      common: "Kenya",
    },
    capital: ["Nairobi"],
    population: 53771300,
    flags: {
      alt: "The flag of Kenya is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. An emblem comprising a red, black and white Maasai shield covering two crossed white spears is superimposed at the center of the field.",
      png: "https://flagcdn.com/w320/ke.png",
      svg: "https://flagcdn.com/ke.svg",
    },
    languages: {
      eng: "English",
      swa: "Swahili",
    },
    continents: ["Africa"],
    region: "Africa",
  },
};
