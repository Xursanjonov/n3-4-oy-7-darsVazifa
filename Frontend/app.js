let baseURL = "http://localhost:3000";

function getPost() {
    try {
        fetch(`${baseURL}/posts`);
    } catch (error) {
        console.log(error);
    }
}