
const check = function (n) {
    if (n<0){
      return "past due";
    } else 
    if (n<1){
      return "due in 2 hours";
    } 
}

function Alert(props) {
  const newAlert = check(props.timediff)
  return (
    <span className = "alertbox">
      {!newAlert
      ? (<div class="hidden">
        <div class="my-4 block text-snow-700 text-center bg-yellow-100 px-4 py-2">This is the time left {props.timediff} </div>
        </div>)
        //past due
      : (newAlert=="past due" 
        ? (<div class="flow-root bg-yellow-400">
        <div class="my-4 block text-gray-700 text-center bg-red-500 px-4 py-2"><b>{newAlert}</b></div>
        </div>)
        //due soon
        : (<div class="flow-root bg-gray-400">
          <div class="my-4 block text-black-700 text-center bg-yellow-300 px-4 py-2"><em><b>{newAlert}</b></em></div>
          </div>)
        )
      }
    </span>
  );
}

export default Alert