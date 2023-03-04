let urlParam = new URLSearchParams(window.location.search);

let myParam = urlParam.get('id');
console.log(myParam);


db.collection('blogs').doc(myParam).get().then((result) => {
    console.log(result.data());

    $('#blogs').append(`
    
    <div class="blog">
            <h5>${result.data().blogTitle}</h5>
            <p>${result.data().blogDescription}</p>
        </div>
    `);

    $('#blogTitle').val(result.data().blogTitle);
    $('#blogDescription').val(result.data().blogDescription);


}).catch((err) => {

});



function editBlog() {

    let updatedBlogTitle = $('#blogTitle').val();
    let updatedBlogDescription = $('#blogDescription').val();

    if (updatedBlogTitle == "" || updatedBlogDescription == "") {
        window.alert("Please enter all fields")
    } else {

        db.collection('blogs').doc(myParam).update({
            blogTitle: updatedBlogTitle,
            blogDescription: updatedBlogDescription
        }).then(() => {
            window.alert("Updated Successfully!!");
            window.location.reload();
        }).catch((err) => {
            window.alert(err.message)
        });
    }
}



function deleteBlog(){
    db.collection('blogs').doc(myParam).delete().then(() => {
        window.alert("Deleted Successfully!!");
        window.location.href = '../../home.html';
        
    }).catch((err) => {
        
    });
}