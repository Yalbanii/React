import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'
import Menu from '/src/components/Menu.jsx'

export default function Home(){
  return(
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}