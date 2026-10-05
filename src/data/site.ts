export const site = {
  name: "Kettering Building Company Ltd",
  legalName: "KETTERING BUILDING COMPANY LTD",
  companyNumber: "15135190",
  incorporated: "13 September 2023",
  dissolved: "18 February 2025",
  director: "Lukas Flitar",
  directorAppointed: "13 September 2023",
  phoneDisplay: "07305 570785",
  phoneTel: "+447305570785",
  email: null as string | null,
  category: "Home builder",
  street: "34 St Oswalds Close",
  locality: "Kettering",
  region: "Northamptonshire",
  postcode: "NN15 5HZ",
  country: "United Kingdom",
  countryCode: "GB",
  lat: 52.3920221,
  lng: -0.6947954,
  plusCode: "98R4+R3",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kettering%20Building%20Company%20Ltd&query_place_id=ChIJ-8zzag6fd0gRsKJXc1e69aE",
  placeId: "ChIJ-8zzag6fd0gRsKJXc1e69aE",
  rating: 4.5,
  reviewCount: 8,
  ratingChecked: "5 October 2026",
  companiesHouse: "https://find-and-update.company-information.service.gov.uk/company/15135190",
  ratedPeople: "https://www.ratedpeople.com/profile/lukas-flitar",
  councilPlanning:
    "https://www.northnorthants.gov.uk/applications-appeals-and-enforcement/view-planning-applications-and-mapping",
  checked: "5 October 2026",
} as const;

export const hours = [
  { day: "Monday", lines: ["9am to midnight"] },
  { day: "Tuesday", lines: ["Midnight to 6am", "9am to 6pm"] },
  { day: "Wednesday", lines: ["9am to 6pm"] },
  { day: "Thursday", lines: ["9am to midnight"] },
  { day: "Friday", lines: ["Midnight to 6am", "9am to 6pm"] },
  { day: "Saturday", lines: ["10am to 4pm"] },
  { day: "Sunday", lines: ["Closed"] },
] as const;

export const sic = [
  { code: "41100", name: "Development of building projects" },
  { code: "43110", name: "Demolition" },
  { code: "43330", name: "Floor and wall covering" },
  { code: "43341", name: "Painting" },
] as const;

export type Review = {
  source: "Google" | "Rated People";
  rating: number;
  date: string;
  dateLabel: string;
  text: string;
  author: string | null;
  place: string | null;
  truncated: boolean;
};

export const googleReviews: Review[] = [
  {
    source: "Google",
    rating: 1,
    date: "2024-06-22",
    dateLabel: "22 June 2024",
    author: null,
    place: null,
    truncated: true,
    text: "They are not builders. Absolute amateurs and cowboys who lie through their teeth. They lie about everything. They have destroyed my house. Stuffed whole garden with rubble and rubbish. Left everything unsecure and dirty. They have no idea how to undertake a simple tasks. Also one of them was very aggressive when pointed out how bad standard of work was. Even simple tiling was too much for them. Corners and walls out of plumb, plumbing absolutely shocking. Plumber who came to fix their work was terrified with what they did. Avoid them at all costs. They are being reported to trading standards.",
  },
  {
    source: "Google",
    rating: 5,
    date: "2023-12-04",
    dateLabel: "4 December 2023",
    author: null,
    place: null,
    truncated: false,
    text: "Brilliant work and great prices",
  },
  {
    source: "Google",
    rating: 5,
    date: "2023-10-18",
    dateLabel: "18 October 2023",
    author: null,
    place: null,
    truncated: false,
    text: "Good work, professional done,. Fair price. I am strongly recommend them",
  },
  {
    source: "Google",
    rating: 5,
    date: "2023-10-14",
    dateLabel: "14 October 2023",
    author: null,
    place: null,
    truncated: false,
    text: "Paul and the team were excellent and very professional. They work with care and make sure that everything is perfect. The quality of work is the best. Always giving 110%. Highly recommended.",
  },
  {
    source: "Google",
    rating: 5,
    date: "2023-10-09",
    dateLabel: "9 October 2023",
    author: null,
    place: null,
    truncated: false,
    text: "Had kitchen floor levelled and tiled, professional job and good hard working boys. Good price and excellent communication throughout. Wouldn't hesitate to recommend. 5 *",
  },
  {
    source: "Google",
    rating: 5,
    date: "2023-10-06",
    dateLabel: "6 October 2023",
    author: null,
    place: null,
    truncated: false,
    text: "Had my laminate flooring done by these guys amazing job done ✔️ recommend!!",
  },
  {
    source: "Google",
    rating: 5,
    date: "2023-10-06",
    dateLabel: "6 October 2023",
    author: null,
    place: null,
    truncated: false,
    text: "Lovely and profesional people Doing the job great Highly recommended",
  },
];

