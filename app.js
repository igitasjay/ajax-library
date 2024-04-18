const http = new easyHTTP();

// GET
http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
  console.log(err ? err : posts);
});

// create data

const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// POST
http.post(
  "https://jsonplaceholder.typicode.com/posts",
  data,
  function (err, post) {
    console.log(err ? err : post);
  }
);

// PUT
http.put(
  "https://jsonplaceholder.typicode.com/posts/1",
  data,
  function (err, post) {
    console.log(err ? err : post);
  }
);

// DELETE
http.delete(
  "https://jsonplaceholder.typicode.com/posts/2",
  function (err, response) {
    console.log(err ? err : response);
  }
);
