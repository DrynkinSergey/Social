const ADD_POST = 'ADD-POST';
const UPPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postText: state.newPostText,
                likesCount: '11,292',
                postTime: 2,
                src: "https://bilberrys.ru/wp-content/uploads/2019/10/00212.png"
            }
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPPDATE_POST_TEXT:
        {
            state.newPostText = action.newText;
            return state;

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
            type:UPPDATE_POST_TEXT,
            newText: text
        }
    )
}


export default profileReducer;