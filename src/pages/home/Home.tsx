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
        <div className='flex items-center justify-center flex-col'>
            <div style={{ height: 80 }}></div>
            <div className='flex items-center justify-center flex-col pt-40'>
                <h1 className='text-3xl font-bold my-4'>
                    Pick an interest for your event
                </h1>

                <div className='grid grid-cols-2 mt-3'>
                    {interests.map((interest, i) => (
                        <InterestCard key={i} {...interest} />
                    ))}
                </div>
            </div>
        </div>
    )
}
