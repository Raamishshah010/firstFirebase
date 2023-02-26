
let userUniqueId = localStorage.getItem('userId');
console.log(userUniqueId);

if (userUniqueId == 'undefined' || userUniqueId == null || userUniqueId == ""){
    window.location.href = '../../index.html'
}



function addBlog() {
    let blogTitle = document.getElementById('blogTitle').value;
    let blogDescription = document.getElementById('blogDescription').value;

    if (blogTitle == "" || blogDescription == "") return window.alert("Please enter all fields")

    let blogsRef = db.collection('blogs').doc();

    let data = {
        blogTitle,
        blogDescription,
        date: new Date(),
        blogId: blogsRef.id
    }

    blogsRef.set(data).then(() => {
        window.alert('Blog Added successfully');
        window.location.href = '../../home.html'
    }).catch((err) => {
        window.alert(err.message);
    });
}