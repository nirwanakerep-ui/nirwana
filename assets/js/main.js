/**
 * Nirwana Kerep Landing Page - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking nav links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Interactive Tabs: Satu Aset, Banyak Kemungkinan
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.add('hidden'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`tab-${targetId}`);
      if (activePanel) {
        activePanel.classList.remove('hidden');
      }
    });
  });

  // 3. Select Kavling from Site Plan Grid
  const selectKavlingBtns = document.querySelectorAll('.btn-select-kavling');
  const selectKavlingDropdown = document.getElementById('select-kavling');

  selectKavlingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const kavlingVal = btn.getAttribute('data-kavling');
      if (selectKavlingDropdown && kavlingVal) {
        selectKavlingDropdown.value = kavlingVal;
        
        // Highlight dropdown briefly
        selectKavlingDropdown.classList.add('ring-2', 'ring-goldAccent');
        setTimeout(() => {
          selectKavlingDropdown.classList.remove('ring-2', 'ring-goldAccent');
        }, 1500);

        // Scroll to form smoothly
        const contactSection = document.getElementById('kontak');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 4. WhatsApp Form Handler
  const waForm = document.getElementById('survey-form');
  const waPhoneDefault = '6285156819108'; // Nomor resmi marketing Nirwana Kerep (+62 851-5681-9108)

  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('input-nama')?.value.trim() || '-';
      const telepon = document.getElementById('input-telepon')?.value.trim() || '-';
      const kavling = document.getElementById('select-kavling')?.value || 'Konsultasi Umum (Belum Pilih)';
      const rencana = document.getElementById('select-rencana')?.value || 'Belum Ditentukan';
      const sumber = document.getElementById('select-sumber')?.value || 'Website';
      const pesan = document.getElementById('input-pesan')?.value.trim() || 'Ingin informasi ketersediaan kavling dan survey lokasi.';

      const waMessage = 
`Halo Tim Marketing Nirwana Kerep Ambarawa,
Saya tertarik dengan penawaran Kavling Eksklusif Nirwana Kerep.

*Informasi Calon Pembeli:*
• Nama: ${nama}
• Kontak / WA: ${telepon}
• Minat Luas Kavling: ${kavling}
• Rencana Penggunaan: ${rencana}
• Menemukan dari: ${sumber}
• Catatan / Pertanyaan: ${pesan}

Mohon konfirmasi ketersediaan unit dan panduan jadwal untuk survey lokasi langsung. Terima kasih.`;

      const targetUrl = `https://wa.me/${waPhoneDefault}?text=${encodeURIComponent(waMessage)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // 5. Image Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  const galleryItems = document.querySelectorAll('.clickable-preview');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src') || item.getAttribute('src');
      const caption = item.getAttribute('data-caption') || item.getAttribute('alt') || 'Nirwana Kerep Ambarawa';
      
      if (lightboxImg && lightboxModal) {
        lightboxImg.src = src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 6. Dynamic Year in Footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
