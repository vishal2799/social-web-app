import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StoryList from '../../components/StoryList/StoryList'
import Widget2 from '../../components/UI/Widget2/Widget2';
import CreatePost from '../../components/CreatePost/CreatePost';
import PostList from '../../components/Post/PostList/PostList'
import PostContextProvider from '../../Context/Post/PostContext';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        isLoading: false,
        show: false,
        singlePost: {
            userImg: "./images/user-7.png",
            userName: "Aiden Markram",
            time: "14",
            caption: "Post from",
            postImg: "./images/t-10.jpeg",
            likes: "0",
            comments: "0",
            userId: 3
        },
        storys: [],
        posts: [],
        friendRequests: [],
        suggestPages: [],
        error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };

    handleChange(event) {
        this.setState({singlePost: {
            ...this.state.singlePost,
            caption: event.target.value
        }
    });
    }



    componentDidMount () {
        this.getStories();
        this.getPosts();
        this.getFriendRequests();
        this.getSuggestPages();
    }

    handleSubmit(e) {
        const {userImg, userName, time, caption, likes, comments, postImg, userId} = this.state.singlePost;
        const newPost = {   userImg, userName, time, caption, likes, comments, postImg, userId };
        const accessToken = JSON.parse(localStorage.getItem("token"));
        fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
          body: JSON.stringify(newPost)
        }).then((res) => {
            if(res.status === 403) {   
                return Promise.reject(res);
            }
            this.setState(prevState => ({
                posts: [newPost, ...prevState.posts]
            })) 
        })
        .then(
            this.setState(
                {
                singlePost: {
                    ...this.state.singlePost,
                  caption: ""
                }
              }))
        .catch(e => {
            if(e.status === 403){
                console.log('Forbidden');
            }
            console.log('Home Posts Post req other error')
        })
        e.preventDefault();
      }
    

    getSuggestPages () {
        this.setState({isLoading: true}, () => {
            fetch("http://localhost:3000/suggestPages")
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        isLoading: false,
                        suggestPages: result
                    })
                })
                .catch(console.log)
        })
    }

    getStories () {
        this.setState({isLoading: true}, () => {
            fetch("http://localhost:3000/stories?_limit=6")
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        isLoading: false,
                        storys: result
                    })
                })
                .catch(console.log)
        })
    }

    getPosts () {
        const accessToken = JSON.parse(localStorage.getItem("token"));
        this.setState({isLoading: true}, () => {
            fetch("http://localhost:3000/posts", {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(res => {
                   if(res.status === 200) {
                       return res.json();
                   } 
                   return Promise.reject(res);
                })
                .then(result => {
                    this.setState({
                        isLoading: false,
                        posts: result
                    })
                })
                .catch(e => {
                    if(e.status === 401){
                        console.log('Un-authorized');
                        this.props.Logout();
                    }
                })
        })
    }

    getFriendRequests () {
        this.setState({isLoading: true}, () => {
            fetch("http://localhost:3000/friendRequests")
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        isLoading: false,
                        friendRequests: result
                    })
                })
                .catch(console.log)
        })
    }

    render() {
        const {storys, suggestPages, friendRequests, isLoading} = this.state;
        let stories, post, fReq, sPages;
        if(isLoading){
            post = <p>Loading Posts...</p>;
            stories = <p>Loading Stories...</p>;
            fReq = <p>Loading Friend Request...</p>;
            sPages = <p>Loading Suggest Pages...</p>;
        } else {
            stories = (
                <div style={{display: 'flex', alignItems: 'center', overflowX: 'scroll'}}>
                <StoryList sList={storys} home={true} />
                <Link to="/stories">See All</Link>
                </div>
            );
            post = (
            <PostContextProvider>
                <PostList />
            </PostContextProvider>
            );
            fReq = <Widget2 widgetTitle="Friend Request" widgetLink="See All" fReq={friendRequests} />
            sPages = <Widget2 widgetTitle="Suggest Pages" widgetLink="See All" sPages={suggestPages} />
        }
        return (
        <>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '65%', paddingRight: '10px'}}>
                    <div style={{display: 'flex', paddingBottom: '5px'}}>
                        {stories}
                    </div>
                    <CreatePost handleSubmit={this.handleSubmit} handleChange={this.handleChange} caption={this.state.singlePost.caption} />
                    {post}
                    <div>
                        <button onClick={this.props.Logout}>Logout</button>
                    </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '35%'}}>
                        {fReq}
                        {sPages}
                    </div>
                </div>
        </>
        )
    }
}

export default Home
