import data from '../data/curry_reg.json'

export function getHeaders() {
  return data.resultSets[0].headers[24]
}

export function getPoints() {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[24] }))
}

export function getPM() {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[25] }))
}

export function getTO() {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[22] }))
}
