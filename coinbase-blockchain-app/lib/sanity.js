
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'r0608fwk',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'sk8Rmaa5iwlJqXd4uSVLWRV5kHzlHMlNCi7xPYfsKch7qN66ARYFIZj9qCWPNpfeMwfrrdajlH2AdgqIPEkmkxZ3sHL7V9cbRmvdWBjb8wcHrB460h7mW8wjzLMi3PsjyzlxtZ2xvfhGCmfzDgNCTrED9uAKLjisVz9infXeqfslfYrPa6ra', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})