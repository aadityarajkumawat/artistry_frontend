import { useHistory } from 'react-router'
import { Event as EventType } from '../../types'

export function Event(event: EventType) {
    const router = useHistory()
    return (
        <div className='mb-5 w-full max-w-sm lg:mb-10 lg:w-event-base text-grey1'>
            <p className='text-base sm:text-lg'>{event.date}</p>
            <h1 className='text-xl lg:text-3xl font-bold underline'>
                {event.title}
            </h1>
            <div className='flex text-sm sm:text-base lg:text-lg my-1'>
                <p>
                    {event.timeFrom} - {event.timeTo}
                </p>
                <p className='ml-1'>@ {event.venue}</p>
            </div>
            <p>{event.description}</p>
            <button
                className='bg-blue px-5 py-1 rounded-md my-2'
                onClick={() => router.push(event.link || '!#')}
            >
                Join Event
            </button>
        </div>
    )
}
