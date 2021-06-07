const dev = process.env.NODE_ENV !== 'production'

export const imgFolder = dev ? 'http://localhost/lipnonet/kamera/archive' : './../../kamera/archive'