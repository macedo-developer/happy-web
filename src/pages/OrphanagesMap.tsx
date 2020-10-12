import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import mapMarkerImg from "../images/map-marker.svg";

import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita</p>
        </header>

        <footer>
          <strong>João Pessoa</strong>
          <span>Paraíba</span>
        </footer>
      </aside>

      <Map
        center={[-7.1630565, -34.8803117]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      </Map>
      <Link to="" className="create-orphanages">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
