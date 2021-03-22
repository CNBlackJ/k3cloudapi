function validOptions (options, skipKeys = []) {
  const dumOpeitons = { ...options }
  skipKeys.forEach(key => {
    delete dumOpeitons[key]
  })
  const emptyValue = Object.values(dumOpeitons).find(e => !e || e.length === 0)
  return !emptyValue
}

module.exports = validOptions
