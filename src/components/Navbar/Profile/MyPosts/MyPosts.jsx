import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return(

            <div>

                <div>
                    <Post postText="Создание страницы профиля почти готово" likesCount="112,292"
                          postTime="1"
                          src="https://lh3.googleusercontent.com/proxy/ewzJrXMFbM6d-3oC3alYCgTtAzTW4RlJuvEnU7rJD9TJaOXiqg-aiV6C-4awiTT3DaMBZuifxVEUMCYKpZ5hm5stBze0UFLDlO-tnSJacV7SJem8WjmL6LDTdaUonvxMEaKL1o28cw"/>
                </div>
                <div>
                    <Post postText="Реакт это афигенная вещь!" likesCount="13,232"
                          postTime="2"
                          src="https://bilberrys.ru/wp-content/uploads/2019/10/00212.png"/>
                </div>
                <div>
                    <Post postText="Я понял как создавать посты на странице" likesCount="1,092"
                          postTime="3"
                          src="https://xakep.ru/wp-content/uploads/2015/05/func1.jpg"/>
                </div>
                <div>
                    <Post postText="Free Graphic Design Resources by Drynkin Sergey" likesCount="292"
                          postTime="5"
                          src="https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg"/>
                </div>

                <div>
                    <Post postText="This is my first post on page" likesCount="92"
                          postTime="12"
                          src="https://senior.ua/storage/article/content/4c87f7c1-6bb1-4831-98e7-f926b547ee48.jpeg"/>
                </div>

            </div>


    );
}

export default MyPosts;