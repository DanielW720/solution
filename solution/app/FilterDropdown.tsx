"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Filter } from "./Filter";

export const FilterDropdown = () => {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="w-[225px]">
        <Filter />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[225px] mt-2">
          <DropdownMenu.Group className="bg-white dark:bg-darkBlue w-full rounded-md p-4 shadow-mdSymmetric">
            {["Africa", "America", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <DropdownMenu.Item key={region} className="font-semibold my-1">
                  {region}
                </DropdownMenu.Item>
              )
            )}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
