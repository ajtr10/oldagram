const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Select the feed container
const feed = document.getElementById("feed");

// Loop through each post and insert HTML
posts.forEach(post => {
    feed.innerHTML += `
        <div class="post">

            <div class="post-header">
                <img class="post-user-avatar" src="${post.avatar}">
                <div class="post-user-info">
                    <span class="post-username">${post.name}</span>
                    <span class="post-location">${post.location}</span>
                </div>
            </div>

            <img class="post-image" src="${post.post}">

            <div class="post-actions">
                <img class="post-action-icon" src="images/icon-heart.png">
                <img class="post-action-icon" src="images/icon-comment.png">
                <img class="post-action-icon" src="images/icon-dm.png">
            </div>

            <div class="post-likes">
                <span class="post-likes-count">${post.likes} likes</span>
            </div>

            <div class="post-caption">
                <span class="post-caption-username">${post.username}</span>
                <span class="post-caption-text">${post.comment}</span>
            </div>

        </div>
    `;
});
