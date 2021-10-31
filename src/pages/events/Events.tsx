import { useState } from 'react'
import { useQuery } from 'urql'
import { Event } from '../../components/event/Event'
import { GET_ALL_EVENTS } from '../../graphql/getAllEvents'
import { Event as EventType } from '../../types'

export function Events() {
    const [upcomingEventsResponse] = useQuery<{
        getEvents: { events: Array<EventType> }
    }>({
        query: GET_ALL_EVENTS,
    })

    const yourEvents: Array<EventType> = [
        {
            eventName: 'An engaging event about pottery, display your skills',
            date: '28-10-2021',
            description:
                'Even if your have no idea about pottery you can still join and learn alongside your peers',
            link: '',
            timeStart: '12:00',
            timeEnd: '01:30',
            venue: 'M-55, Kesari Road',
            organizer: 'Aditya Raj Kumawat',
        },
    ]

    const [toggleEvents, setToggleEvents] = useState(false)

    function toggle() {
        setToggleEvents((o) => !o)
    }

    return (
        <div className='h-full'>
            <div style={{ height: 50 }}></div>
            <div
                className='bg-white bg-opacity-10 flex items-center flex-col pt-8'
                style={{ width: '100%' }}
            >
                <h1 className='text-3xl font-bold my-4'>
                    {!toggleEvents ? 'Upcoming Events' : 'Your Events'}
                </h1>
                <div className='border-b-2 w-10/12 flex justify-end'>
                    <button
                        className='bg-orange py-1 px-3 rounded-md my-3'
                        onClick={toggle}
                    >
                        {toggleEvents ? 'Upcoming Events' : 'Your Events'}
                    </button>
                </div>
                {upcomingEventsResponse.fetching ? (
                    <div>spinning wheel</div>
                ) : (
                    <div className='grid grid-cols-1 gap-5 mt-5 px-7 s-800:grid-cols-2 pb-14'>
                        {(!toggleEvents
                            ? upcomingEventsResponse.data
                                ? upcomingEventsResponse.data.getEvents.events
                                : []
                            : yourEvents
                        ).map((event, idx) => (
                            <Event key={idx} {...event} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
