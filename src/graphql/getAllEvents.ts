import { gql } from 'urql'

export const GET_ALL_EVENTS = gql`
    query GetEvents {
        getEvents {
            events {
                id
                eventName
                timeStart
                timeEnd
                venue
                description
                interest
                organizer
            }
            error
        }
    }
`
