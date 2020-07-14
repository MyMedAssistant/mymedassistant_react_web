import Nav from '../components/Nav'
import Footer from '../components/Footer'
import style from '../scss/AboutPage.module.scss'

export default function About(){
  return(
    <>
      <Nav page="about"/>
        <div className={style.aboutpage}>
          <h1>About Page</h1>
        </div>
      <Footer />
    </>
  )
  
}