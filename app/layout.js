import '../styles/globals.css'

export const metadata = {
  title: 'mis notas',
  description: 'mis notas - Una app para guardar un registro de tus notas bien chulas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
