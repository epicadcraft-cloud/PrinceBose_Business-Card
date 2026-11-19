/**
 * DIGITAL BUSINESS CARD CONFIGURATION
 * നിങ്ങളുടെ വിവരങ്ങൾ മാറ്റാൻ താഴെ കാണുന്ന വിവരങ്ങൾ മാത്രം എഡിറ്റ് ചെയ്താൽ മതിയാകും.
 * Just edit the values below to update your card details anytime!
 */
const CARD_CONFIG = {
  // Your Full Name (പേര്)
  firstName: "Prince",
  lastName: "Bose",

  // Designation & Company (തസ്തിക & സ്ഥാപനം)
  title: "CEO and Founder of Epic Adcraft",

  // Agency Pill Text (ഫ്രോസ്റ്റഡ് പില്ലിൽ കാണിക്കേണ്ട വാചകം)
  agencyHeadline: "Digital Marketing Agency in<br>Kerala | Epic Adcraft, Kochi",
  agencyUrl: "https://epicadcraft.com",

  // Contact Numbers (മൊബൈൽ & വാട്സാപ്പ് നമ്പറുകൾ)
  phone: "+919562692736",       // For direct calling / വിളിക്കാൻ
  whatsapp: "+919562692736",    // For WhatsApp chat

  // Email (ഇമെയിൽ - കോൺടാക്റ്റിൽ സേവ് ആകും)
  email: "epicadcraft@gmail.com",

  // Social Media Links (സോഷ്യൽ മീഡിയ പ്രൊഫൈലുകൾ)
  instagramUrl: "https://www.instagram.com/epicadcraft",
  linkedinUrl: "https://www.linkedin.com/in/princeboseofficial",

  // Profile Photo File Name (ഫോട്ടോ ഫയൽ പേര്)
  photoFile: "profile.jpg",

  // City / Location (സ്ഥലം)
  location: "Kochi, Kerala"
};
// Export for module or global use
if (typeof module !== 'undefined') module. exports = CARD_CONFIG;
