import Link from 'next/link'

export default function MedItem(props){
  return (
    <li key={props.med.id}>
      <Link href="/medication/[id]" as={`/medications/${props.med.id}`}>
        <a>{props.med.name}</a>
      </Link>
    </li>
  )
}