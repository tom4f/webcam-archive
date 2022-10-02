const dev = process.env.NODE_ENV !== 'production'

//export const serverPath = dev ? 'http://localhost/lipnonet' : './../..'

// if App is in root
export const serverPath = dev ? 'http://localhost/lipnonet' : './..'
//export const serverPath = dev ? 'https://www.frymburk.com' : './..'