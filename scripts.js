/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.book-card').forEach(card => {
    const title = card.querySelector('.book-title');
    const readMore = card.querySelector('.read-more');
    
    // Cek apakah teks judul lebih panjang dari 1 baris
    if (title.scrollHeight > title.clientHeight) {
      card.classList.add('long');
      readMore.addEventListener('click', () => {
        // Toggle antara potong / tampil penuh
        if (title.style.webkitLineClamp === 'unset') {
          title.style.webkitLineClamp = 2;
          readMore.textContent = 'Lihat selengkapnya';
        } else {
          title.style.webkitLineClamp = 'unset';
          readMore.textContent = 'Sembunyikan';
        }
      });
    }
  });
});

const bookData = [
    {
        id: 'berserk-vol-1',
        title: 'Berserk Vol. 1',
        author: 'Kentaro Miura',
        publisher: 'Elex Media Komputindo',
        year: '2019',
        category: 'Komik/Manga',
        status: 'Tersedia',
        location: 'Rak 01',
        coverImage: 'https://assets.promediateknologi.id/crop/0x0:0x0/x/photo/p3/75/2024/10/11/Berserk-Young-Animal-Poplineid-3798718107.jpg',
        description: 'Berserk adalah manga legendaris karya Kentaro Miura yang mengisahkan perjalanan Guts, seorang pendekar bayaran bertubuh kekar dengan pedang raksasa. Volume 1 memperkenalkan dunia kelam penuh peperangan, monster, dan kutukan. Kisah ini menjadi awal dari perjalanan panjang Guts melawan takdir, dendam, dan kegelapan yang menguasai dunia. Cocok untuk pembaca dewasa yang menyukai cerita aksi-fantasi gelap dengan ilustrasi detail.',
    },
    {
        id: 'steel-ball-run-vol-10',
        title: "Steel Ball Run Vol. 10 (JoJo's Bizarre Adventure Part 7)",
        author: 'Hirohiko Araki',
        publisher: 'Shueisha',
        year: '2007',
        category: 'Komik/Manga',
        status: 'Tersedia',
        location: 'Rak 02',
        coverImage: 'https://m.media-amazon.com/images/I/912WXxPgbTL._SY425_.jpg',
        description: 'Steel Ball Run adalah bagian ketujuh dari seri JoJo\'s Bizarre Adventure. Volume 10 melanjutkan kisah Gyro Zeppeli dan Johnny Joestar dalam perlombaan lintas benua yang misterius dan penuh bahaya. Mereka harus menghadapi pengguna Stand baru yang kuat, sambil semakin dekat dengan rahasia di balik balapan Steel Ball Run. Sebuah mahakarya Araki dengan tema yang matang, aksi intens, dan seni yang memukau.',
    },
    {
        id: 'seni-bersikap-bodo-amat',
        title: 'Sebuah Seni untuk Bersikap Bodo Amat',
        author: 'Mark Manson',
        publisher: 'Grasindo',
        year: '2018',
        category: 'Pengembangan Diri',
        status: 'Dipinjam',
        location: 'Rak 05',
        coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg',
        description: 'Buku self-help ini menantang konvensi "berpikir positif" dengan argumen bahwa kunci kebahagiaan sejati bukanlah untuk menjadi selalu bahagia, melainkan untuk menghadapi kenyataan. Mark Manson berpendapat bahwa kita hanya punya batasan untuk peduli terhadap sesuatu, jadi kita harus memilih hal-hal yang benar-benar penting untuk dipedulikan. Buku ini mengajarkan cara menerima ketidaksempurnaan dan mencari nilai dalam penderitaan.',
    },
];

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function loadBookDetail() {
    const bookId = getUrlParameter('id'); 
    

    const book = bookData.find(b => b.id === bookId);

    if (!book) {

        document.querySelector('.book-detail-container').innerHTML = 
            '<h1>Buku tidak ditemukan!</h1><p>Silakan kembali ke daftar buku.</p>';
        return;
    }

    document.getElementById('book-cover-large').src = book.coverImage;
    document.getElementById('book-cover-large').alt = 'Sampul ' + book.title;
    document.getElementById('book-title-detail').textContent = book.title;
    
    document.getElementById('penulis-value').textContent = book.author;
    document.getElementById('penerbit-value').textContent = book.publisher;
    document.getElementById('tahun-terbit-value').textContent = book.year;
    document.getElementById('kategori-value').textContent = book.category;
    document.getElementById('lokasi-buku-value').textContent = book.location;
    document.getElementById('deskripsi-text').textContent = book.description;
    
    const statusSpan = document.getElementById('status-tersedia');
    const statusIcon = document.getElementById('status-icon');
    
    statusSpan.textContent = book.status;
    
    if (book.status === 'Tersedia') {
        statusSpan.className = 'status-tersedia';
        statusIcon.className = 'fas fa-check-circle status-icon status-tersedia';
    } else { 
        statusSpan.className = 'status-dipinjam';
        statusIcon.className = 'fas fa-exclamation-circle status-icon status-dipinjam';
    }
}

document.addEventListener('DOMContentLoaded', loadBookDetail);


   
    const statusSpan = document.getElementById('status-tersedia'); 
    const statusIcon = document.getElementById('status-icon');
    
    statusSpan.textContent = book.status;
    
    if (book.status === 'Tersedia') {
        statusSpan.className = 'status-tersedia';
        statusIcon.className = 'fas fa-check-circle status-icon status-tersedia';
    } else { 
        statusSpan.className = 'status-dipinjam'; 
        statusIcon.className = 'fas fa-exclamation-circle status-icon status-dipinjam';
    }
