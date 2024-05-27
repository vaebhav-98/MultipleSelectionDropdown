"use client";

import MultiSelectInputDropdown from "@/components/MultiSelectInputDropdown";
import { COUNTRIES } from "@/assets/Country";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl mt-12">Multi-Select Dropdown</h1>
      <form action="/api" method="post" className="mt-5">
        <MultiSelectInputDropdown
          formFieldName={"countries"}
          options={COUNTRIES}
          onChange={(selectedCountries) => {
            console.debug("selectedCountries", selectedCountries);
          }}
          prompt="Select one or more countries"
        />
        <input
          type="submit"
          className="bg-blue-500 text-white rounded px-5 py-2 mt-5 cursor-pointer"
        />
      </form>
    </main>
  );
}
