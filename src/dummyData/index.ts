import { getCountries } from 'react-phone-number-input';
import { Skill } from './types';


export const countries = getCountries();

export const notifications = {
  requests: { open: 12, read: 10 },
  notifications: { open: 14, read: 10 },
  offers: { open: 2, read: 10 }
};


export const skills: Skill[] = [
  {
    name: 'car mechanic',
    id: 'mechanic1',
    specialty: [
      { id: 1, name: 'all cars' },
      { id: 2, name: 'toyota' },
      { id: 3, name: 'honda' },
      { id: 4, name: 'mercedez benz' }
    ],
    competence: [
      { name: 'all kinds of faults', rating: 0, id: 1 },
      { name: 'breaks', rating: 0, id: 2 },
      { name: 'general service', rating: 0, id: 3 },
      { name: 'engine work', rating: 0, id: 4 }
    ],
    tags: 'auto, car, engine, breaks, clutch, mechanic'
  },
  {
    name: 'tailor',
    id: 'tailor',
    specialty: [
      { id: 1, name: 'all fashion' },
      { id: 2, name: 'men fashion' },
      { id: 3, name: 'ladies fashion' },
      { id: 4, name: 'kids fashion' }
    ],
    competence: [
      { name: 'all kinds of styles', rating: 0, showFor: [], id: 1 },
      { name: 'bridal train', rating: 0, showFor: [3, 4], id: 2 },
      { name: 'wedding gown', rating: 0, showFor: [3, 4], id: 3 },
      { name: 'suits', rating: 0, showFor: [], id: 4 }
    ],
    tags: 'fashion, designer, seamtress, tailor, '
  },
  {
    name: 'motorcycle mechanic',
    aka: { ng: 'okada' },
    id: 'bike1',
    specialty: [
      { id: 1, name: 'all bikes' },
      { id: 2, name: 'bajaj' },
      { id: 3, name: 'jincheng' },
      { id: 4, name: 'honda' }
    ],
    competence: [
      { name: 'all kinds of faults', rating: 0, id: 1 },
      { name: 'breaks', rating: 0, id: 2},
      { name: 'general service', rating: 0, id: 3 },
      { name: 'engine work', rating: 0, id: 4 }
    ],
    tags: 'motorcycle, engineer, repairer, engine, okada, mechanic'
  },
  {
    name: 'painter',
    id: 'housePainter',
    specialty: [
      { id: 1, name: 'all  structures' },
      { id: 2, name: 'industria plants' },
      { id: 3, name: 'residential homes' },
      { id: 4, name: 'sky scrapers' }
    ],
    competence: [
      { name: 'all kinds of styles', rating: 0, showFor: [], id: 1 },
      { name: 'external plastering', rating: 0, showFor: [3, 4], id: 2 },
      { name: 'internal plastering', rating: 0, showFor: [3, 4], id: 3 },
      { name: 'architectural edifices', rating: 0, showFor: [], id: 4 }
    ],
    tags: 'plaster, paint, decoration, buildings, homes, '
  },
  {
    name: 'engineboat mechanic',
    id: 'engineboat',
    specialty: [
      { id: 1, name: 'all boats' },
      { id: 2, name: 'bajaj' },
      { id: 3, name: 'yamaha' },
      { id: 4, name: 'honda' }
    ],
    competence: [
      { name: 'all kinds of faults', rating: 0, id: 1 },
      { name: 'breaks', rating: 0, id: 2 },
      { name: 'general service', rating: 0, id: 3 },
      { name: 'engine work', rating: 0, id: 4 }
    ],
    tags: 'auto, engineer, boat, repairer, engine, breaks, ferry'
  },
  {
    name: 'barber',
    id: 'barber1',
    specialty: [
      { id: 1, name: 'anyone' },
      { id: 2, name: 'men haircut' },
      { id: 3, name: 'ladies haircut' },
      { id: 4, name: 'kids haircut' }
    ],
    competence: [
      { name: 'all kinds of styles', rating: 0, showFor: [], id: 1 },
      { name: 'hair design', rating: 0, showFor: [3, 4], id: 2 },
      { name: 'stars cuts', rating: 0, showFor: [3, 4], id: 3 },
      { name: 'dreadlocks', rating: 0, showFor: [], id: 4 }
    ],
    tags: 'hair cut, saloon, children barber, beauty'
  },
  {
    name: 'trycycle mechanic',
    aka: {ng: 'keke'},
    id: 'trycycle',
    specialty: [
      { id: 1, name: 'all trycycle' },
      { id: 2, name: 'bajaj' },
      { id: 3, name: 'yamaha' },
      { id: 4, name: 'tvs' }
    ],
    competence: [
      { name: 'all kinds of faults', rating: 0, id: 1 },
      { name: 'breaks', rating: 0, id: 2 },
      { name: 'general service', rating: 0, id: 3 },
      { name: 'engine work', rating: 0, id: 4 }
    ],
    tags: 'auto, repairer, trycycle, breaks'
  },
  {
    name: 'hair dresser',
    id: 'hairdresser',
    specialty: [
      { id: 1, name: 'unisex' },
      { id: 2, name: 'men hair' },
      { id: 3, name: 'ladies hair' },
      { id: 4, name: 'kids hair' }
    ],
    competence: [
      { name: 'all kinds of styles', rating: 0, showFor: [], id: 1 },
      { name: 'plating', rating: 0, showFor: [3, 4], id: 2 },
      { name: 'perming', rating: 0, showFor: [3, 4], id: 3 },
      { name: 'watching and setting', rating: 0, showFor: [], id: 4 }
    ],
    tags: 'beauty, saloon, hair, plating '
  },
  {
    name: 'truck mechanic',
    aka: { ng: 'trailer' },
    id: 'truck',
    specialty: [
      { id: 1, name: 'all trucks' },
      { id: 2, name: 'isuzu' },
      { id: 3, name: 'man diesel' },
      { id: 4, name: 'iveco' }
    ],
    competence: [
      { name: 'all kinds of faults', rating: 0, id: 1 },
      { name: 'breaks', rating: 0, id: 2 },
      { name: 'general service', rating: 0, id: 3 },
      { name: 'engine work', rating: 0, id: 4 }
    ],
    tags: 'auto, engineer, mechanic, repairer, truck, engine, expert, breaks'
  },
  {
    name: 'chef',
    id: 'chef1',
    specialty: [
      { id: 1, name: 'all cuisine' },
      { id: 2, name: 'local cuisine' },
      { id: 3, name: 'international cuisine' },
      { id: 4, name: 'baking and confectionaries' }
    ],
    competence: [
      { name: 'all kinds of meals', rating: 0, showFor: [], id: 1 },
      { name: 'chineese food', rating: 0, showFor: [3, 4], id: 2 },
      { name: 'indian food', rating: 0, showFor: [3, 4], id: 3 },
      { name: 'mexican food', rating: 0, showFor: [], id: 4 }
    ],
    tags: 'cuisine, cook, food, hospitality, baking, confectionaries '
  },
  {
    name: 'panel beater',
    id: 'panelbeater',
    specialty: [
      { id: 1, name: 'all bodies' },
      { id: 2, name: 'cars' },
      { id: 3, name: 'boats' },
      { id: 4, name: 'trucks' }
    ],
    competence: [
      { name: 'all kinds of faults', rating: 0, id: 1 },
      { name: 'upgrading', rating: 0, id: 2 },
      { name: 'bumper', rating: 0, id: 3 },
      { name: 'finishing', rating: 0, id: 4 }
    ],
    tags: 'auto, panel, body works, makeover, bake'
  },
  {
    name: 'painter',
    id: 'autopainter',
    specialty: [
      { id: 1, name: 'all fashion' },
      { id: 2, name: 'men fashion' },
      { id: 3, name: 'ladies fashion' },
      { id: 4, name: 'kids fashion' }
    ],
    competence: [
      { name: 'all kinds of styles', rating: 0, showFor: [], id: 1 },
      { name: 'bridal train', rating: 0, showFor: [3, 4], id: 2 },
      { name: 'wedding gown', rating: 0, showFor: [3, 4], id: 3 },
      { name: 'suits', rating: 0, showFor: [], id: 4 }
    ],
    tags: 'oven bake, body, spray, renew, body works, auto'
  }
];

// export const personalInfoStepperData = [
//   {
//     name: 'personal info',
//     details: 'Essential to gain trust',
//     icon: <CiUser />
//   },
//   {
//     name: 'residential address',
//     details: 'Improve your KYC level',
//     icon: <CiHome />
//   },
//   {
//     name: 'shop address',
//     details: 'Let clients locate you',
//     icon: <GrWorkshop />
//   },
//   {
//     name: 'other locations',
//     details: 'Spread your tentacles',
//     icon: <CiLocationOn />
//   }
// ];
