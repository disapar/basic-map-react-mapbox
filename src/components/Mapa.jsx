import React, { useRef, useEffect, useState } from "react";

import mapboxgl,{Marker} from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "YOUR-API-KEY";
const Mapa = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(-59.276512);
  const [lat, setLat] = useState(-35.0007752);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      
    });
    marker.current= new mapboxgl.Marker({ color: 'black'})
    .setLngLat([lng, lat]).setPopup(new mapboxgl.Popup().setHTML(
`<h3>Estoy aquí</h3><p>hola a todos</p>`)).addTo(map.current)
    
  });
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Mapa;
