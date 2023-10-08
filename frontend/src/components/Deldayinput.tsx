import { useState } from 'react'

function Deldayinput() {

    type Working = {
        workingDay: string,
        loginZone: string,
        startHour: number,
        startMinute: number,
        endHour: number,
        endMinute: number,
        kiloMeter: number,
        hoursWorked: number,
        numDeliveries: number,
        priceDeliveries: number,
        onTipping: number,
        cashTipping: number,
        pricePerLiter: number,
        averageFuel: number
    }
    
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    const [allInput, setAllInput] = useState<Working[]>([])
    const [workingDayInput, setWorkingDayInput] = useState<string>("")
    const [loginZoneInput, setLoginZoneInput] = useState<string>("")
    const [startHourInput, setStartHourInput] = useState<number>(0)
    const [startMinuteInput, setStartMinuteInput] = useState<number>(0)
    const [endHourInput, setEndHourInput] = useState<number>(0)
    const [endMinuteInput, setEndMinuteInput] = useState<number>(0)
    const [kiloMeterInput, setKiloMeterInput] = useState<number>(0)
    const [hoursWorkedInput, setHoursWorkedInput] = useState<number>(0)
    const [numDeliveriesInput, setNumDeliveriesInput] = useState<number>(0)
    const [priceDeliveriesInput, setPriceDeliveriesInput] = useState<number>(0)
    const [onTippingInput, setOnlineTippingInput] = useState<number>(0)
    const [cashTippingInput, setCashTippingInput] = useState<number>(0)
    const [pricePerLiterInput, setPricePerLiterInput] = useState<number>(0)
    const [averageFuelInput, setAverageFuelInput] = useState<number>(0)
    const [renderInput, setRenderInput] = useState<boolean>(false)

    const inputHandler = () => {
        setRenderInput(true)

        const Data: Working = {
            workingDay: workingDayInput,
            loginZone: loginZoneInput,
            startHour: startHourInput,
            startMinute: startMinuteInput,
            endHour: endHourInput,
            endMinute: endMinuteInput,
            kiloMeter: kiloMeterInput,
            hoursWorked: hoursWorkedInput,
            numDeliveries: numDeliveriesInput,
            priceDeliveries: priceDeliveriesInput,
            onTipping: onTippingInput,
            cashTipping: cashTippingInput,
            pricePerLiter: priceDeliveriesInput,
            averageFuel: averageFuelInput
        }
        setAllInput([...allInput, Data])
    }

    return (
        <div className='flex flex-col'>
            <label>
                Working day: <input value= {workingDayInput} onChange={(e) => setWorkingDayInput(e.target.value)} className="input input-bordered w-full max-w-xs" name="workDateInput" type="date" placeholder='Date of the working day' />
            </label>
            <label>
                Login Zone: <input value={loginZoneInput} onChange={(e) => setLoginZoneInput(e.target.value)} className="input input-bordered w-full max-w-xs" name="loginZone" type="text" placeholder='Login Zone' />
            </label>
            <label>
                Start: <input value= {startHourInput} onChange={(e) => setStartHourInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="startHour" type="number" placeholder='Hour' /> : <input value= {startMinuteInput} onChange={(e) => setStartMinuteInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="startMinute" type="number" placeholder='Minute' />
                End: <input value= {endHourInput} onChange={(e) => setEndHourInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="endHour" type="number" placeholder='Hour' /> : <input value= {endMinuteInput} onChange={(e) => setEndMinuteInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="endMinute" type="number" placeholder='Minute' />
            </label>
            <label>
                Kilometer traveled: <input value= {kiloMeterInput} onChange={(e) => setKiloMeterInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="kilometers" type="number" placeholder='Kilometers traveled' /> km
            </label>
            <label>
                Hours worked: <input value= {hoursWorkedInput} onChange={(e) => setHoursWorkedInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="workedHour" type="number" placeholder='Hours worked' /> Ft
            </label>
            <label>
                Number of deliveries: <input value= {numDeliveriesInput} onChange={(e) => setNumDeliveriesInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="numOfDeliveries" type="number" placeholder='Number of deliveries' /> piece
            </label>
            <label>
                Price of deliveries: <input value= {priceDeliveriesInput} onChange={(e) => setPriceDeliveriesInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="priceOfDeliveries" type="number" placeholder='Price of deliveries' /> Ft
            </label>
            <label>
                Online tipping: <input value= {onTippingInput} onChange={(e) => setOnlineTippingInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="onlineTipping" type="number" placeholder='Online tipping' /> Ft
            </label>
            <label>
                Cash tipping: <input value= {cashTippingInput} onChange={(e) => setCashTippingInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="cashTipping" type="number" placeholder='Cash tipping' /> Ft
            </label>
            <label>
                Price per liter: <input value= {pricePerLiterInput} onChange={(e) => setPricePerLiterInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="pricePerLiter" type="number" placeholder='liter/Ft' /> l/Ft
            </label>
            <label>
                Average fuel consumption: <input value= {averageFuelInput} onChange={(e) => setAverageFuelInput(+(e.target.value))} className="input input-bordered w-full max-w-xs" name="averageFuel" type="number" placeholder='liter/100 km' /> l/Ft
            </label>
            <div>
                <button onClick={() => inputHandler} className='btn btn-primary'>Add working day</button>
            </div>

            {renderInput &&
                <div>
                    <div>
                        {months}
                    </div>
                    <div>
                        <h3>Working day:</h3><p>{allInput.workingDay}</p>
                        <h3>Login Zone:</h3><p>{allInput.loginZone}</p>
                        <h3>Shift time:</h3><p>{allInput.startHour}:{allInput.startMinute}</p> - <p>{allInput.endHour}:{allInput.endMinute}</p>
                        <h3>Kilometer:</h3><p>{allInput.kiloMeter}</p>
                        <h3>Hours worked:</h3><p>{allInput.hoursWorked}</p>
                        <h3>Number of deliveries:</h3><p>{allInput.numDeliveries}</p>
                        <h3>Price of deliveries:</h3><p>{allInput.priceDeliveries}</p>
                        <h3>Online Tipping:</h3><p>{allInput.onTipping}</p>
                        <h3>Cash Tipping:</h3><p>{allInput.cashTipping}</p>
                        <h3>Price l/Ft:</h3><p>{allInput.pricePetLiter}</p>
                        <h3>Average fuel consumption:</h3><p>{allInput.averageFuel}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Deldayinput
