import { useHistory } from 'react-router'

export function pushToCreateEvent(router: ReturnType<typeof useHistory>) {
    router.push('/create-event')
}

export function pushToEvents(router: ReturnType<typeof useHistory>) {
    router.push('/events')
}
