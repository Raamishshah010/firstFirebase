


db.collection('blogs').get().then((data) => {
    
    data.forEach((singleData) => {

        console.log(singleData.data());
        $('#blogs').append(`
        <div class="blog">
            <h5>${singleData.data().blogTitle}</h5>
            <p>${singleData.data().blogDescription}</p>
        </div>
        
        `)
    })


}).catch((err) => {
    window.alert(err.message)
});