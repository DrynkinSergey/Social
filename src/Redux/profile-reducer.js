const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
let initialState = {

    posts: [
        {
            id:1,
            postText: "Создание страницы профиля почти готово",
            likesCount: '112,292',
            postTime: 1,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        },
        {
            id:2,
            postText: "Реакт это афигенная вещь!",
            likesCount: '11,292',
            postTime: 2,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        },
        {
            id:3,
            postText: "Я понял как создавать посты на странице",
            likesCount: '2,292',
            postTime: 11,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        },
        {
            id:4,
            postText: "This is my first post on page",
            likesCount: '1,292',
            postTime: 15,
            src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
        }
    ],
        newPostText: 'React',
    profile: null,
    friends: [
    {name: 'Алёна', id: 1, src: "http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg"},
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
            return  {...state,
                posts:[{
                    id: 123,
                    postText: state.newPostText,
                    likesCount: '11,292',
                    postTime: 2,
                    src: `https://picsum.photos/id/${getRandomInt(1000)}/200/300`
                },
                    ...state.posts],
                newPostText : ''
            }
        case UPDATE_POST_TEXT:
            return {...state,
                newPostText : action.newText}
        case SET_USER_PROFILE:
            return {...state,
                profile:action.profile}
        default:
            return state;

    }
}
export const addPostActionCreator = () => {
    return (
        {
            type:ADD_POST

        }
    )
}
export const updateNewPostTextActionCreator = (text) => {
    return (
        {
            type:UPDATE_POST_TEXT,
            newText: text
        }
    )
}
export const setUserProfile = (profile) => {
    return (
        {
            type:SET_USER_PROFILE,
            profile

        }
    )
}



export default profileReducer;