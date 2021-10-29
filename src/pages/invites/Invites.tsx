interface InviteType {
    image: string
    name: string
    bio: string
    description: string
}

export function Invites() {
    const invites: Array<InviteType> = [
        {
            image: '',
            name: 'Ram Sharma',
            description:
                'Here, we will put some invitation message, but for now i am just putting some text to fill this space',
            bio: 'music is nice',
        },
        {
            image: '',
            name: 'Ram Sharma',
            description:
                'Here, we will put some invitation message, but for now i am just putting some text to fill this space',
            bio: 'music is nice',
        },
    ]

    return (
        <div className='h-full'>
            <div style={{ height: 50 }}></div>
            <div
                className='bg-white bg-opacity-10 flex items-center flex-col pt-8'
                style={{ width: '100%' }}
            >
                <h1 className='text-3xl font-bold my-4'>Invites</h1>
                <div className='border-b-2 w-10/12 flex justify-end'>
                    <button className='bg-orange py-1 px-3 rounded-md my-3'>
                        Invite people to Artistry
                    </button>
                </div>
                <div className='grid grid-cols-1 gap-20 mt-5 px-7 s-800:grid-cols-2 pb-14'>
                    {invites.map((invite, idx) => (
                        <div
                            key={idx}
                            className='border-2 border-grey2 rounded-md flex flex-col p-4 max-w-lg'
                        >
                            <div className='flex items-center'>
                                <img
                                    src={invite.image}
                                    alt='user'
                                    className='bg-grey3 mr-3 rounded-full'
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                                <div>
                                    <p className='font-bold'>{invite.name}</p>
                                    <p className='text-grey1'>{invite.bio}</p>
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='text-grey1'>
                                    {invite.description}
                                </p>
                            </div>
                            <div>
                                <button className='bg-purple py-1 px-3 rounded-md'>
                                    Accept Invite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
