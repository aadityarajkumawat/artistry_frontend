interface ProfileProps {
    image: string
    name: string
    bio: string
    eventsHosted: number
    eventsAttended: number
}

export function Profile() {
    const props: ProfileProps = {
        name: 'Aditya Raj Kumawat',
        image: 'https://i.ibb.co/FYqYFvR/zoomout.jpg',
        bio: 'i love music',
        eventsAttended: 3,
        eventsHosted: 2,
    }

    return (
        <div className='h-full text-center text-grey1'>
            <div style={{ height: 50 }}></div>
            <div
                className='bg-white bg-opacity-10 flex items-center flex-col pt-8'
                style={{ width: '100%' }}
            >
                <div className='text-center'>
                    <img
                        src={props.image}
                        alt=''
                        style={{ width: 120 }}
                        className='rounded-full m-auto'
                    />
                    <p className='font-bold'>{props.name}</p>
                    <p>{props.bio}</p>
                </div>
                <div className='flex mt-3'>
                    <p className='mx-2'>Events Hosted: {props.eventsHosted}</p>
                    <p className='mx-2'>
                        Events Attended: {props.eventsAttended}
                    </p>
                </div>
            </div>
        </div>
    )
}
