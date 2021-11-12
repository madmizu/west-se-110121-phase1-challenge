document.addEventListener("DOMContentLoaded", () => {})

fetch("http://localhost:3000/images/1")
.then(res => res.json())
.then(renderImage)

fetch("http://localhost:3000/comments")
.then(res => res.json())
.then(renderComments)

function el (id) {
    return document.getElementById(id)
}

function elTag (tag) {
    return document.getElementsByTagName(tag)
}

const newComments = []
const commentForm = el("comment-form")
const commentList = el("comments-list")

function renderImage (pup) {
    const title = el("card-title")
    const image = el("card-image")
    const likesNum = el("like-count")
    const likeBtn = el("like-button")



    title.textContent = pup.title
    image.src = pup.image
    likesNum.textContent = `${pup.likes} likes`

    likeBtn.addEventListener("click", () => addLike(pup, likesNum));

    commentForm.addEventListener("submit", handleForm)
}

function handleForm (e) {
    e.preventDefault()
    const newCom = document.createElement('li')
    newCom.textContent = e.target.comment.value
    console.log(e.target)
    commentList.append(newCom)
    e.target.reset
}
        
function addLike (pup, likesNum) {
    ++pup.likes
    likesNum.textContent = pup.likes
}

function renderComments (comment) {
    const comment1 = elTag("li")[0]
    const comment2 = elTag("li")[1]
    const comment3 = elTag("li")[2]
    
    comment1.textContent = comment[0].content
    comment2.textContent = comment[1].content
    comment3.textContent = comment[2].content
}



