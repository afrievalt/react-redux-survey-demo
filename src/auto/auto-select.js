const changeCase = () => 'nomore'
export const selectTableHeaders = (path, state) => {
  const allIds = state[path + '_allIds'] || []
  const byId = state[path + '_byId'] || {}
  const firstId = allIds[0]
  const firstRecord = byId[firstId] || {}
  const keys = Object.keys(firstRecord)
  const mapKeyTitles = (key) => changeCase.sentence(key)
  return keys.map(mapKeyTitles)
}

export const selectRows = (path, state) => {
  const allIds = state[path + '_allIds'] || []
  const byId = state[path + '_byId'] || {}
  const firstId = allIds[0]
  const firstRecord = byId[firstId] || {}
  const keys = Object.keys(firstRecord)
  const mapRow = row => {
    const mapCell = field => byId[row][field]
    const cells = keys.map(mapCell)
    return [row, ...cells]
  }
  return allIds.map(mapRow)
}

export const selectRowObjects = (path, state) => {
  const allIds = state[path + '_allIds'] || []
  const byId = state[path + '_byId'] || {}
  const mapRow = row => ({
    ...byId[row],
    _key_:  row
  })
  return allIds.map(mapRow)
}
