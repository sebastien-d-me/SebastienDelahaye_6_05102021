class PhotographePhoto {
    constructor(photo, idURL, nomPhotographe) {
        this.photo = photo;
        this.idPage = idURL;
        this.nomPhotographe = nomPhotographe;
    }

    createPhotographeGallerie() {
        if(`${this.photo.photographerId}` == this.idPage) {
            let photo = document.createElement('div');
            photo.classList.add("photo");
            this.indexPhoto = document.querySelectorAll(".photo").length + 1;
            photo.setAttribute("id", `${this.indexPhoto}`)

            let cartePhoto = `
                <a href="#" class="lien-lightbox" onclick="ouvreLightbox(${this.indexPhoto}, '${this.photo.title}')">
                    <img class="img-photo src-contenu" src="ressources/img/${this.nomPhotographe}/${this.photo.image}">
                </a>
                <div>
                    <span class="titre-photo">${this.photo.title}</span>
                    <span class="like like-${this.photo.id}">
                        <span id="like-${this.photo.id}">${this.photo.likes}</span>
                        <span class="like-coeur" onclick="systemeLike('${this.photo.id}', 'like')">♥</span>
                    </span>
                </div>
            `;
            photo.innerHTML = cartePhoto;
            return photo;
        } else {
            return "";
        }        
    }

}