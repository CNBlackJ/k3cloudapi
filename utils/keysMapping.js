function keysMapping (keys, values) {
  const results = []
  for (let i = 0; i < values.length; i++) {
    const value = values[i]
    const result = {}
    if (keys.length !== value.length) {
      console.log('keysMapping with invalid length.')
    } else {
      keys.forEach((key, i) => (result[key] = value[i]))
      results.push(result)
    }
  }
  return results
}

module.exports = keysMapping
