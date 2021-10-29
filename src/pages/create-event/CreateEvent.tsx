import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Input } from '../../components/input/Input'
import { pushToEvents } from '../../helpers/pushTo'

interface CreateEventProps {
    interest: string
}

interface EventFormData {
    eventName: string
    date: any
    timeStart: any
    timeEnd: any
    venue: string
    description: string
}

const eventFormDataInit = {} as EventFormData

export function CreateEvent({ interest }: CreateEventProps) {
    const router = useHistory()

    const [eventForm, setEventForm] = useState<EventFormData>(eventFormDataInit)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = e.target
        setEventForm((ef) => ({ ...ef, [name]: value }))
    }

    function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        pushToEvents(router)
    }

    return (
        <div className='h-full'>
            <div style={{ height: 50 }}></div>
            <div
                className='bg-white bg-opacity-10 flex items-center flex-col pt-8'
                style={{ width: '100%' }}
            >
                <h1 className='text-3xl font-bold my-4'>Host an event</h1>
                <div className='w-80'>
                    <p className='mb-3'>Interest: {interest}Music</p>

                    <form onSubmit={onSubmitHandler}>
                        <div className='mb-3'>
                            <Input
                                fieldName='Event Name'
                                name='event-name'
                                onChange={onChangeHandler}
                                value={eventForm.eventName}
                            />
                        </div>
                        <div className='mb-3'>
                            <Input
                                fieldName='Date'
                                name='event-date'
                                type='date'
                                onChange={onChangeHandler}
                                value={eventForm.date}
                            />
                        </div>
                        <div className='flex justify-between mb-3'>
                            <Input
                                fieldName='Time Start'
                                name='event-start-time'
                                type='time'
                                onChange={onChangeHandler}
                                value={eventForm.timeStart}
                            />
                            <Input
                                fieldName='Time End'
                                name='event-end-time'
                                type='time'
                                onChange={onChangeHandler}
                                value={eventForm.timeEnd}
                            />
                        </div>
                        <div className='mb-3'>
                            <Input
                                fieldName='Venue'
                                name='venue'
                                onChange={onChangeHandler}
                                value={eventForm.venue}
                            />
                        </div>
                        <div className='mb-3'>
                            <Input
                                fieldName='Description'
                                name='description'
                                onChange={onChangeHandler}
                                value={eventForm.description}
                            />
                        </div>

                        <input
                            type='submit'
                            value='Create Event'
                            className='w-full py-2 rounded-sm mt-4'
                            style={{
                                background:
                                    'linear-gradient(90.7deg, rgba(255, 209, 250, 0.92) 5.75%, rgba(194, 226, 255, 0.94) 95.45%)',
                                boxShadow:
                                    '4px 4px 4px rgba(0, 0, 0, 0.06), -4px 0px 4px rgba(0, 0, 0, 0.06)',
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