export const ratedPeopleReviews: Review[] = [
  {
    source: "Rated People",
    rating: 5,
    date: "2023-10-04",
    dateLabel: "4 October 2023",
    author: "George",
    place: "LE10",
    truncated: false,
    text: "Good work, decent price, I do recommend them, for sure I am going to call them in the future",
  },
  {
    source: "Rated People",
    rating: 5,
    date: "2023-09-29",
    dateLabel: "29 September 2023",
    author: "Carrie",
    place: "LE15",
    truncated: false,
    text: "Lovely hardworking boys, did a great job of leveling and tiling my kitchen floor. Wouldn't hesitate to recommend. Great communication, good price. 5 star. Thanks again",
  },
];

export const ratedPeopleAbout =
  "Hi. We are family based business which is in this trade for many years we are experienced and skilled workers we used to work for big development companies but we decided to work on our own . Please let us start and finish your home improvements. Thank you for reading";

export type Service = {
  slug: string;
  title: string;
  menu: string;
  summary: string;
  paragraphs: string[];
};

export const services: Service[] = [
  {
    slug: "home-building",
    title: "Home building",
    menu: "Home building",
    summary: "Google lists the business as a home builder. Companies House records building projects under SIC 41100.",
    paragraphs: [
      "The Google category is home builder. On Companies House the first nature of business is 41100, development of building projects. In plain words, that is work to plan and build homes and other buildings.",
      "This site does not show a photo of a finished house. The Google listing had no photo gallery we could copy, and new posts on that listing are turned off. If you want a new house or a large build, ask to walk a finished job and to see the contract before you pay.",
      "North Northamptonshire Council decides most planning applications here. A new house, or a change that needs permission, starts with the council, not with a phone call alone. Search the address on the council planning map first.",
      "The limited company was dissolved on 18 February 2025. A dissolved company cannot trade as that company. Before you sign anything, check who would be the other party on the contract, and check that name on Companies House.",
    ],
  },
  {
    slug: "floors-and-tiling",
    title: "Floors and tiling",
    menu: "Floors and tiling",
    summary: "Customers wrote about a levelled and tiled kitchen floor, and about laminate flooring.",
    paragraphs: [
      "Companies House lists 43330, floor and wall covering. That is the official label for laying floors and covering walls.",
      "A Google review on 9 October 2023 says a kitchen floor was levelled and tiled, the price was fair, and the team kept in touch. A review the same week says laminate flooring was laid. On Rated People, Carrie in LE15 wrote on 29 September 2023 about levelling and tiling a kitchen floor. Those notes may be the same job told twice. This site does not treat them as two separate houses.",
      "A 1-star Google review on 22 June 2024 says tiling was out of plumb and that the writer reported the firm to Trading Standards. Read that review in full on the reviews page before you book tiling.",
      "Ask what the price covers: moving the old floor, levelling, tiles or boards, trim, and haul-away. Ask how long the room must stay empty. Get the price in writing.",
    ],
  },
  {
    slug: "painting",
    title: "Painting",
    menu: "Painting",
    summary: "Painting is a registered activity. No Google review we could read describes a paint job.",
    paragraphs: [
      "Companies House lists 43341, painting. That is the record we have. None of the Google reviews we could read describe a painting job, so this page does not invent one.",
      "If you ask for paint, agree the rooms, the number of coats, who buys the paint, and what happens to floors and furniture. A short written note is enough. It does not need fancy language.",
      "Paint will not fix damp. If a wall is wet, blistered, or mouldy, ask for the cause to be checked before anyone coats over it.",
    ],
  },
  {
    slug: "demolition",
    title: "Demolition",
    menu: "Demolition",
    summary: "Demolition is on the Companies House record. No review we could read describes a demolition job.",
    paragraphs: [
      "Companies House lists 43110, demolition. No customer review we could read describes a knock-down. This page does not claim a demolition job was done.",
      "Taking down a wall, a garage, or a whole building can need building-control approval, and sometimes planning permission. Party walls, shared drains, and asbestos are common snags in older Kettering houses. Ask, in writing, who is in charge on site and where the waste will go.",
      "Do not pay a large sum up front. A proper quote names the structure, the access, the skip or grab, and the date the site will be left safe.",
    ],
  },
];

export type Area = {
  slug: string;
  title: string;
  summary: string;
  paragraphs: string[];
};

