import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import mapMarkerImg from "../images/map-marker.svg";

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

      <div></div>
      <Link to="" className="create-orphanages">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
