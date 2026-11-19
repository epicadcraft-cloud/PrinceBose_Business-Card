// Reads configuration from CARD_CONFIG (defined in config.js)
const CONFIG = (typeof CARD_CONFIG !== 'undefined') ? CARD_CONFIG : {
  firstName: "Elbinmon",
  lastName: "Edavazhickal",
  title: "CEO and Founder of Epic Adcraft",
  agencyHeadline: "Digital Marketing Agency in<br>Kerala | Epic Adcraft, Kochi",
  agencyUrl: "https://epicadcraft.com",
  phone: "+919876543210",
  whatsapp: "+919876543210",
  email: "contact@epicadcraft.com",
  instagramUrl: "https://instagram.com",
  linkedinUrl: "https://linkedin.com",
  photoFile: "profile.jpg",
  location: "Kochi, Kerala"
};

// Full name helper
const fullName = `${CONFIG.firstName} ${CONFIG.lastName}`.trim();

// Initialize and populate DOM elements from CONFIG
function applyConfigToUI() {
  // Document title
  document.title = `${fullName} | ${CONFIG.title}`;

  // Avatar / Photo
  const cardAvatar = document.getElementById('cardAvatar');
  if (cardAvatar) {
    cardAvatar.src = CONFIG.photoFile;
    cardAvatar.alt = fullName;
  }

  // Name elements
  const cardName = document.getElementById('cardName');
  if (cardName) {
    cardName.innerHTML = `<span class="first-name">${CONFIG.firstName}</span><span class="last-name">${CONFIG.lastName}</span>`;
  }

  // Role / Title
  const cardTitle = document.getElementById('cardTitle');
  if (cardTitle) {
    cardTitle.textContent = CONFIG.title;
  }

  // Agency Pill Link & Headline
  const btnAgencyLink = document.getElementById('btnAgencyLink');
  const agencyHeadline = document.getElementById('agencyHeadline');
  if (btnAgencyLink) {
    btnAgencyLink.href = CONFIG.agencyUrl;
  }
  if (agencyHeadline) {
    agencyHeadline.innerHTML = CONFIG.agencyHeadline;
  }

  // Phone Call
  const btnCall = document.getElementById('btnCall');
  if (btnCall) {
    btnCall.href = `tel:${CONFIG.phone.replace(/[^0-9+]/g, '')}`;
  }

  // WhatsApp
  const btnWhatsApp = document.getElementById('btnWhatsApp');
  if (btnWhatsApp) {
    const cleanWA = CONFIG.whatsapp.replace(/[^0-9]/g, '');
    btnWhatsApp.href = `https://wa.me/${cleanWA}?text=Hi%20${encodeURIComponent(fullName)}`;
  }

  // Instagram
  const btnInstagram = document.getElementById('btnInstagram');
  if (btnInstagram) {
    btnInstagram.href = CONFIG.instagramUrl;
  }

  // LinkedIn
  const btnLinkedIn = document.getElementById('btnLinkedIn');
  if (btnLinkedIn) {
    btnLinkedIn.href = CONFIG.linkedinUrl;
  }
}

// Save Contact Directly to Phone Address Book
function saveContactToPhone() {
  const cleanWA = CONFIG.whatsapp.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWA}`;

  // Comprehensive vCard 3.0 specification bundling phone, whatsapp, instagram, and website
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${fullName}`,
    `N:${CONFIG.lastName};${CONFIG.firstName};;;`,
    'ORG:Epic Adcraft',
    `TITLE:${CONFIG.title}`,
    `TEL;TYPE=CELL,VOICE,PREF:${CONFIG.phone}`,
    `TEL;TYPE=WHATSAPP:${CONFIG.whatsapp}`,
    `EMAIL;TYPE=WORK,INTERNET:${CONFIG.email}`,
    `URL;TYPE=WORK:${CONFIG.agencyUrl}`,
    `URL;TYPE=INSTAGRAM:${CONFIG.instagramUrl}`,
    `URL;TYPE=LINKEDIN:${CONFIG.linkedinUrl}`,
    `X-SOCIALPROFILE;TYPE=instagram:${CONFIG.instagramUrl}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${CONFIG.linkedinUrl}`,
    `X-SOCIALPROFILE;TYPE=whatsapp:${waUrl}`,
    `ADR;TYPE=WORK:;;${CONFIG.location};;;;`,
    `NOTE:Digital Marketing Agency in Kerala | Epic Adcraft, Kochi\\nMobile: ${CONFIG.phone}\\nWhatsApp: ${waUrl}\\nInstagram: ${CONFIG.instagramUrl}\\nWebsite: ${CONFIG.agencyUrl}`,
    'END:VCARD'
  ].join('\r\n');

  // Detect iOS vs Android / Desktop
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    // On iOS Safari, data: URI directly opens the native Contacts sheet ("Create New Contact")
    window.location.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
  } else {
    // On Android & Modern Browsers, Blob download automatically triggers the Contacts app
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${CONFIG.firstName}_${CONFIG.lastName}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  showToast('Saving to Phone Contacts...');
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Event Listeners
const btnSaveContact = document.getElementById('btnSaveContact');
if (btnSaveContact) {
  btnSaveContact.addEventListener('click', saveContactToPhone);
}

const cardName = document.getElementById('cardName');
if (cardName) {
  cardName.addEventListener('click', saveContactToPhone);
}

// Initialize on page load
applyConfigToUI();
