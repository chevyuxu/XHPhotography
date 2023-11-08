// 照片瀑布
const photoGallery = document.querySelector('.photo-gallery');

// 确定所有照片的宽度和高度
const photoWidth = '500px';
//const photoHeight = '600px';


// 放照片
const photoURLs = [
  '../photos/anne.jpg',
  '../photos/meruyert.jpg',
  '../photos/oleksandr.jpg',
  '../photos/pexels.jpg'
  // ... 更多相片
];


// 照片元素
photoURLs.forEach((photoURL) => {
    const img = document.createElement('img');
    img.src = photoURL;
    img.style.width = photoWidth; // 设置宽度
    //img.style.height = photoHeight; // 设置高度
    photoGallery.appendChild(img);
});





// 往上滑
var scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.onclick = function() {
    // 设置滚动行为为平滑滚动
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };




// About對話框
document.getElementById('About').addEventListener('click', function () {
  document.getElementById('dialog').style.display = 'block';
});

document.getElementById('closeDialog').addEventListener('click', function () {
  document.getElementById('dialog').style.display = 'none';
});

document.querySelector('.dialog').addEventListener('click', function (event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});