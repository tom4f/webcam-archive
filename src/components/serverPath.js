const dev = process.env.NODE_ENV !== 'production'

export const serverPath = dev ? 'http://localhost/lipnonet' : './../..'