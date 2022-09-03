const axios = require('axios')

export const insertBlog = (name, title, text, setDisableSubmit) => {

    return axios.post('http://localhost:8080/createBlog', { name, title, text })
        .then((response) => {
            console.log(response);
            window.location.pathname = '/posts';
        })
        .catch((error) => {
            console.log(error);
            setDisableSubmit(false);
        });
};

export const getPosts = (setPosts) => {

    return axios.get('http://localhost:8080/blogEntries')
        .then((response) => {
            console.log(response);
            setPosts(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getPostById = (id, setPost) => {

    return axios.get(`http://localhost:8080/blogEntry?id=${id}`)
        .then((response) => {
            console.log(response);
            setPost(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deletePost = (id) => {

    return axios.post(`http://localhost:8080/deleteBlog`, { id })
        .then((response) => {
            console.log(response);
            window.location.pathname = '/posts';
        })
        .catch((error) => {
            console.log(error);
        });
};

export const updatePost = (id, updates, setDisableSubmit) => {

    return axios.post(`http://localhost:8080/updateBlog`, { id, updates })
        .then((response) => {
            console.log(response);
            window.location.pathname = '/posts';
        })
        .catch((error) => {
            console.log(error);
            setDisableSubmit(false);
        });
};