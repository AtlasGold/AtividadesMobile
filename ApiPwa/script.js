const axios = require('axios')    
async function getRandomUser() {
const result = await axios.get('https://random-data-api.com/api/v2/users',{
headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }, params: { trophies: true } })
img.src = result.data.avatar
return (result.data.avatar)
}
