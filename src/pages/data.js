import home2 from '../../assets/shared/home2.jpg';
import home3 from '../../assets/shared/home3.jpg';
import { FaMapMarked } from 'react-icons/fa'; // Correct import

export const data = [
  {
    images: [
      { src: home3, alt: 'Image 1', rotate: true, position: 'top' },
      { src: home2, alt: 'Image 2', position: 'bottom' }
    ]
  }
];

export const modelOptions = [
  { value: "female-models", label: "Female Models" },
  { value: "male-models", label: "Male Models" },
  { value: "kids-models", label: "Kids Models" },
  { value: "eldery-models", label: "Eldery Models" },
];

export const locationOptions = [
  { icon: <FaMapMarked/>, label: "Find Location" }, // Corrected
  { value: "Prishtina", label: "Prishtina" },
  { value: "Peja", label: "Peja" },
  { value: "Prizeren", label: "Prizeren" },
  { value: "Gjakove", label: "Gjakove" }
];
