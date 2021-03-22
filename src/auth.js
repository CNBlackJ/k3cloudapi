const config = require('../config/dev')
const request = require('../libs/request')

async function auth (username = 'Administrator') {
  const { accid, lcid } = config
  const { appid, appsecret } = config.auth
  const parameters = [ accid, username, appid, appsecret, lcid ]
  const { authPath } = config.apis
  const payload = { parameters }

  const { headers, data } = await request.post(authPath, payload)
  const { IsSuccessByAPI } = data
  if (!IsSuccessByAPI) return null
  if (IsSuccessByAPI) {
    const cookie = headers['set-cookie'] || []
    return cookie.join(';')
  }
}

module.exports = auth
