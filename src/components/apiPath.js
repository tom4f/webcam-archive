const dev = process.env.NODE_ENV !== 'production'

export const imgPath = dev ? 'http://localhost/lipnonet' : './../..'