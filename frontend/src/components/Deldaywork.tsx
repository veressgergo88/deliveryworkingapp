import { useState } from 'react'
import './Deldaywork.css'

type Working = {
    workingday: number,
    loginzone: string,
    starthour: number,
    startminute: number,
    endhour: number,
    endminute: number,
    kilometer: number,
    hoursworked: number,
    numdeliveries: number,
    pricedeliveries: number,
    ontipping: number,
    cashtipping: number,
    priceperliter: number,
    averagefuel: number
}

function Deldaywork() {
    return (
        <div className='flex flex-col'>
            <label>
                Working day: <input className="input input-bordered w-full max-w-xs" name="workDateInput" type="date" placeholder='Date of the working day' />
            </label>
            <label>
                Login Zone: <input className="input input-bordered w-full max-w-xs" name="loginZone" type="text" placeholder='Login Zone' />
            </label>
            <label>
                Start: <input className="input input-bordered w-full max-w-xs" name="startHour" type="number" placeholder='Hour' /> : <input className="input input-bordered w-full max-w-xs" name="startMinute" type="number" placeholder='Minute' />
                End: <input className="input input-bordered w-full max-w-xs" name="endHour" type="number" placeholder='Hour' /> : <input className="input input-bordered w-full max-w-xs" name="endMinute" type="number" placeholder='Minute' />
            </label>
            <label>
                Kilometers traveled: <input className="input input-bordered w-full max-w-xs" name="kilometers" type="number" placeholder='Kilometers traveled' /> km
            </label>
            <label>
                Hours worked: <input className="input input-bordered w-full max-w-xs" name="workedHour" type="number" placeholder='Hours worked' /> Ft
            </label>
            <label>
                Number of deliveries: <input className="input input-bordered w-full max-w-xs" name="numOfDeliveries" type="number" placeholder='Number of deliveries' /> piece
            </label>
            <label>
                Price of deliveries: <input className="input input-bordered w-full max-w-xs" name="priceOfDeliveries" type="number" placeholder='Price of deliveries' /> Ft
            </label>
            <label>
                Online tipping: <input className="input input-bordered w-full max-w-xs" name="onlineTipping" type="number" placeholder='Online tipping' /> Ft
            </label>
            <label>
                Cash tipping: <input className="input input-bordered w-full max-w-xs" name="cashTipping" type="number" placeholder='Cash tipping' /> Ft
            </label>
            <label>
                Price per liter: <input className="input input-bordered w-full max-w-xs" name="pricePerLiter" type="number" placeholder='liter/Ft' /> l/Ft
            </label>
            <label>
                Average fuel consumption: <input className="input input-bordered w-full max-w-xs" name="averageFuel" type="number" placeholder='liter/100 km' /> l/Ft
            </label>
            <div>
                <button className='btn btn-primary'>Add working day</button>
            </div>
        </div>
    )
}

export default Deldaywork
