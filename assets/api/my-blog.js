let myId = localStorage.getItem('userId');
console.log(myId);


db.collection('blogs').where('userId' , '==' ,myId ).get().then((result) => {
    result.forEach((singleBlog) => {

        console.log(singleBlog.data());

        $('#blogs').append(`
        <div class="blog">
        <h5>${singleBlog.data().blogTitle}</h5>
        <p>${singleBlog.data().blogDescription}</p>
        <a href="../../single-blog.html?id=${singleBlog.data().blogId}">View Details</a>
    </div>
        `)

    })
}).catch((err) => {
    
});