export const areas: Area[] = [
  {
    slug: "kettering",
    title: "Kettering",
    summary: "The registered office and the Google pin are both in Kettering, at NN15 5HZ.",
    paragraphs: [
      "34 St Oswalds Close sits on the Ise Lodge estate, on the south-east edge of Kettering. The postcode is NN15 5HZ. Barton Seagrave is the next place east. The town centre, including the Market Place, is a short drive north-west. Postcodes in the town centre are mostly NN16.",
      "North Northamptonshire Council is the planning authority. You can look up an address, old applications, and map layers on the council site. Many houses here are post-war semis and later estates. Older streets nearer the centre have tighter plots and shared access. Those details change the price of a floor, a wall, or a build.",
      "The Google listing does not name streets where work was done inside Kettering. Do not read this page as a list of finished jobs. It tells you where the business is based, and who to ask about permission.",
      "Call 07305 570785 if the job is in Kettering. Ask who you would be contracting with. The limited company on this address was dissolved on 18 February 2025.",
    ],
  },
  {
    slug: "barton-seagrave",
    title: "Barton Seagrave",
    summary: "Barton Seagrave starts a few streets east of St Oswalds Close.",
    paragraphs: [
      "Barton Seagrave is the parish on Kettering’s east side. St Oswalds Close is close to it. Houses here mix older village streets around St Botolph’s with later closes. Wicksteed Park is the large green space to the north of the parish.",
      "The same council, North Northamptonshire, covers planning in Barton Seagrave. A job on a tight village plot needs a plan for skips, parking, and neighbour access before work starts. Say that on the first call.",
      "We did not find a Google review that names Barton Seagrave. A separate BookaBuilderUK profile for “FL Builder Building”, also under the name Lukas Flitar, says it is based in Barton Seagrave. That is a different trading name from Kettering Building Company Ltd. This site does not merge the two.",
    ],
  },
  {
    slug: "burton-latimer",
    title: "Burton Latimer",
    summary: "Burton Latimer is the next town south, on the A6.",
    paragraphs: [
      "Burton Latimer is about three miles south of Kettering town centre, along the A6. It has its own high street, older stone and brick houses, and newer estates off the main road. The council is still North Northamptonshire.",
      "Floors in older terraces are often uneven. A review of this business talks about levelling a kitchen floor before tiles. That kind of prep matters more in an old house than in a new one. Ask for the prep to be written into the price.",
      "No review we could read gives a Burton Latimer address. If your house is here, treat the town page as a guide to the area, not as proof of a local job.",
    ],
  },
  {
    slug: "rothwell",
    title: "Rothwell",
    summary: "Rothwell is a market town west of Kettering.",
    paragraphs: [
      "Rothwell is about four miles west of Kettering. The Market Place and the church sit at the top of the hill. Many houses are stone or older brick, with newer streets around the edge. Rowell Fair is the town’s historic fair, held each June.",
      "Stone and old brick need a different paint and pointing plan than a modern estate house. The painting activity on the Companies House record is not backed by a review we could read. Ask what surface the quote is for.",
      "North Northamptonshire Council covers Rothwell too. Check the address on the planning map if the job changes the outside of the house.",
    ],
  },
  {
    slug: "desborough",
    title: "Desborough",
    summary: "Desborough is further west, between Rothwell and Market Harborough.",
    paragraphs: [
      "Desborough is about six miles west of Kettering. It grew with the boot and shoe trade, and a lot of the housing is brick terraces plus later estates. The A6 and the railway put it on the way to Market Harborough.",
      "Terrace houses often share access at the back. A floor or strip-out job needs a plan for taking waste out without blocking a neighbour. The 1-star Google review says a garden was left full of rubble. Read it, and ask where waste from your job will go.",
      "No review we could read names Desborough. Call and ask. The phone on the Google listing is 07305 570785.",
    ],
  },
];

export const faqs = [
  {
    question: "Where is Kettering Building Company Ltd based?",
    answer:
      "The registered office and the Google pin are 34 St Oswalds Close, Kettering, NN15 5HZ. The plus code on Google is 98R4+R3.",
  },
  {
    question: "Is the limited company still active?",
    answer:
      "No. Companies House shows company number 15135190 was incorporated on 13 September 2023 and dissolved on 18 February 2025. Check the live register before you sign a contract.",
  },
  {
    question: "What is the phone number?",
    answer:
      "The Google listing shows 07305 570785. This site did not find a public email address.",
  },
  {
    question: "What do the reviews say?",
    answer:
      "On 5 October 2026 Google showed 4.5 stars from 8 reviews. Seven review texts are on this site. Six of those are 5 stars and talk about price, floors, and the team. One, dated 22 June 2024, is 1 star and tells people to avoid the firm.",
  },
  {
    question: "What hours are on Google?",
    answer:
      "Monday 9am to midnight. Tuesday midnight to 6am, then 9am to 6pm. Wednesday 9am to 6pm. Thursday 9am to midnight. Friday midnight to 6am, then 9am to 6pm. Saturday 10am to 4pm. Sunday closed. Those hours are unusual for a builder. They are what the listing showed.",
  },
  {
    question: "Who handles planning in Kettering?",
    answer:
      "North Northamptonshire Council. Search the property on the council planning site before you start work that changes the building.",
  },
];

export function sitePath(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (pathname === "/" || pathname === "") return base === "" ? "/" : `${base}/`;
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${clean}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;
