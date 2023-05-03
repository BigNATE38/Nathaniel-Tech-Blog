async function newFormHandler(event) {
    event.preventDefault();

    // grab post's title and content from form 
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;

    // use POST request to send to /api/posts
    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
            title,
            post_content,
        }),
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);