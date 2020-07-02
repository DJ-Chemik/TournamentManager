import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css"

const libraries = ["places"];

const mapContainerStyle = {
    width: "30rem",
    height: "30rem"
};

const center = {
    lat: 52.228798,
    lng: 18.250995
}

export default function GoogleMapComponent() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAlGALV_R8UeWeoDjDAKykaqvbE8YAHPs0",
        libraries
    });

    if(loadError) return <div>"Error loading maps";</div>
    if(!isLoaded) return <div>"Loading Maps";</div>

    return(
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
            />
        </div>
    )
}