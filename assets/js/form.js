

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("form"); 

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

     

      if (username && title && content) {
          const postData = {
              username,
              title,
              content
          };

         
          savePost(postData);
          window.location.href = "blog.html";
        //   renderPosts();

        //   form.reset(); 
      }
  });
});
function savePost(postData) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
}
