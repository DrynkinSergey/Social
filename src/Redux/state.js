import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE='SEND-MESSAGE'

let store = {
    _callSubscriber ()  {
        console.log('1')},
    _state: {
        profilePage:{
            posts: [
                {postText:"Создание страницы профиля почти готово",
                    likesCount:'112,292',
                    postTime:1,
                    src:"https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/293/879/9.jpg" },
                {postText:"Реакт это афигенная вещь!",
                    likesCount:'11,292',
                    postTime:2,
                    src:"https://bilberrys.ru/wp-content/uploads/2019/10/00212.png" },
                {postText:"Я понял как создавать посты на странице",
                    likesCount:'2,292',
                    postTime:11,
                    src:"https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg" },
                {postText:"This is my first post on page",
                    likesCount:'1,292',
                    postTime:15,
                    src:"https://senior.ua/storage/article/content/4c87f7c1-6bb1-4831-98e7-f926b547ee48.jpeg" }
            ],
            newPostText:'',
            friends:[
                {name:'Алёна', id:1, src:"http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg"},
                {name:'Настя', id:2, src:"https://sriit.ac.in/tool/plugins/images/users/4.jpg"},
                {name:'Толик', id:3, src:"https://karchitects.com.ua/wp-content/uploads/2018/04/user-img-1.png"}
            ]

        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: 'Сергей'},
                {id: 2, name: 'Настя'},
                {id: 3, name: 'Алиса'},
                {id: 4, name: 'Алена'},
                {id: 5, name: 'Толик'}
            ],
            messages:[
                {id: 1, message: '1'},
                {id: 2, message: '2'},
                {id: 3, message: '3'},
                {id: 4, message: '4'},
                {id: 5, message: '5'},
            ],
            newMessageText: '',
        },


        sidebar:[
            {id:1, title:"Профиль"},
            {id:1, title:"Профиль"},
            {id:1, title:"Профиль"},
            {id:1, title:"Сообщения"},
        ]


    },
    _addPost() {
        let newPost = {
            postText: this._state.profilePage.newPostText,
            likesCount:'11,292',
            postTime:2,
            src:"https://bilberrys.ru/wp-content/uploads/2019/10/00212.png"
        }
        this._state.profilePage.posts.unshift(newPost);
        this.sleep(300);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText='';


    },
    _updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe  (observer)  {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },


    sleep(millis) {
    let t = (new Date()).getTime();
    let i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
},
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);

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

export const sendMessageCreator = () => {
    return (
        {
            type:SEND_MESSAGE

        }
    )
}
export const updateNewMessageBodyCreator = (text) => {
    return (
        {
            type:UPDATE_NEW_MESSAGE_TEXT,
            text: text
        }
    )
}

export default store;
window.store = store;