import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
const mapStateToProps = (state) =>  {
    return {
        profilePage: state.profilePage
    }

}
const mapDispatchToProps = (dispatch) =>  {
    return    {}
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;