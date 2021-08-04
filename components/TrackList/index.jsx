import React from 'react'

import Track from '../Track'

const TrackList = (props) => {
  const { tracks } = props

  const renderTrack = (track) => {
    return <Track key={track.url} {...track} />
  }

  return tracks.map(renderTrack)
}

export default TrackList
