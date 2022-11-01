import { useState, useEffect } from "react";

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class TempGMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 11.0186253,
            lng: 77.004836,
          }}
          zoom={14}
        >
          <Marker
            title={"PSG Hospitals"}
            name={"PSG"}
            position={{ lat: 11.0186253, lng: 77.004836 }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDRQluoYkfMB6rcChCmuyqtX-cg4VqSveU",
})(TempGMaps);

