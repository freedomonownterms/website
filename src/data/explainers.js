// "Explained" pages: written versions of the long YouTube videos, with their pictures.
// Made by private/youtube/export-explainers.mjs, then reviewed. Newest first.
export const explainers = [
  {
    "slug": "how-nvidia-ai-chips-are-made",
    "youtubeId": "K1NGnJju3wU",
    "uploaded": "2026-11-14T18:10:55Z",
    "seconds": 233,
    "title": "How Nvidia's AI Chips Are Made: From Sand to Supercomputer",
    "description": "How Nvidia's AI chips go from sand to supercomputer: design, ultra-pure silicon, wafers, printing with extreme ultraviolet light, testing, packaging and the data centre, explained simply with pictures.",
    "topic": "Technology",
    "relatedHref": "/guides/",
    "relatedLabel": "Browse our AI guides",
    "chapters": [
      [
        "0:00",
        "Intro"
      ],
      [
        "0:13",
        "Nvidia designs, TSMC builds"
      ],
      [
        "0:29",
        "Designing the chip"
      ],
      [
        "0:43",
        "Simulation and tape-out"
      ],
      [
        "0:56",
        "Sand to silicon"
      ],
      [
        "1:11",
        "Growing a crystal ingot"
      ],
      [
        "1:23",
        "Slicing wafers"
      ],
      [
        "1:35",
        "The clean room"
      ],
      [
        "1:47",
        "Building layer by layer"
      ],
      [
        "1:59",
        "Printing with EUV light"
      ],
      [
        "2:14",
        "208 billion transistors"
      ],
      [
        "2:28",
        "Wiring it all up"
      ],
      [
        "2:40",
        "How long it takes"
      ],
      [
        "2:51",
        "Test and cut"
      ],
      [
        "3:01",
        "Packaging"
      ],
      [
        "3:18",
        "Into the data centre"
      ],
      [
        "3:30",
        "The whole journey"
      ]
    ],
    "sources": [],
    "sections": [
      {
        "label": "Tech explained",
        "heading": "How Nvidia's AI chips are made",
        "text": "Nvidia's newest AI chips pack hundreds of billions of tiny switches into something you could hold in your hand. And they start life as ordinary sand. So how do you get from sand to a chip that powers AI? Let's follow the whole journey.",
        "image": "/explained/how-nvidia-ai-chips-are-made/01.webp"
      },
      {
        "label": "The surprise",
        "heading": "Nvidia designs. TSMC builds.",
        "text": "First, a surprise. Nvidia doesn't actually manufacture its chips. It designs them. The manufacturing is done by TSMC, the Taiwan Semiconductor Manufacturing Company. Companies like Nvidia are called fabless, because they don't own a factory, or fab.",
        "image": "/explained/how-nvidia-ai-chips-are-made/02.webp",
        "caption": "Companies that design chips without owning a factory are called “fabless”."
      },
      {
        "label": "Step 1: design",
        "heading": "From an idea to code to a map",
        "text": "Step one is design. Engineers decide what the chip should do, then describe it in special code. That code is turned into billions of tiny logic circuits, and then into a physical map showing exactly where every part goes.",
        "image": "/explained/how-nvidia-ai-chips-are-made/03.webp",
        "caption": "Engineers write code that describes the circuits, then software turns it into a layout."
      },
      {
        "label": "Test before you build",
        "heading": "Simulate everything, then tape-out",
        "text": "Before anything is built, the design is tested again and again in simulation, because mistakes are very expensive to fix later. When it's ready, the final blueprint is sent to the factory. This moment is called tape-out.",
        "image": "/explained/how-nvidia-ai-chips-are-made/04.webp",
        "caption": "Tape-out: the moment the finished blueprint is sent to the factory."
      },
      {
        "label": "Step 2: sand to silicon",
        "heading": "Sand becomes ultra-pure silicon",
        "text": "Step two starts with quartz sand, which is mostly silicon and oxygen. It's heated in a furnace to separate out the silicon. Then the silicon is purified, again and again, until it's about 99.9999999% pure.",
        "image": "/explained/how-nvidia-ai-chips-are-made/05.webp",
        "caption": "About 99.9999999% pure, often called “nine nines”."
      },
      {
        "label": "Growing a crystal",
        "heading": "A perfect crystal called an ingot",
        "text": "The pure silicon is melted. A tiny seed crystal is dipped in, then slowly pulled up while it turns. The silicon freezes onto it as one perfect crystal, a shiny cylinder called an ingot.",
        "image": "/explained/how-nvidia-ai-chips-are-made/06.webp",
        "caption": "A seed crystal is slowly pulled from melted silicon."
      },
      {
        "label": "Slicing wafers",
        "heading": "Thin, mirror-smooth wafers",
        "text": "The ingot is sliced into thin discs called wafers, usually 300 millimetres across. Each wafer is polished until it's almost perfectly flat and smooth. Every chip is built on one of these.",
        "image": "/explained/how-nvidia-ai-chips-are-made/07.webp",
        "caption": "Advanced chips use wafers 300 mm across."
      },
      {
        "label": "Step 3: the factory",
        "heading": "Built in a clean room",
        "text": "Step three happens inside a chip factory's clean room. The air is filtered constantly, because a single speck of dust can ruin a chip. Workers wear full-body suits, and robots carry the wafers between machines.",
        "image": "/explained/how-nvidia-ai-chips-are-made/08.webp",
        "caption": "Filtered air, full-body suits, and robots moving the wafers."
      },
      {
        "label": "Layer by layer",
        "heading": "Add, print, etch, repeat",
        "text": "A chip is built up one thin layer at a time. For each layer, a material is added, a pattern is printed onto it with light, and the unwanted parts are etched away. Then it all repeats.",
        "image": "/explained/how-nvidia-ai-chips-are-made/09.webp",
        "caption": "Each layer is built with the same basic cycle."
      },
      {
        "label": "Printing with light",
        "heading": "Printing with extreme ultraviolet light",
        "text": "The printing step is called lithography. Light shines through a stencil of the design, called a mask, and onto the wafer. For the smallest features, fabs use extreme ultraviolet light. Only one company in the world, the Dutch firm ASML, makes these machines.",
        "image": "/explained/how-nvidia-ai-chips-are-made/10.webp",
        "caption": "Only ASML, a Dutch company, makes these EUV machines."
      },
      {
        "label": "Billions of switches",
        "heading": "208 billion transistors",
        "text": "Those patterns form transistors, tiny switches that turn on and off to do calculations. Nvidia's Blackwell chips have 208 billion of them. That's around 25 times more transistors than there are people on Earth.",
        "image": "/explained/how-nvidia-ai-chips-are-made/11.webp",
        "caption": "In Nvidia's Blackwell chips. Each one is a tiny on/off switch."
      },
      {
        "label": "Wiring it all up",
        "heading": "A tiny city of metal wiring",
        "text": "On top of the transistors, many more layers of super-thin metal wiring are added to connect them all. Seen from the side, a finished chip looks like a tiny city, with a road network stacked many floors high.",
        "image": "/explained/how-nvidia-ai-chips-are-made/12.webp",
        "caption": "Many wiring layers connect the transistors below."
      },
      {
        "label": "How long it takes",
        "heading": "About 4 to 6 months",
        "text": "All of this takes time. According to ASML, making a chip, from a bare wafer to a tested, packaged device, can take about 18 to 26 weeks. That's roughly 4 to 6 months.",
        "image": "/explained/how-nvidia-ai-chips-are-made/13.webp",
        "caption": "18 to 26 weeks from wafer to packaged chip, according to ASML."
      },
      {
        "label": "Step 4: test and cut",
        "heading": "Test every chip, then cut the wafer",
        "text": "Step four. Each wafer holds many chips. Tiny probes test every one, and any faulty chips are marked. Then the wafer is cut apart, and each chip, now called a die, is separated.",
        "image": "/explained/how-nvidia-ai-chips-are-made/14.webp",
        "caption": "Each separated chip is called a die."
      },
      {
        "label": "Step 5: packaging",
        "heading": "Two dies + memory, packaged as one",
        "text": "Step five is packaging, and for Nvidia it's a big deal. A Blackwell chip joins two large dies so they work as one, with a super-fast link between them. Stacks of high-speed memory sit right beside them, all on one base. TSMC calls this kind of packaging CoWoS.",
        "image": "/explained/how-nvidia-ai-chips-are-made/15.webp",
        "caption": "Two dies and stacks of HBM memory on one base (TSMC's CoWoS packaging)."
      },
      {
        "label": "Step 6: the final product",
        "heading": "From chip to AI supercomputer",
        "text": "After a final test, the chips are mounted onto boards, and the boards go into servers. Racks full of these servers fill huge data centres, where they train and run the AI tools we use every day.",
        "image": "/explained/how-nvidia-ai-chips-are-made/16.webp",
        "caption": "Chips go onto boards, boards into servers, servers into data centres."
      },
      {
        "label": "The whole journey",
        "heading": "From sand to supercomputer",
        "text": "So, here's the whole journey. Design, sand to silicon, wafers, building layer by layer in the fab, testing and cutting, packaging, and finally into the data centre. Thousands of people, in many countries, work on every single chip.",
        "image": "/explained/how-nvidia-ai-chips-are-made/17.webp"
      }
    ]
  },
  {
    "slug": "earth-magnetic-north-pole-moving",
    "youtubeId": "8P9dhlx0xNQ",
    "uploaded": "2026-11-14T11:52:51Z",
    "seconds": 221,
    "title": "Earth's Magnetic North Pole Is Moving: Should We Worry?",
    "description": "Earth's magnetic North Pole has crossed from Canada towards Siberia, and the field has weakened. Why it moves, why it matters for phones and planes, and whether the poles could flip, explained simply.",
    "topic": "Science",
    "relatedHref": "/weather/",
    "relatedLabel": "Try the free AI Weather Planner",
    "chapters": [
      [
        "0:00",
        "Intro"
      ],
      [
        "0:10",
        "Two North Poles"
      ],
      [
        "0:20",
        "Where the magnetic field comes from"
      ],
      [
        "0:45",
        "The pole's great drift"
      ],
      [
        "1:00",
        "Why it moved so fast, and why it's slowing"
      ],
      [
        "1:21",
        "Why it matters: phones, planes and airports"
      ],
      [
        "1:48",
        "A weaker magnetic shield"
      ],
      [
        "2:02",
        "The South Atlantic Anomaly"
      ],
      [
        "2:16",
        "Can the poles flip?"
      ],
      [
        "2:43",
        "Is a flip coming?"
      ],
      [
        "3:01",
        "Myths"
      ],
      [
        "3:14",
        "The real risks"
      ],
      [
        "3:30",
        "Wrap-up"
      ]
    ],
    "sources": [],
    "sections": [
      {
        "label": "Science explained",
        "heading": "Earth's magnetic North Pole is on the move",
        "text": "Earth's magnetic North Pole is on the move. It's crossed from Canada towards Siberia, and Earth's magnetic field is getting weaker. So, should we worry? Let's break it down.",
        "image": "/explained/earth-magnetic-north-pole-moving/01.webp"
      },
      {
        "label": "Two North Poles",
        "heading": "There are two North Poles",
        "text": "First, there are actually two North Poles. The geographic North Pole is fixed. It's the point Earth spins around. The magnetic North Pole is where your compass points, and that one moves.",
        "image": "/explained/earth-magnetic-north-pole-moving/02.webp",
        "caption": "The geographic pole is fixed. The magnetic pole, where a compass points, moves."
      },
      {
        "label": "Where the field comes from",
        "heading": "It's made about 3,000 km below our feet",
        "text": "Earth's magnetic field is made deep inside the planet. Around 3,000 kilometres below us, there's an outer core of molten iron. As that liquid metal swirls, it creates electric currents, and those currents create the magnetic field. Scientists call this the geodynamo.",
        "image": "/explained/earth-magnetic-north-pole-moving/03.webp",
        "caption": "Swirling molten iron in the outer core creates the field: the geodynamo."
      },
      {
        "label": "Always changing",
        "heading": "Moving metal means a moving field",
        "text": "Because the iron never stops flowing, the field never stops changing. So the magnetic poles slowly wander, year after year.",
        "image": "/explained/earth-magnetic-north-pole-moving/04.webp"
      },
      {
        "label": "The great drift",
        "heading": "From Canada towards Siberia",
        "text": "For most of the last century, the magnetic North Pole drifted across the Canadian Arctic. Then it sped up. Between 1990 and 2005, its speed jumped from about 15 kilometres a year to 50 or 60 kilometres a year, heading towards Siberia.",
        "image": "/explained/earth-magnetic-north-pole-moving/05.webp",
        "caption": "Its speed rose from about 15 to 50–60 km a year between 1990 and 2005."
      },
      {
        "label": "Why so fast?",
        "heading": "A tug-of-war deep underground",
        "text": "Why? Scientists think two strong magnetic patches, deep under Canada and Siberia, are in a kind of tug of war. As the Canadian patch weakened, the Siberian one pulled the pole towards it.",
        "image": "/explained/earth-magnetic-north-pole-moving/06.webp",
        "caption": "Two magnetic patches, under Canada and Siberia, pull on the pole."
      },
      {
        "label": "Slowing down",
        "heading": "Now about 36 km a year",
        "text": "Recently, the pole has slowed down a lot. NOAA, the US science agency that tracks it, says it's now moving about 36 kilometres a year.",
        "image": "/explained/earth-magnetic-north-pole-moving/07.webp",
        "caption": "NOAA's latest figure for the north magnetic pole."
      },
      {
        "label": "Why it matters",
        "heading": "Your phone's compass depends on it",
        "text": "This matters more than you might think. Phones, planes, ships and militaries all use a map of the field called the World Magnetic Model. It's normally updated every 5 years. In 2019, the pole was moving so fast that an early update was needed. The latest version came out in December 2024.",
        "image": "/explained/earth-magnetic-north-pole-moving/08.webp",
        "caption": "The World Magnetic Model guides phones, planes and ships. Latest version: December 2024."
      },
      {
        "label": "Even airports",
        "heading": "Runways get renumbered",
        "text": "Even airports are affected. Runways are numbered by their compass direction, so as the field shifts, some airports have had to repaint and renumber their runways.",
        "image": "/explained/earth-magnetic-north-pole-moving/09.webp",
        "caption": "Runway numbers come from their compass direction."
      },
      {
        "label": "A weaker shield",
        "heading": "About 9% weaker in 200 years",
        "text": "There's another change. The magnetic field shields Earth from harmful particles from the Sun and space. And according to the European Space Agency, it has lost about 9% of its strength, on average, over the last 200 years.",
        "image": "/explained/earth-magnetic-north-pole-moving/10.webp",
        "caption": "A global average, according to the European Space Agency."
      },
      {
        "label": "The weak spot",
        "heading": "The South Atlantic Anomaly",
        "text": "The weakest area sits between South America and Africa. It's called the South Atlantic Anomaly, and it's been growing. Satellites passing over it get more radiation, which can cause glitches. But on the ground, it's no danger to people.",
        "image": "/explained/earth-magnetic-north-pole-moving/11.webp",
        "caption": "More radiation for satellites. No danger to people on the ground."
      },
      {
        "label": "The big flip",
        "heading": "North and south have swapped many times",
        "text": "Now, the big question. Can the poles flip completely? Yes. Over Earth's history, magnetic north and south have swapped places many times. We know this from ancient rocks, which record the direction of the field when they formed.",
        "image": "/explained/earth-magnetic-north-pole-moving/12.webp",
        "caption": "Ancient rocks record the field's direction when they formed."
      },
      {
        "label": "The last time",
        "heading": "Last full flip: about 780,000 years ago",
        "text": "The last full flip happened about 780,000 years ago. About 41,000 years ago, there was also a short-lived wobble, called the Laschamp event. The field weakened, briefly pointed the wrong way, and then recovered.",
        "image": "/explained/earth-magnetic-north-pole-moving/13.webp",
        "caption": "A brief wobble, the Laschamp event, came about 41,000 years ago."
      },
      {
        "label": "In slow motion",
        "heading": "A flip takes thousands of years",
        "text": "And a flip isn't sudden. It takes thousands of years. Most estimates for a full flip are between 2,000 and 12,000 years.",
        "image": "/explained/earth-magnetic-north-pole-moving/14.webp",
        "caption": "Most estimates: 2,000 to 12,000 years."
      },
      {
        "label": "Is one coming?",
        "heading": "Nobody knows when the next flip will come",
        "text": "So, is a flip coming? The weakening could be an early sign, but nobody can predict it. It might start in a few thousand years, or much later. The field has weakened before, and recovered.",
        "image": "/explained/earth-magnetic-north-pole-moving/15.webp",
        "caption": "The field has weakened before, and recovered."
      },
      {
        "label": "Myths",
        "heading": "No evidence flips cause mass extinctions",
        "text": "Let's clear up some myths. There's no evidence that past flips caused mass extinctions. Early humans lived through the Laschamp event. A magnetic flip doesn't cause earthquakes either, and it doesn't change the way Earth spins.",
        "image": "/explained/earth-magnetic-north-pole-moving/16.webp",
        "caption": "No earthquakes, and no change to how Earth spins."
      },
      {
        "label": "The real risks",
        "heading": "Satellites, power grids and radio",
        "text": "The real risks are technical. With a weaker field, satellites and high-flying planes would get more radiation, and solar storms could disrupt power grids and radio more easily. Scientists watch the field from space every day, so changes wouldn't take us by surprise.",
        "image": "/explained/earth-magnetic-north-pole-moving/17.webp",
        "caption": "Scientists track the field from space every day."
      }
    ]
  },
  {
    "slug": "chatgpt-resume-experiment",
    "youtubeId": "ZN3ka1mZGFk",
    "uploaded": "2026-11-14T16:12:17Z",
    "seconds": 115,
    "title": "I Asked ChatGPT to Write a Resume in 60 Seconds: Here’s What Happened",
    "description": "We tested whether ChatGPT can write a job-ready resume for a student with no work experience, using a free prompt. What it got right, the one big catch, and our verdict.",
    "topic": "AI experiments",
    "relatedHref": "/prompts/resumes/no-experience-yet/",
    "relatedLabel": "Use the free “No experience yet” resume prompt",
    "note": "The student in this experiment is made up. ChatGPT’s answer is real.",
    "chapters": [
      [
        "0:00",
        "Can AI write a resume in one minute?"
      ],
      [
        "0:08",
        "The test"
      ],
      [
        "0:22",
        "Step 1: pick a free prompt"
      ],
      [
        "0:32",
        "Steps 2 to 4: add details, copy, paste"
      ],
      [
        "0:46",
        "The result"
      ],
      [
        "0:59",
        "What it got right"
      ],
      [
        "1:13",
        "The catch"
      ],
      [
        "1:29",
        "Verdict, pro tip and the free prompt"
      ]
    ],
    "sources": [],
    "sections": [
      {
        "label": "We tried it",
        "heading": "Can AI write a resume in one minute?",
        "text": "Can AI write a job-ready resume in under a minute? We tried it with ChatGPT, and the result surprised me. But there's one big catch.",
        "image": "/explained/chatgpt-resume-experiment/01.webp"
      },
      {
        "label": "The test",
        "heading": "A made-up student with no work experience",
        "text": "First, we made up a student. A commerce graduate with no work experience, applying for a junior marketing assistant job. They ran Instagram for their college festival, did a research project, have a Google certificate, and volunteer as a tutor.",
        "image": "/explained/chatgpt-resume-experiment/02.webp"
      },
      {
        "label": "Step 1",
        "heading": "Pick a free prompt",
        "text": "Step one. We used the No Experience Yet prompt from the free prompt library on freedomonownterms.com. It's made for exactly this situation.",
        "image": "/explained/chatgpt-resume-experiment/03.webp"
      },
      {
        "label": "Step 2",
        "heading": "Add your details",
        "text": "Step two. Type your details into the boxes. The site puts them into the prompt for you, and remembers them for next time.",
        "image": "/explained/chatgpt-resume-experiment/04.webp"
      },
      {
        "label": "Step 3",
        "heading": "Copy it, or open it in ChatGPT",
        "text": "Step three. Click copy, or open it straight in ChatGPT.",
        "image": "/explained/chatgpt-resume-experiment/05.webp"
      },
      {
        "label": "Step 4",
        "heading": "Paste it and press Enter",
        "text": "Step four. Paste it in, press enter, and watch.",
        "image": "/explained/chatgpt-resume-experiment/06.webp"
      },
      {
        "label": "The result",
        "heading": "A full resume in seconds",
        "text": "In seconds, ChatGPT wrote a full resume. A professional summary, education, the Instagram project, the café research, volunteering, certifications and skills. It even added tips, and keywords recruiters look for.",
        "image": "/explained/chatgpt-resume-experiment/07.webp"
      },
      {
        "label": "What it got right",
        "heading": "It kept the real numbers",
        "text": "So what did it get right? It kept the real numbers. 300 to 2,100 followers, and 12 cafés. Numbers like these make a resume stand out. It also turned volunteering into skills, like communication and patience.",
        "caption": "300 to 2,100 followers. 12 cafés. And it turned volunteering into skills."
      },
      {
        "label": "The catch",
        "heading": "It added things we never said",
        "text": "Now, the catch. It added things we never told it. A list of coursework, and claims like “contributed to identifying market trends”. If they're not true, delete them. A recruiter can ask about anything on your resume.",
        "caption": "A coursework list, and claims like “contributed to identifying market trends”."
      },
      {
        "label": "Fill the gaps",
        "heading": "Replace every [placeholder]",
        "text": "You'll also need to fill in the gaps, like your name, college, dates, and links.",
        "caption": "Your name, college, dates and links."
      },
      {
        "label": "Our verdict",
        "heading": "8 out of 10 as a first draft",
        "text": "Our verdict? 8 out of 10, as a first draft. It's fast and well organised. But check every line, and keep only what's true.",
        "caption": "Fast and well organised. Check every line before you send it."
      },
      {
        "label": "Pro tip",
        "heading": "Answer its follow-up question",
        "text": "Pro tip. At the end, ChatGPT asked how long the Instagram growth took. Answer questions like that. Details like time and results turn a good resume into a great one.",
        "caption": "It asked how long the Instagram growth took."
      }
    ]
  }
];
