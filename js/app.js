const favorite = document.getElementsByClassName('favorite')[0];
const favorite2 = document.getElementsByClassName('favorite')[1];
favorite.onclick = function () {
    this.classList.toggle('active');
}
favorite2.onclick = function () {
    this.classList.toggle('active');
}