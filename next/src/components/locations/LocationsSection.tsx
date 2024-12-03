import * as React from "react";
import {LocationCard} from "./LocationCard";
import {locationData} from "./locationData";

export function LocationsSection() {
    return (
        <section
            className="green50 flex flex-col justify-center items-center px-16 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full"
            aria-label="Office Locations"
        >
            <div className="-mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    {locationData.map((location, index) => (
                        <LocationCard key={index} location={location}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
