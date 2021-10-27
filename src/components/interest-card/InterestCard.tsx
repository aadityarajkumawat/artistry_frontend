import React from 'react'

interface InterestCardProps {
    name: string
    color: string
    image: string
}

export function InterestCard({ color, name, image }: InterestCardProps) {
    return (
        <div
            className='w-40 mb-3 px-2 py-2 rounded-md mx-2'
            style={{ backgroundColor: color }}
        >
            <h1 className='mb-5'>{name}</h1>
            <img src={image} alt='' className='ml-auto w-12' />
        </div>
    )
}
