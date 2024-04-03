import { convertXML } from 'simple-xml-to-json'

export async function getJobs() {
  const url =
    'https://cors-proxy.aptp-account.workers.dev/?' +
    'https://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=8a7883d0879c591b0187e3570b4e28cc'

  return fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'x-cors-headers': JSON.stringify({
        // allows to send forbidden headers
        // https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
        cookies: 'x=123'
      })
    }
  })
    .then((response) => response.text())
    .then((xml) => {
      // Parse the XML into an array
      const parsedJobs = convertXML(xml)
      const filteredJobs = parsedJobs.feed.children.filter((job) => job.entry)
      const states = []

      const mappedJobs = filteredJobs.map((e) => {
        const object = Object.assign({}, ...e.entry.children)
        // console.log('states', e.entry.children[14]['newton:state'].content)
        if (e.entry.children[14]['newton:state']?.content !== undefined) {
          states.indexOf(e.entry.children[14]['newton:state'].content) === -1
            ? states.push(e.entry.children[14]['newton:state'].content)
            : null
        }
        return object
      })
      return {
        jobs: mappedJobs,
        states: states
      }
    })
}
