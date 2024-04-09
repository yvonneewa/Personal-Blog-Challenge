

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("form"); // Target the entire form

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      // Your form validation logic here (optional)

      if (username && title && content) {
          const postData = {
              username,
              title,
              content
          };

          // Save post using localStorage (assuming logic from blog.js)
          savePost(postData);

          // Call renderPosts function to update the blog list dynamically
          renderPosts();

          form.reset(); // Reset the form after successful submission
      }
  });
});
