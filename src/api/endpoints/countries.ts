import axios from "axios";

export const countryKeys = {
  all: ["countries"] as const, // Fixed key name from "categories" to "countries"
  lists: () => [...countryKeys.all, "list"] as const,
};

export const fetchCountryList = async () => {
  try {
    const { data } = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/states"
    );
    return data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    // Return a fallback data structure in case of API failure
    return {
      error: false,
      msg: "fallback countries data",
      data: [
        { name: "United States", iso2: "US", iso3: "USA", states: [] },
        { name: "Canada", iso2: "CA", iso3: "CAN", states: [] },
        { name: "United Kingdom", iso2: "GB", iso3: "GBR", states: [] },
        { name: "Australia", iso2: "AU", iso3: "AUS", states: [] },
        { name: "India", iso2: "IN", iso3: "IND", states: [] },
      ],
    };
  }
};
