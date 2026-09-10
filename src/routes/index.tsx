import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { 'http-equiv': 'refresh', content: '0;url=/app' },
      { title: 'Security Check' },
    ],
  }),
  component: Redirect,
})

function Redirect() {
  if (typeof window !== 'undefined') {
    window.location.replace('/app')
  }
  return (
    <noscript>
      <meta httpEquiv="refresh" content="0;url=/app" />
    </noscript>
  )
}
