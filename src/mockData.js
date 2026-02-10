export const pgData = {
  name: "SRM PG FOR GENTS",
  tagline: "Your Home Away From Home",
  rating: 4.5,
  totalReviews: 13,
  phone: "09741969888",
  alternatePhone: "7995459743",
  email: "srmpg@gmail.com",
  address: {
    line1: "Royan circle, 42, Tippu Sultan Palace Rd",
    line2: "opp. BANGALORE MEDICAL COLLEGE AND RESEARCH INSTITUTE",
    area: "Kamalanagar, Chamrajpet",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560018"
  },
  openHours: "24 Hours",
  buildingImage: `${import.meta.env.BASE_URL}images/headPic.jpg`,
  
  amenities: [
    {
      id: 1,
      name: "Free WiFi",
      description: "High-speed internet connectivity throughout the premises",
      icon: "wifi"
    },
    {
      id: 2,
      name: "3 Meals Included",
      description: "Homely breakfast, lunch & dinner prepared with care",
      icon: "utensils"
    },
    {
      id: 3,
      name: "Hot Water",
      description: "24/7 hot water supply in all rooms",
      icon: "droplet"
    },
    {
      id: 4,
      name: "Parking Facility",
      description: "Secure parking for bikes and vehicles",
      icon: "car"
    },
    {
      id: 5,
      name: "24/7 Access",
      description: "Open round the clock for your convenience",
      icon: "clock"
    },
    {
      id: 6,
      name: "Study Friendly",
      description: "Quiet environment perfect for studying",
      icon: "book-open"
    }
  ],

  rooms: [
    {
      id: 1,
      type: "Double Occupancy",
      price: 12000,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHxob3N0ZWwlMjByb29tfGVufDB8fHx8MTc3MDc0MTY3Nnww&ixlib=rb-4.1.0&q=85",
      features: ["Spacious room", "Individual study tables", "Attached bathroom", "Wardrobe space"],
      popular: true
    },
    {
      id: 2,
      type: "Triple Sharing",
      price: 10500,
      capacity: 3,
      image: "https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjByb29tfGVufDB8fHx8MTc3MDc0MTY3Nnww&ixlib=rb-4.1.0&q=85",
      features: ["Comfortable beds", "Study area", "Attached bathroom", "Storage space"],
      popular: false
    },
    {
      id: 3,
      type: "Four Sharing",
      price: 7500,
      capacity: 4,
      image: "https://images.pexels.com/photos/4907208/pexels-photo-4907208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      features: ["Budget friendly", "Clean & maintained", "Attached bathroom", "Common study area"],
      popular: false
    }
  ],

  mess: {
    title: "Homely Food That Feels Like Home",
    subtitle: "Our in-house mess serves nutritious, hygienic, and delicious meals prepared with care",
    features: [
      {
        id: 1,
        title: "3 Meals Daily",
        description: "Breakfast, lunch, and dinner included in your rent",
        icon: "utensils"
      },
      {
        id: 2,
        title: "Hygienic Preparation",
        description: "Clean kitchen with quality ingredients and hygiene standards",
        icon: "shield-check"
      },
      {
        id: 3,
        title: "Balanced Diet",
        description: "Nutritious meals perfect for students and working professionals",
        icon: "apple"
      },
      {
        id: 4,
        title: "Home-Style Cooking",
        description: "Traditional recipes that remind you of home",
        icon: "heart"
      }
    ],
    menuItems: [
      "Fresh South & North Indian dishes",
      "Weekly menu variety",
      "Vegetarian options",
      "Special meals on festivals",
      "Tea & coffee available"
    ],
    images: [
      "https://images.unsplash.com/photo-1698844035759-099a24409d93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxkaW5pbmclMjBoYWxsfGVufDB8fHx8MTc3MDc0MTY4MHww&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1631193659550-5c8a2cc57015?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjBoYWxsfGVufDB8fHx8MTc3MDc0MTY4MHww&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/17223838/pexels-photo-17223838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  },

  highlights: [
    {
      id: 1,
      title: "Prime Location",
      description: "Just opposite Bangalore Medical College & Research Institute",
      icon: "map-pin"
    },
    {
      id: 2,
      title: "Homely Food",
      description: "Nutritious & delicious meals prepared with hygiene",
      icon: "chef-hat"
    },
    {
      id: 3,
      title: "Study Environment",
      description: "Peaceful atmosphere ideal for medical students",
      icon: "graduation-cap"
    },
    {
      id: 4,
      title: "Safe & Secure",
      description: "Well-maintained facility with proper security measures",
      icon: "shield-check"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Medical Student",
      rating: 5,
      comment: "Great place to stay! Very close to college and the food is amazing. Highly recommend for medical students.",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Amit Sharma",
      role: "PG Resident",
      rating: 4,
      comment: "Clean rooms, good facilities, and the staff is very cooperative. The location is perfect for college students.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Vijay Prakash",
      role: "Working Professional",
      rating: 5,
      comment: "Excellent PG with all basic amenities. WiFi is fast and the food quality is consistently good.",
      date: "3 weeks ago"
    }
  ],

  gallery: [
    "https://customer-assets.emergentagent.com/job_pg-promo-hub/artifacts/dmfz9k4z_image.png",
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHxob3N0ZWwlMjByb29tfGVufDB8fHx8MTc3MDc0MTY3Nnww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1698844035759-099a24409d93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxkaW5pbmclMjBoYWxsfGVufDB8fHx8MTc3MDc0MTY4MHww&ixlib=rb-4.1.0&q=85"
  ],

  faqs: [
    {
      id: 1,
      question: "What is included in the rent?",
      answer: "The rent includes accommodation, free WiFi, 3 meals (breakfast, lunch, dinner), hot water, and access to all amenities."
    },
    {
      id: 2,
      question: "Is there a security deposit?",
      answer: "Yes, typically a refundable security deposit equivalent to one month's rent is required."
    },
    {
      id: 3,
      question: "What are the visiting hours?",
      answer: "We are open 24 hours. However, guest visits are allowed only during specific hours for the security of residents."
    },
    {
      id: 4,
      question: "How far is it from Bangalore Medical College?",
      answer: "We are located directly opposite the Bangalore Medical College & Research Institute, just a 2-minute walk."
    },
    {
      id: 5,
      question: "Do you provide laundry services?",
      answer: "Laundry facilities are available nearby, and we can help arrange the service for you."
    }
  ]
};
