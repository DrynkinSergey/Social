const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    posts: [
        {
            postText: "Создание страницы профиля почти готово",
            likesCount: '112,292',
            postTime: 1,
            src: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/293/879/9.jpg"
        },
        {
            postText: "Реакт это афигенная вещь!",
            likesCount: '11,292',
            postTime: 2,
            src: "https://bilberrys.ru/wp-content/uploads/2019/10/00212.png"
        },
        {
            postText: "Я понял как создавать посты на странице",
            likesCount: '2,292',
            postTime: 11,
            src: "https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg"
        },
        {
            postText: "This is my first post on page",
            likesCount: '1,292',
            postTime: 15,
            src: "https://senior.ua/storage/article/content/4c87f7c1-6bb1-4831-98e7-f926b547ee48.jpeg"
        }
    ],
        newPostText: '',
    friends: [
    {name: 'Алёна', id: 1, src: "http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg"},
    {name: 'Настя', id: 2, src: "https://sriit.ac.in/tool/plugins/images/users/4.jpg"},
    {name: 'Толик', id: 3, src: "https://karchitects.com.ua/wp-content/uploads/2018/04/user-img-1.png"}
]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                postText: state.newPostText,
                likesCount: '11,292',
                postTime: 2,
                src: "https://bilberrys.ru/wp-content/uploads/2019/10/00212.png"
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT:
        {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;

        }
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


export default profileReducer;