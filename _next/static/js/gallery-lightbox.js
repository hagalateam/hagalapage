(function () {
  function initGallery() {
    if (document.getElementById('godnirium-lightbox')) return;

    var galleryItems = Array.prototype.slice.call(
      document.querySelectorAll('button[aria-label^="Ampliar imagen"] img')
    );
    if (!galleryItems.length) return;

    var currentIndex = 0;

    var overlay = document.createElement('div');
    overlay.id = 'godnirium-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Visor de imágenes');
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99999', 'display:none',
      'align-items:center', 'justify-content:center', 'padding:24px',
      'background:rgba(0,0,0,.88)'
    ].join(';');

    var frame = document.createElement('div');
    frame.style.cssText = 'position:relative;max-width:1200px;width:100%;display:flex;align-items:center;justify-content:center;gap:12px';

    var image = document.createElement('img');
    image.alt = 'GODNIRIUM';
    image.style.cssText = 'display:block;max-width:calc(100vw - 120px);max-height:calc(100vh - 100px);width:auto;height:auto;object-fit:contain;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5)';

    function button(label, text) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', label);
      b.textContent = text;
      b.style.cssText = 'position:fixed;border:1px solid rgba(255,255,255,.25);background:rgba(0,0,0,.55);color:#fff;width:44px;height:44px;border-radius:999px;font-size:24px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center';
      return b;
    }

    var close = button('Cerrar visor', '×');
    close.style.top = '20px';
    close.style.right = '20px';

    var prev = button('Imagen anterior', '‹');
    prev.style.left = '20px';
    prev.style.top = '50%';
    prev.style.transform = 'translateY(-50%)';

    var next = button('Imagen siguiente', '›');
    next.style.right = '20px';
    next.style.top = '50%';
    next.style.transform = 'translateY(-50%)';

    frame.appendChild(image);
    overlay.appendChild(frame);
    overlay.appendChild(close);
    overlay.appendChild(prev);
    overlay.appendChild(next);
    document.body.appendChild(overlay);

    function show(index) {
      currentIndex = (index + galleryItems.length) % galleryItems.length;
      image.src = galleryItems[currentIndex].currentSrc || galleryItems[currentIndex].src;
      image.alt = galleryItems[currentIndex].alt || 'GODNIRIUM';
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function hide() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    document.addEventListener('click', function (event) {
      var buttonEl = event.target.closest && event.target.closest('button[aria-label^="Ampliar imagen"]');
      if (!buttonEl) return;
      var img = buttonEl.querySelector('img');
      var index = galleryItems.indexOf(img);
      if (index !== -1) show(index);
    });

    close.addEventListener('click', hide);
    prev.addEventListener('click', function () { show(currentIndex - 1); });
    next.addEventListener('click', function () { show(currentIndex + 1); });

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) hide();
    });

    document.addEventListener('keydown', function (event) {
      if (overlay.style.display === 'none') return;
      if (event.key === 'Escape') hide();
      if (event.key === 'ArrowLeft') show(currentIndex - 1);
      if (event.key === 'ArrowRight') show(currentIndex + 1);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
