import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFaceSmile,
  faHeart,
  faComment,
  faBookmark,
  faMessage,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faPinterest,
  faSistrix,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faFaceSmile,
  faFacebook,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faPinterest,
  faHeart,
  faComment,
  faBookmark,
  faMessage,
  faThumbsUp,
  faSistrix
);

export { FontAwesomeIcon };
