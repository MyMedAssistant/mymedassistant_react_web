import Link from 'next/link'

export default function MedItem(props){
  console.log("I am inside the meditem with this id: and id", props.schedule.id);
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
    <li><b>Dosage: </b> {props.schedule.dosage}</li>
    <li><b>Next Dosage: </b>{props.schedule.next_dosage}</li>
    <li><b>Last Dosage:  </b>{props.schedule.end}</li>
    <br></br>
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