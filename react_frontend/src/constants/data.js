import images from "./images";
import {
  // FaPaperPlane,
  // FaEdit,
  FaRocket,
  // FaShoppingCart,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaNewspaper,
  FaUserTie,
} from "react-icons/fa";
// import { BiDollarCircle } from "react-icons/bi";
// import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <FaRocket style={{ fill: gradient }} />,
    title: "Career Recommendation",
    text: "Offer best-suited career based to your individual interests, skills, and educational background.",
  },
  {
    id: 2,
    icon: <FaNewspaper style={{ fill: gradient }} />,
    title: "Explore Articles",
    text: "Dive into a wealth of articles dedicated to your career journey, navigating the roadmap to success.",
  },
  {
    id: 3,
    icon: <FaUserTie style={{ fill: gradient }} />,
    title: "Consultation with Professionals",
    text: "Experience personalized consultations with industry experts, delving into your career plan for professional journey.",
  },
  // {
  //   id: 4,
  //   icon: <FaEdit style={{ fill: gradient }} />,
  //   title: "Content Creation",
  //   text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  // },
  // {
  //   id: 5,
  //   icon: <ImMagicWand style={{ fill: gradient }} />,
  //   title: "Grpahic Design",
  //   text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  // },
  // {
  //   id: 6,
  //   icon: <FaShoppingCart style={{ fill: gradient }} />,
  //   title: "Media Buying",
  //   text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  // },
];

const about = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: "Ideas & Plans",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
  {
    id: 9,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: "Prompt Strategies",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
];

const features = [
  {
    id: 10,
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 11,
    title: "Trade Shows",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 12,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 13,
    title: "Content Creation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 14,
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 15,
    title: "Media Buying",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 19,
    name: "Marie Jordan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_1,
    rating: 3,
  },
  {
    id: 20,
    name: "Ann Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_2,
    rating: 5,
  },
  {
    id: 21,
    name: "Andrew Bill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_3,
    rating: 2,
  },
  //   {
  //     id: 22,
  //     name: "Jason Stawer",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  //     image: images.customer_img_4,
  //     rating: 4,
  //   },
  //   {
  //     id: 23,
  //     name: "Lisa Green",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  //     image: images.customer_img_5,
  //     rating: 2,
  //   },
  //   {
  //     id: 24,
  //     name: "Anna Doe",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  //     image: images.customer_img_6,
  //     rating: 4,
  //   },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "+959 252982050",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "chanmyaelwin@uit.edu.mm",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "University of Information Technology (UIT)",
  },
];

const sections = {
  services,
  about,
  qualities,
  features,
  portfolio,
  testimonials,
  contact,
};

export default sections;
