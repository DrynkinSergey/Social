import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
let initialState = {

    posts: [
        {
            id: 1,
            postText: "Создание страницы профиля почти готово",
            likesCount: '112,292',
            postTime: 1,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        },
        {
            id: 2,
            postText: "Реакт это афигенная вещь!",
            likesCount: '11,292',
            postTime: 2,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        },
        {
            id: 3,
            postText: "Я понял как создавать посты на странице",
            likesCount: '2,292',
            postTime: 11,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        },
        {
            id: 4,
            postText: "This is my first post on page",
            likesCount: '1,292',
            postTime: 15,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        }
    ],
    profile: null,
    status: '',
    friends: [
        {name: 'Алёна', id: 1, src: "https://sriit.ac.in/tool/plugins/images/users/4.jpg"},
        {name: 'Настя', id: 2, src: "https://sriit.ac.in/tool/plugins/images/users/4.jpg"},
        {name: 'Толик', id: 3, src: "https://karchitects.com.ua/wp-content/uploads/2018/04/user-img-1.png"}
    ]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: 123,
                    postText: action.PostText,
                    likesCount: '11,292',
                    postTime: 2,
                    src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
                },
                    ...state.posts],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }
}
export const addPostActionCreator = (PostText) => {
    return (
        {
            type: ADD_POST,
            PostText

        }
    )
}
export const setUserProfile = (profile) => {
    return (
        {
            type: SET_USER_PROFILE,
            profile

        }
    )
}
export const setUserStatus = (status) => {
    return (
        {
            type: SET_USER_STATUS,
            status

        }
    )
}

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfilePage(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }

}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            });
    }

}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            });
    }

}


export default profileReducer;