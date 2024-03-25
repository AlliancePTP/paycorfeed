import { convertXML } from 'simple-xml-to-json'
import { useEffect, useState } from 'react'

export async function getJobs() {
  const url =
    'https://corsproxy.io/?' +
    encodeURIComponent(
      'https://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=8a7883d0879c591b0187e3570b4e28cc'
    )

  return fetch(url, {
    cache: 'no-cache'
    // mode: 'no-cors'
  })
    .then((response) => response.text())
    .then((xml) => {
      // Parse the XML into an array
      const parsedJobs = convertXML(xml)
      const filteredJobs = parsedJobs.feed.children.filter((job) => job.entry)

      const mappedJobs = filteredJobs.map((e) => {
        const object = Object.assign({}, ...e.entry.children)
        return object
      })

      return mappedJobs
    })
}
