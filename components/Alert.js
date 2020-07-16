import style from '../scss/Footer.module.scss'

export default function Alert(props) {
  console.log("props in my alert", props.timediff)
  return (
    <footer className = {style.footer}>
      <h1>This is the Alert </h1>
    </footer>
  )
}