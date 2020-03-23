import React, { useState } from 'react'
import DeckGL from '@deck.gl/react'
import MapGL from 'react-map-gl'
import Popover from './components/Popover'
import './App.css'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
const MAPBOX_STYLE = process.env.REACT_APP_MAP_STYLE

const App = (props) => {
  const layers = [
    // new LineLayer({id: 'line-layer', data})
  ]
  const [expanded, setExpanded] = useState(false)
  const popoverClass = `popover ${expanded ? 'expand' : 'shrink'}`
  const [viewport, setViewport] = useState({
    longitude: 47.52186,
    latitude: -18.91449,
    zoom: 11.97,
    bearing: 0,
    pitch: 30
  })

  return (
    <div>
      <DeckGL
        initialViewState={viewport}
        controller
        layers={layers}
        onClick={() => setExpanded(false)}
      >
        <MapGL
          {...viewport}
          width='100vw'
          height='100vh'
          maxPitch={85}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle={MAPBOX_STYLE}
          onViewportChange={value => setViewport(value)}
        />
      </DeckGL>
      <Popover {...{ popoverClass, setExpanded }} />
    </div>
  )
}

export default App
