import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link href="/schedule">
              <a>Schedule</a>
        </Link>
        <Link href="/about">
              <a>About Us</a>
        </Link>
        <Link href="/form">
              <a>Add Med</a>
        </Link>
      </ul>
    </nav>
  )
}