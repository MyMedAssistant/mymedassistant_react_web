import style from '../scss/MedSchedule.module.scss'

const check = function (n) {
    if (n < 0) {
        return "PAST DUE !!";
    } else
        if (n < 1) {
            return "due soon";
        }
}

function Alert(props) {
    const newAlert = check(props.timediff)
    return (
        <span className="alertbox">
            {!newAlert
                ? (<div className="hidden">
                    <div className="my-4 block text-snow-700 text-center bg-yellow-100 px-4 py-2 w-1/3">This is the time left {props.timediff} </div>
                </div>)
                //past due
                : (newAlert == "PAST DUE !!"
                    ? (<div className="flow-root bg-gray-300 w-1/3">
                        <div className="my-4 block text-black-700 text-center bg-red-400 px-4 py-2 w-3/4"><b>{newAlert}</b></div>
                    </div>)
                    //due soon
                    : (<div className="flow-root bg-gray-300 w-1/3">
                        <div className="my-4 block text-black-700 text-center bg-yellow-300 px-4 py-2 w-3/4"><em><b>{newAlert}</b></em></div>
                    </div>)
                )
            }
        </span>
    );
}

export default Alert
