/**
 * HMP-TI ITS BUSINESS HUB - DIGITAL CATALOG LOGIC
 * Features:
 * 1. Mobile navigation & backdrop controls
 * 2. Header blur on scroll & Section scroll-spy
 * 3. 4 Business Units Catalog rendering & category filtering
 * 4. Interactive Service Order / Cart Drawer with WhatsApp checkout
 * 5. Form Pengajuan Titip Jual (Konsinyasi) Modal & WhatsApp forwarding
 * 6. Dynamic Reviews feed & Add Review modal with interactive star rating
 * 7. Live operating status checker (Sekretariat HMP-TI) & Copy Address
 * 8. Reusable Toast Notification system
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       DATA: 4 BUSINESS UNITS CATALOG ITEMS
       ========================================================================== */
    const catalogData = [
        // --- 1. UNIT F&B (FOOD & DRINK) ---
        {
            id: 'fnb-01',
            name: 'Kopi Susu Aren Teknik Informatika',
            unit: 'fnb',
            unitLabel: 'Unit F&B',
            price: 15000,
            desc: 'Espresso arabika dipadu gula aren alami dan susu segar creamy. Teman setia sesi coding dan nugas malam.',
            tag: 'Favorit',
            notes: 'Double Shot • Less Sweet Option',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'fnb-02',
            name: 'Matcha Latte Sukolilo',
            unit: 'fnb',
            unitLabel: 'Unit F&B',
            price: 16000,
            desc: 'Matcha murni berkualitas dengan racikan susu gurih manis yang menyegarkan di tengah terik kampus ITS.',
            tag: 'Non-Kopi',
            notes: 'Pure Matcha • Fresh Milk',
            image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'fnb-03',
            name: 'Rice Bowl Ayam Katsu Teriyaki',
            unit: 'fnb',
            unitLabel: 'Unit F&B',
            price: 20000,
            desc: 'Nasi pulen hangat dengan potongan katsu ayam renyah, saus teriyaki homemade gurih, dan taburan wijen.',
            tag: 'Menu Kenyang',
            notes: 'Porsi Mahasiswa • Higienis',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'fnb-04',
            name: 'Snack Box & Pastry Rapat Himpunan',
            unit: 'fnb',
            unitLabel: 'Unit F&B',
            price: 12000,
            desc: 'Paket kudapan praktis berisi 2 pastry gurih/manis dan air mineral untuk konsumsi rapat, seminar, atau expo.',
            tag: 'Catering Acara',
            notes: 'Bisa Request Menu • Min Order 10 Box',
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
        },

        // --- 2. UNIT PERCETAKAN & DOKUMEN ---
        {
            id: 'prt-01',
            name: 'Print Dokumen & Laporan A4 Kilat',
            unit: 'percetakan',
            unitLabel: 'Percetakan',
            price: 500,
            desc: 'Layanan print hitam putih atau full color berkecepatan tinggi dengan kertas HVS 75/80 gsm berkualitas.',
            tag: 'Cetak Cepat',
            notes: 'Mulai Rp 500/lbr • Siap dalam 10 Menit',
            image: 'https://images.unsplash.com/photo-1589330694653-dad6bc0140ce?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'prt-02',
            name: 'Jilid Hardcover Skripsi / TA Standar ITS',
            unit: 'percetakan',
            unitLabel: 'Percetakan',
            price: 45000,
            desc: 'Jilid hardcover tebal bersudut rapi, tulisan foil emas mengkilap sesuai pedoman buku Tugas Akhir resmi ITS.',
            tag: 'Spesialis TA',
            notes: 'Presisi • Standar Perpustakaan ITS',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'prt-03',
            name: 'Jasa Formatting & Layout Turnitin / IEEE',
            unit: 'percetakan',
            unitLabel: 'Percetakan',
            price: 25000,
            desc: 'Perapian format dokumen skripsi, jurnal IEEE, daftar pustaka Mendeley, dan pengecekan kelayakan cetak.',
            tag: 'Dokumen Rapi',
            notes: 'Revisi Format Sampai Siap Sidang',
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'prt-04',
            name: 'Cetak Banner & Poster Kegiatan Akademik',
            unit: 'percetakan',
            unitLabel: 'Percetakan',
            price: 35000,
            desc: 'Cetak poster riset albatros/luster dan x-banner flexi high-resolution untuk tugas besar atau pameran karya.',
            tag: 'Outdoor/Indoor',
            notes: 'Warna Tajam • Termasuk Mata Ayam',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
        },

        // --- 3. UNIT KONSINYASI (TITIP JUAL MAHASISWA) ---
        {
            id: 'ksn-01',
            name: 'Lanyard Resmi Teknik Informatika ITS',
            unit: 'konsinyasi',
            unitLabel: 'Konsinyasi',
            price: 25000,
            desc: 'Lanyard printing dua sisi dengan bahan tisu lembut, stopper lepas-pasang, dan pengait kokoh berlogo HMP-TI.',
            tag: 'Official Merch',
            notes: 'Bahan Premium • Awet & Nyaman',
            image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'ksn-02',
            name: 'Sticker Pack Developer & Tech Jokes TI',
            unit: 'konsinyasi',
            unitLabel: 'Konsinyasi',
            price: 10000,
            desc: 'Kumpulan stiker vinyl laminasi doff tahan air bertema coding, Linux, Git, dan humor mahasiswa informatika.',
            tag: 'Karya Mahasiswa',
            notes: 'Isi 8 Stiker Die-Cut • Waterproof',
            image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'ksn-03',
            name: 'Totebag Kanvas Aesthetic Coding',
            unit: 'konsinyasi',
            unitLabel: 'Konsinyasi',
            price: 38000,
            desc: 'Totebag kanvas tebal dengan ritsleting utama dan saku dalam, pas untuk membawa laptop 14 inci dan berkas kuliah.',
            tag: 'Best Seller',
            notes: 'Kanvas Tebal • Muat Laptop 14 Inch',
            image: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'ksn-04',
            name: 'Hoodie Angkatan Custom TI ITS',
            unit: 'konsinyasi',
            unitLabel: 'Konsinyasi',
            price: 165000,
            desc: 'Hoodie katun fleece tebal hangat berdesain tipografi angkatan, hasil kolaborasi mahasiswa wirausaha TI.',
            tag: 'Pre-Order / Ready',
            notes: 'Cotton Fleece 300gsm • Nyaman Ber-AC',
            image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80'
        },

        // --- 4. UNIT JASA KREATIF ---
        {
            id: 'crt-01',
            name: 'Desain Poster & Feed Instagram Event',
            unit: 'kreatif',
            unitLabel: 'Jasa Kreatif',
            price: 50000,
            desc: 'Jasa pembuatan desain visual menarik untuk publikasi kegiatan departemen, kepanitiaan, atau bisnis rintisan.',
            tag: 'Desain Grafis',
            notes: 'Revisi 2x • File Source AI/Canva/PSD',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'crt-02',
            name: 'Sesi Foto Wisuda & Personal Portrait',
            unit: 'kreatif',
            unitLabel: 'Jasa Kreatif',
            price: 150000,
            desc: 'Dokumentasi foto wisuda sarjana atau foto profil profesional di spot ikonik kampus ITS Sukolilo.',
            tag: 'Fotografi',
            notes: 'All Raw Files + 10 Foto Edit High-Res',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'crt-03',
            name: 'Video Reels / TikTok Promosi Acara',
            unit: 'kreatif',
            unitLabel: 'Jasa Kreatif',
            price: 120000,
            desc: 'Produksi video pendek vertikal dinamis lengkap dengan musik tren, transisi modern, dan subtitle estetis.',
            tag: 'Videografi',
            notes: 'Resolusi 1080p 60fps • Editing Cepat',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'crt-04',
            name: 'UI/UX App Design Prototype (Figma)',
            unit: 'kreatif',
            unitLabel: 'Jasa Kreatif',
            price: 250000,
            desc: 'Desain antarmuka mobile/web modern untuk tugas akhir, proposal lomba gemastik, atau proyek startup.',
            tag: 'UI/UX Design',
            notes: 'Desain Interaktif • Design System Lengkap',
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80'
        }
    ];

    /* ==========================================================================
       DATA: REVIEWS INITIAL
       ========================================================================== */
    let reviewsData = [
        {
            id: 1,
            author: 'Aulia Rahman (Teknik Informatika \'21)',
            rating: 5,
            date: '3 hari yang lalu',
            text: 'Jilid hardcover skripsi di Unit Percetakan HMP-TI rapi banget dan cepat! Pas daftar sidang ga pusing lagi, harganya juga lebih murah dari tempat fotokopi luar kampus.',
            unit: 'Unit Percetakan & Dokumen'
        },
        {
            id: 2,
            author: 'Farhan Dwi (Sistem Informasi \'22)',
            rating: 5,
            date: 'Minggu lalu',
            text: 'Kopi Susu Aren-nya legit pol, penyelamat pas ngoding praktikum di Lab RPLA. Rice bowl teriyaki-nya juga ngenyangin buat makan siang hemat.',
            unit: 'Unit F&B (Food & Drink)'
        },
        {
            id: 3,
            author: 'Clarissa Natalia (Informatika \'23)',
            rating: 5,
            date: '2 minggu yang lalu',
            text: 'Sangat terbantu dengan fasilitas konsinyasi HMP-TI. Sticker pack dan gantungan kunci karyaku laku puluhan pcs, laporan penjualan dan transfer dananya transparan banget!',
            unit: 'Unit Konsinyasi Mahasiswa'
        },
        {
            id: 4,
            author: 'Bagas Aditya (Ketua Panitia Event TI)',
            rating: 5,
            date: '3 minggu yang lalu',
            text: 'Jasa kreatifnya juara! Desain poster dan teaser reels acara seminar kami dibuat estetik dan selesai sebelum deadline. Komunikasi tim HMP-TI komunikatif banget.',
            unit: 'Unit Jasa Kreatif'
        }
    ];

    /* ==========================================================================
       UNIT SUMMARIES INFO TEXT
       ========================================================================== */
    const unitDescriptions = {
        'all': {
            title: 'Menampilkan Semua Unit Usaha HMP-TI ITS',
            desc: 'Klik tombol kategori di atas untuk memfilter produk atau layanan spesifik dari unit usaha yang Anda butuhkan.'
        },
        'fnb': {
            title: 'Unit F&B (Food & Drink)',
            desc: 'Menyediakan aneka pilihan kopi susu racikan mahasiswa, matcha segar, rice bowl lezat higienis, serta snack box rapat himpunan.'
        },
        'percetakan': {
            title: 'Unit Percetakan & Dokumen',
            desc: 'Melayani print dokumen kilat, fotokopi, pengetikan, formatting dokumen sesuai panduan, hingga jilid hardcover skripsi resmi ITS.'
        },
        'konsinyasi': {
            title: 'Unit Konsinyasi (Titip Jual Mahasiswa)',
            desc: 'Wadah wirausaha bagi mahasiswa ITS untuk menitipkan produk merchandise, stiker, karya kreatif, dan produk fisik dengan pembagian hasil transparan.'
        },
        'kreatif': {
            title: 'Unit Jasa Kreatif',
            desc: 'Layanan terampil pembuatan desain grafis poster/feed, fotografi personal dan wisuda, pembuatan video reels promosi, hingga prototipe UI/UX.'
        }
    };

    /* ==========================================================================
       STATE: ORDER / CART
       ========================================================================== */
    let cart = [];

    const formatIDR = (num) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(num);
    };

    /* ==========================================================================
       TOAST NOTIFICATION HELPER
       ========================================================================== */
    const toastContainer = document.getElementById('toast-container');

    const showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';
        
        toast.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3200);
    };

    /* ==========================================================================
       1. NAVIGATION & SCROLL HANDLERS
       ========================================================================== */
    const header = document.getElementById('header');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('nav-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        highlightActiveSection();
    });

    const toggleMobileMenu = () => {
        navMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) toggleMobileMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }

    /* ==========================================================================
       2. CATALOG RENDERING & FILTERING & SEARCH
       ========================================================================== */
    const menuGrid = document.getElementById('menu-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const bannerTitle = document.getElementById('unit-banner-title');
    const bannerDesc = document.getElementById('unit-banner-desc');
    const searchInput = document.getElementById('catalog-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    let currentCategory = 'all';
    let currentSearchQuery = '';

    const renderCatalog = (filter = currentCategory, query = currentSearchQuery) => {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';
        currentCategory = filter;
        currentSearchQuery = query;

        let filtered = filter === 'all' 
            ? catalogData 
            : catalogData.filter(item => item.unit === filter);

        if (query) {
            const q = query.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) ||
                item.desc.toLowerCase().includes(q) ||
                item.notes.toLowerCase().includes(q) ||
                item.tag.toLowerCase().includes(q) ||
                item.unitLabel.toLowerCase().includes(q)
            );
        }

        if (unitDescriptions[filter] && bannerTitle && bannerDesc) {
            if (query) {
                bannerTitle.textContent = `Hasil Pencarian: "${query}"`;
                bannerDesc.textContent = `Ditemukan ${filtered.length} layanan/produk yang sesuai di kategori terpilih.`;
            } else {
                bannerTitle.textContent = unitDescriptions[filter].title;
                bannerDesc.textContent = unitDescriptions[filter].desc;
            }
        }

        if (filtered.length === 0) {
            menuGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: rgba(16, 25, 63, 0.5); border-radius: 20px; border: 1px dashed rgba(255, 255, 255, 0.12);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; color: var(--blue-accent); margin-bottom: 16px; opacity: 0.8;"></i>
                    <h3 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 8px;">Tidak Ada Layanan yang Cocok</h3>
                    <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 420px; margin: 0 auto 20px;">Coba gunakan kata kunci pencarian yang lain atau pilih kategori "Semua Unit".</p>
                    <button class="btn btn-outline btn-sm" id="reset-filter-search-btn">Reset Pencarian</button>
                </div>
            `;
            const resetBtn = document.getElementById('reset-filter-search-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    if (searchInput) searchInput.value = '';
                    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
                    currentSearchQuery = '';
                    const allBtn = document.querySelector('.category-btn[data-category="all"]');
                    if (allBtn) allBtn.click();
                    else renderCatalog('all', '');
                });
            }
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement('article');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="card-img-wrap">
                    <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
                    <span class="card-tag">${item.tag}</span>
                    <span class="card-unit-label">${item.unitLabel}</span>
                </div>
                <div class="card-body">
                    <div class="card-header-row">
                        <h3 class="card-title">${item.name}</h3>
                    </div>
                    <p class="card-desc">${item.desc}</p>
                    <span class="card-notes"><i class="fa-solid fa-sparkles"></i> ${item.notes}</span>
                    <div class="card-footer">
                        <span class="card-price">${formatIDR(item.price)}</span>
                        <button class="add-to-cart-btn" data-id="${item.id}" aria-label="Pilih ${item.name}">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            menuGrid.appendChild(card);
        });

        menuGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.getAttribute('data-id');
                addToCart(itemId);
            });
        });
    };

    // Search Input listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = query ? 'block' : 'none';
            }
            renderCatalog(currentCategory, query);
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                clearSearchBtn.style.display = 'none';
                searchInput.focus();
                renderCatalog(currentCategory, '');
            }
        });
    }

    // Category Buttons click
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-category');
            renderCatalog(cat, currentSearchQuery);
        });
    });

    // Hero 4 Pillars click to filter
    document.querySelectorAll('.unit-pill-item').forEach(pill => {
        pill.addEventListener('click', () => {
            const targetCat = pill.getAttribute('data-target');
            const targetBtn = document.querySelector(`.category-btn[data-category="${targetCat}"]`);
            if (targetBtn) {
                targetBtn.click();
                const menuEl = document.getElementById('menu');
                if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Links with data-filter (e.g. from 4 unit cards or footer)
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', () => {
            const cat = link.getAttribute('data-filter');
            const targetBtn = document.querySelector(`.category-btn[data-category="${cat}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
        });
    });

    /* ==========================================================================
       3. CART DRAWER & ORDER LOGIC
       ========================================================================== */
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const cartBadge = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyState = document.getElementById('cart-empty-state');
    const cartFooter = document.getElementById('cart-footer');
    const cartGrandTotalEl = document.getElementById('cart-grand-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutWhatsAppBtn = document.getElementById('checkout-whatsapp-btn');
    const emptyCartBrowseBtn = document.getElementById('empty-cart-browse-btn');

    const toggleCart = () => {
        if (!cartDrawer || !cartDrawerOverlay) return;
        cartDrawer.classList.toggle('active');
        cartDrawerOverlay.classList.toggle('active');
        document.body.style.overflow = cartDrawer.classList.contains('active') ? 'hidden' : '';
    };

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', toggleCart);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', toggleCart);
    if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', toggleCart);
    if (emptyCartBrowseBtn) emptyCartBrowseBtn.addEventListener('click', toggleCart);

    const addToCart = (itemId) => {
        const product = catalogData.find(item => item.id === itemId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                unitLabel: product.unitLabel,
                price: product.price,
                image: product.image,
                qty: 1
            });
        }

        updateCartUI();
        showToast(`"${product.name}" ditambahkan ke daftar layanan!`, 'success');
    };

    const updateCartUI = () => {
        if (!cartBadge || !cartEmptyState || !cartItemsContainer || !cartFooter) return;
        const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
        cartBadge.textContent = totalCount;

        if (cart.length === 0) {
            cartEmptyState.style.display = 'flex';
            cartItemsContainer.style.display = 'none';
            cartFooter.style.display = 'none';
            return;
        }

        cartEmptyState.style.display = 'none';
        cartItemsContainer.style.display = 'flex';
        cartFooter.style.display = 'block';

        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;

            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">${formatIDR(item.price)}</span>
                    <div class="cart-item-ctrls">
                        <button class="qty-btn btn-dec" data-id="${item.id}" aria-label="Kurangi"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-number">${item.qty}</span>
                        <button class="qty-btn btn-inc" data-id="${item.id}" aria-label="Tambah"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}" aria-label="Hapus item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });

        if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatIDR(total);

        cartItemsContainer.querySelectorAll('.btn-inc').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const target = cart.find(i => i.id === id);
                if (target) {
                    target.qty += 1;
                    updateCartUI();
                }
            });
        });

        cartItemsContainer.querySelectorAll('.btn-dec').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const target = cart.find(i => i.id === id);
                if (target) {
                    if (target.qty > 1) {
                        target.qty -= 1;
                    } else {
                        cart = cart.filter(i => i.id !== id);
                    }
                    updateCartUI();
                }
            });
        });

        cartItemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                cart = cart.filter(i => i.id !== id);
                updateCartUI();
                showToast('Item berhasil dihapus.', 'info');
            });
        });
    };

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            if (confirm('Bersihkan semua pilihan layanan dari keranjang?')) {
                cart = [];
                updateCartUI();
                showToast('Keranjang layanan berhasil dibersihkan.', 'info');
            }
        });
    }

    if (checkoutWhatsAppBtn) {
        checkoutWhatsAppBtn.addEventListener('click', () => {
            if (cart.length === 0) return;

            let message = `*HALO ADMIN HMP-TI ITS BUSINESS HUB*\n`;
            message += `Saya ingin memesan / berkonsultasi mengenai rincian layanan berikut:\n\n`;

            let total = 0;
            cart.forEach((item, index) => {
                const lineTotal = item.price * item.qty;
                total += lineTotal;
                message += `${index + 1}. *${item.name}* [${item.unitLabel}]\n   Jumlah: ${item.qty}x (${formatIDR(lineTotal)})\n`;
            });

            message += `\n*TOTAL ESTIMASI:* ${formatIDR(total)}`;
            message += `\n\nNama Pemesan:\nNRP / Departemen:\nCatatan Khusus:\n\nMohon informasi prosedur dan ketersediaan slotnya. Terima kasih!`;

            const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
            showToast('Membuka WhatsApp Admin HMP-TI ITS...', 'success');
        });
    }

    /* ==========================================================================
       4. FORM PENGAJUAN KONSINYASI / TITIP JUAL
       ========================================================================== */
    const konsinyasiModalOverlay = document.getElementById('konsinyasi-modal-overlay');
    const openKonsinyasiFormBtn = document.getElementById('open-konsinyasi-form-btn');
    const heroOpenKonsinyasiBtn = document.getElementById('hero-open-konsinyasi-btn');
    const closeKonsinyasiModalBtn = document.getElementById('close-konsinyasi-modal-btn');
    const konsinyasiForm = document.getElementById('konsinyasi-form');

    const toggleKonsinyasiModal = () => {
        if (!konsinyasiModalOverlay) return;
        konsinyasiModalOverlay.classList.toggle('active');
        document.body.style.overflow = konsinyasiModalOverlay.classList.contains('active') ? 'hidden' : '';
    };

    if (openKonsinyasiFormBtn) openKonsinyasiFormBtn.addEventListener('click', toggleKonsinyasiModal);
    if (heroOpenKonsinyasiBtn) heroOpenKonsinyasiBtn.addEventListener('click', toggleKonsinyasiModal);
    document.querySelectorAll('.open-konsin-modal-trigger').forEach(el => {
        el.addEventListener('click', toggleKonsinyasiModal);
    });

    if (closeKonsinyasiModalBtn) closeKonsinyasiModalBtn.addEventListener('click', toggleKonsinyasiModal);
    if (konsinyasiModalOverlay) {
        konsinyasiModalOverlay.addEventListener('click', (e) => {
            if (e.target === konsinyasiModalOverlay) toggleKonsinyasiModal();
        });
    }

    if (konsinyasiForm) {
        konsinyasiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('konsin-nama').value.trim();
            const barang = document.getElementById('konsin-barang').value.trim();
            const harga = document.getElementById('konsin-harga').value.trim();
            const stok = document.getElementById('konsin-stok').value.trim();
            const ket = document.getElementById('konsin-ket').value.trim();

            let waMsg = `*FORMULIR PENGAJUAN TITIP JUAL / KONSINYASI HMP-TI ITS*\n\n`;
            waMsg += `• Nama Mahasiswa & NRP: ${nama}\n`;
            waMsg += `• Nama Produk: ${barang}\n`;
            waMsg += `• Harga Jual Satuan: Rp ${parseInt(harga, 10).toLocaleString('id-ID')}\n`;
            waMsg += `• Estimasi Jumlah Stok: ${stok}\n`;
            if (ket) waMsg += `• Keterangan / Spesifikasi: ${ket}\n`;
            waMsg += `\nMohon konfirmasi verifikasi dan jadwal penyerahan barang ke Sekretariat HMP-TI. Terima kasih!`;

            const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(waMsg)}`;
            window.open(waUrl, '_blank');

            konsinyasiForm.reset();
            toggleKonsinyasiModal();
            showToast('Form pengajuan berhasil disiapkan! Mengarahkan ke WhatsApp PIC...', 'success');
        });
    }

    /* ==========================================================================
       5. REVIEWS & TESTIMONI FEED & MODAL
       ========================================================================== */
    const reviewsContainer = document.getElementById('reviews-container');
    const totalReviewsCount = document.getElementById('total-reviews-count');
    const openReviewModalBtn = document.getElementById('open-review-modal-btn');
    const reviewModalOverlay = document.getElementById('review-modal-overlay');
    const closeReviewModalBtn = document.getElementById('close-review-modal-btn');
    const addReviewForm = document.getElementById('add-review-form');
    const starOptions = document.querySelectorAll('.star-option');
    const selectedRatingLabel = document.getElementById('selected-rating-label');

    let currentRatingSelection = 5;

    const ratingDescriptions = {
        1: '1 Bintang (Kurang Sekali)',
        2: '2 Bintang (Cukup)',
        3: '3 Bintang (Bagus)',
        4: '4 Bintang (Sangat Bagus)',
        5: '5 Bintang (Sangat Puas)'
    };

    const renderReviews = () => {
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';
        if (totalReviewsCount) totalReviewsCount.textContent = reviewsData.length;

        reviewsData.forEach(item => {
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= item.rating) {
                    starsHtml += '<i class="fa-solid fa-star"></i>';
                } else {
                    starsHtml += '<i class="fa-regular fa-star"></i>';
                }
            }

            const initials = item.author
                .split(' ')
                .map(n => n[0])
                .slice(0, 2)
                .join('')
                .toUpperCase();

            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="review-card-header">
                    <div class="reviewer-profile">
                        <div class="avatar-initials">${initials}</div>
                        <div>
                            <h4 class="reviewer-name">${item.author}</h4>
                            <span class="review-date">${item.date}</span>
                        </div>
                    </div>
                    <div class="review-stars">
                        ${starsHtml}
                    </div>
                </div>
                <p class="review-body">"${item.text}"</p>
                <span class="review-unit-tag"><i class="fa-solid fa-circle-check"></i> ${item.unit}</span>
            `;
            reviewsContainer.appendChild(card);
        });
    };

    starOptions.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.getAttribute('data-rating'), 10);
            currentRatingSelection = val;
            updateStarDisplay(val);
        });

        star.addEventListener('mouseenter', () => {
            const val = parseInt(star.getAttribute('data-rating'), 10);
            updateStarDisplay(val);
        });
    });

    const starRatingSelect = document.getElementById('star-rating-select');
    if (starRatingSelect) {
        starRatingSelect.addEventListener('mouseleave', () => {
            updateStarDisplay(currentRatingSelection);
        });
    }

    const updateStarDisplay = (rating) => {
        starOptions.forEach(s => {
            const sVal = parseInt(s.getAttribute('data-rating'), 10);
            if (sVal <= rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
        if (selectedRatingLabel) {
            selectedRatingLabel.textContent = ratingDescriptions[rating] || `${rating} Bintang`;
        }
    };

    const toggleReviewModal = () => {
        if (!reviewModalOverlay) return;
        reviewModalOverlay.classList.toggle('active');
        document.body.style.overflow = reviewModalOverlay.classList.contains('active') ? 'hidden' : '';
    };

    if (openReviewModalBtn) openReviewModalBtn.addEventListener('click', toggleReviewModal);
    if (closeReviewModalBtn) closeReviewModalBtn.addEventListener('click', toggleReviewModal);
    if (reviewModalOverlay) {
        reviewModalOverlay.addEventListener('click', (e) => {
            if (e.target === reviewModalOverlay) toggleReviewModal();
        });
    }

    if (addReviewForm) {
        addReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const author = document.getElementById('review-author').value.trim();
            const text = document.getElementById('review-text').value.trim();
            const unit = document.getElementById('review-unit').value;

            if (!author || !text) return;

            const newReview = {
                id: Date.now(),
                author: author,
                rating: currentRatingSelection,
                date: 'Baru saja',
                text: text,
                unit: unit
            };

            reviewsData.unshift(newReview);
            renderReviews();

            addReviewForm.reset();
            currentRatingSelection = 5;
            updateStarDisplay(5);
            toggleReviewModal();

            showToast('Terima kasih! Ulasan Anda telah berhasil diterbitkan.', 'success');
        });
    }

    /* ==========================================================================
       6. LIVE OPERATING STATUS & COPY ADDRESS
       ========================================================================== */
    const liveBanner = document.getElementById('status-live-banner');
    const liveStatusText = document.getElementById('live-status-text');
    const heroStatusTitle = document.getElementById('hero-status-title');
    const copyAddressBtn = document.getElementById('copy-address-btn');
    const sekreAddress = document.getElementById('sekre-address');

    const updateLiveOperatingStatus = () => {
        if (!liveBanner || !liveStatusText) return;
        const now = new Date();
        const day = now.getDay(); // 0: Sun, 6: Sat
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour + minute / 60;

        let isOpen = false;
        let statusMsg = '';

        if (day >= 1 && day <= 5) {
            // Senin - Jumat: 08:00 - 20:00
            if (currentTime >= 8.0 && currentTime < 20.0) {
                isOpen = true;
                statusMsg = 'Buka Sekarang: Layanan s.d 20:00 WIB';
            } else {
                statusMsg = 'Sedang Tutup: Buka kembali besok 08:00 WIB';
            }
        } else if (day === 6) {
            // Sabtu: 09:00 - 15:00
            if (currentTime >= 9.0 && currentTime < 15.0) {
                isOpen = true;
                statusMsg = 'Buka Hari Ini: Layanan s.d 15:00 WIB';
            } else {
                statusMsg = 'Sedang Tutup: Buka kembali Senin 08:00 WIB';
            }
        } else {
            // Minggu: Tutup
            statusMsg = 'Sedang Tutup: Buka kembali Senin 08:00 WIB';
        }

        if (isOpen) {
            liveBanner.className = 'status-live-banner';
            liveStatusText.textContent = statusMsg;
            if (heroStatusTitle) heroStatusTitle.textContent = 'Buka Hari Ini';
        } else {
            liveBanner.className = 'status-live-banner closed';
            liveStatusText.textContent = statusMsg;
            if (heroStatusTitle) heroStatusTitle.textContent = 'Buka Jam Kerja';
        }
    };

    if (copyAddressBtn && sekreAddress) {
        copyAddressBtn.addEventListener('click', async () => {
            const textToCopy = sekreAddress.textContent;
            try {
                await navigator.clipboard.writeText(textToCopy);
                showToast('Alamat Sekretariat berhasil disalin!', 'success');
            } catch (err) {
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Alamat Sekretariat berhasil disalin!', 'success');
            }
        });
    }

    /* ==========================================================================
       7. NEWSLETTER SUBSCRIPTION FORM
       ========================================================================== */
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');

    if (newsletterForm && newsletterEmail) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterEmail.value.trim();
            if (email) {
                showToast(`Terima kasih! Notifikasi promo telah didaftarkan ke ${email}`, 'success');
                newsletterEmail.value = '';
            }
        });
    }

    /* ==========================================================================
       INITIALIZE
       ========================================================================== */
    renderCatalog('all');
    renderReviews();
    updateCartUI();
    updateLiveOperatingStatus();

});
