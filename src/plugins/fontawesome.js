// plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3Alt, faJs, faVuejs, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faPenNib, faVideo, faImage, faMagic, faPhone, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
  faWordpress,
  faPhp,
  faPenNib,
  faVideo,
  faImage,
  faMagic,
  faPhone,
  faEnvelope,
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
  faArrowUpRightFromSquare
);

export default FontAwesomeIcon;
