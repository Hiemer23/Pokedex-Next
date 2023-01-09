import '../styles/globals.css'
import About from './about'
import Layout from './components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
