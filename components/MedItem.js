import Link from 'next/link'

export default function MedItem(props){
  return (
    <>
    <li key={props.schedule.id}>
      <Link href="/medication/[id]" as={`/medications/${props.schedule.id}`}>
        <a>{props.schedule.user_id_medication}</a>
      </Link>
    </li>
    <li>{props.schedule.dosage}</li>
    <li>{props.schedule.next_dosage}</li>
    <li>{props.schedule.end}</li>
    </>
  )
}

// "id": 1,
// "user": 1,
// "medication": 1,
// "hours": 0,
// "dosage": "60mg",
// "start": "2020-07-14T15:04:00Z",
// "next_dosage": "2020-07-15T15:04:00Z",
// "end": "2020-07-30T15:05:00Z",
// "user_id_medication": "Vij_insulin_test"