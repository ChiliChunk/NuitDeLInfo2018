import React, {Component} from "react";
import L from "leaflet"
import '../Map.css';

class Maps extends Component {

  displayCurrentLocation(){

  }

  componentDidMount(){
    this.initMap();
    this.displayCurrentLocation();
  }

  initMap() {

    var macarte = null;
    
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((function (position) {
            macarte = L.map('map').setView([position.coords.latitude, position.coords.longitude], 11);
            // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
              attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
              minZoom: 1,
              maxZoom: 20
            }).addTo(macarte);

            var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(macarte);
            marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
        }));
    } else {
        alert("Localisation impossible");
    }

  }

  render() {

    return (

        <div id="map"/>

    );
  }
}
export default Maps
