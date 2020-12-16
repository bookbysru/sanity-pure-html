const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "75vm2j5r",
  dataset: "production",
  useCdn: true 
})

module.exports = client;