// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const defaultTracks = [
  { name: 'some-track-1', url: 'some-url-1' },
  { name: 'some-track-2', url: 'some-url-2' },
  { name: 'some-track-3', url: 'some-url-3' },
  { name: 'some-track-4', url: 'some-url-4' },
  { name: 'some-track-5', url: 'some-url-5' },
]

export default (req, res) => {
  res.statusCode = 200
  res.json({ tracks: defaultTracks })
}
