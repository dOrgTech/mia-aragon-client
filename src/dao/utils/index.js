import { DAO_CONFIG } from '../config';

// FORCE routing to MIA-DAO
export const openOrg = (url = DAO_CONFIG.url) => {
  console.log('window.location.hash.length1', window.location.hash.length)
  if(window.location.hash.length === 0) {
    window.location.hash = `#/${url}`
  }
  console.log('window.location.hash.length2', window.location.hash.length)
}