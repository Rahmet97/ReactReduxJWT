// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

// Methods

export const fetchUser = (userInfo) => dispatch => {
    // console.log(userInfo)
    fetch(`https://rahmet97.pythonanywhere.com/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("token", data.data.token)
        dispatch(setUser(data.data.user))
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`https://rahmet97.pythonanywhere.com/api/sign-up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.data.token)
        dispatch(setUser(data.data.user))
    })
}

// export const autoLogin = () => dispatch => {
//     fetch(`https://rahmet97.pythonanywhere.com/api/login`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         localStorage.setItem("token", data.token)
//         console.log(data)
//         dispatch(setUser(data.user))
//     })
// }