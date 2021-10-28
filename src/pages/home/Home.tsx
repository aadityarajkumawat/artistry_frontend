import React from 'react'
import Cooking from '../../assets/cooking.png'
import Music from '../../assets/music.png'
import Painting from '../../assets/painting.png'
import Pottery from '../../assets/pottery.png'
import SocialWork from '../../assets/social-work.png'
import { InterestCard } from '../../components/interest-card/InterestCard'

// interface HomeProps {}

interface Interest {
    name: string
    color: string
    image: string
}

export function Home() {
    const interests: Array<Interest> = [
        { name: 'Painting', color: '#C2E2FF', image: Painting },
        { name: 'Social Work', color: '#FFD1FA', image: SocialWork },
        { name: 'Music', color: '#D2D1FF', image: Music },
        { name: 'Pottery', color: '#FFD5BE', image: Pottery },
        { name: 'Cooking', color: '#C2E2FF', image: Cooking },
    ]

    return (
        <div
            style={{ height: 'calc(100% - 80px)' }}
            className='flex items-center justify-center'
        >
            <div className='flex items-center justify-center flex-col'>
                <h1 className='font-bold text-xl mb-6'>
                    Pick an interest for your event
                </h1>

                <div className='grid grid-cols-2'>
                    {interests.map((interest, i) => (
                        <InterestCard key={i} {...interest} />
                    ))}
                </div>
            </div>
        </div>
    )
}
