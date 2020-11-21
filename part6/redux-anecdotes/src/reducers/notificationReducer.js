const notificationReducer = (state = 'Important Notification', action) => {
    switch (action.type) {
        case 'SET_NOTI':
            return action.notification
        default:
            return state
    }
}

export default notificationReducer 