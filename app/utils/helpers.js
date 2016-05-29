import data from '../data/curry_reg.json'

export function getHeaders () {
  return data.resultSets[0].headers[24]
}

export function getPoints () {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[24] }))
}

export function getPM () {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[25] }))
}

export function getTO () {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[22] }))
}

export function getThrees () {
  return data.resultSets[0].rowSet.map((val, idx) => ({ x: idx, y: val[10] }))
}

export function getTotalThrees () {
  let total = 0
  return data.resultSets[0].rowSet.map((val, idx) => {
    total += val[10]
    return { x: idx, y: total }
  })
}
