import Link from 'next/link'

export default function MedItem(props){
  return (
    <>
    <li key={props.schedule.id}>
      <Link href="/medication/[id]" as={`/medication/${props.schedule.id}`}>
        <a><b>User ID:  </b>{props.schedule.user_id_medication}</a>
        {/* <a>Dosage:  {props.schedule.dosage}</a>
        <a>Next Dosage: {props.schedule.next_dosage}</a>
        <a>End Dosage:  {props.schedule.end}</a> */}
      </Link>
    </li>
    <li>Dosage: {props.schedule.dosage}</li>
    <li>Next Dose is Due: {props.schedule.next_dosage}</li>
    <li>When prescription ends: {props.schedule.end}</li>
    <br></br>
    </>
  )
}
