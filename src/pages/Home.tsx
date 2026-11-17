
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Search,
    MapPin,
    Star,
    ArrowRight,
    ShieldCheck,
    Headphones,
    Compass,
    Heart,
    Clock,
    Quote,
    Sparkles,
    Globe,
    ChevronRight,
} from 'lucide-react';

const destinations = [
    {
        id: 'ella',
        name: 'Ella',
        location: 'Uva Province',
        category: 'Hill Country',
        price: '12,500',
        rating: '4.9',
        image:
            'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D800%2Cheight%3D600%2Cdpr%3D2/tour_img/82016e563df1877e5bc112a75262c7165fdb676deae9d81ae93ea02520c4e30d.jpg',
        description: 'Misty mountains and breathtaking green landscapes.',
    },
    {
        id: 'sigiriya',
        name: 'Sigiriya',
        location: 'Central Province',
        category: 'Heritage',
        price: '18,000',
        rating: '4.9',
        image:
            'https://untoldlanka.com/images/sl-sigiriya-1.jpg',
        description: 'Discover ancient wonders and timeless heritage.',
    },
    {
        id: 'mirissa',
        name: 'Mirissa',
        location: 'Southern Province',
        category: 'Beach',
        price: '15,000',
        rating: '4.8',
        image:
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
        description: 'Relax along beautiful tropical beaches.',
    },
    {
        id: 'nuwara-eliya',
        name: 'Nuwara Eliya',
        location: 'Central Province',
        category: 'Hill Country',
        price: '14,500',
        rating: '4.8',
        image:
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85',
        description: 'Experience the charm of the little England.',
    },
];

const experiences = [
    {
        title: 'Beach Escapes',
        subtitle: 'Discover tropical coastlines',
        image:
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=85',
        search: 'Beach',
    },
    {
        title: 'Hill Country',
        subtitle: 'Explore the mountains',
        image:
            'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D800%2Cheight%3D600%2Cdpr%3D2/tour_img/82016e563df1877e5bc112a75262c7165fdb676deae9d81ae93ea02520c4e30d.jpg',
        search: 'Hill Country',
    },
    {
        title: 'Cultural Heritage',
        subtitle: 'Explore ancient history',
        image:
            'https://www.zoomtravelinsurance.com.au/assets/ancient-sites-polonnaruwa.webp',
        search: 'Heritage',
    },
    {
        title: 'Wildlife Adventures',
        subtitle: 'Experience the wild',
        image:
            'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=700&q=85',
        search: 'Wildlife',
    },
];


const packages = [
    {
        name: 'The Highland Escape',
        duration: '4 Days / 3 Nights',
        price: '45,000',
        image:
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85',
        description: 'A beautiful journey through the misty hill country.',
        tag: 'BEST SELLER',
    },
    {
        name: 'Southern Coast Journey',
        duration: '5 Days / 4 Nights',
        price: '58,000',
        image:
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
        description: 'Discover golden beaches and coastal experiences.',
        tag: 'POPULAR',
    },

    {
        name: 'Cultural Discovery',
        duration: '3 Days / 2 Nights',
        price: '32,000',
        image:
            'https://www.zoomtravelinsurance.com.au/assets/ancient-sites-polonnaruwa.webp',
        description: 'Explore the history and heritage of Sri Lanka.',
        tag: 'CULTURAL',
    },

];

const reviews = [
    {
        name: 'Amelia Johnson',
        country: 'United Kingdom',
        review:
            'An unforgettable experience! The destinations were beautiful and the entire journey was wonderfully organized.',
        rating: 5,
    },
    {
        name: 'Daniel Smith',
        country: 'Australia',
        review:
            'Sri Lanka exceeded all my expectations. Every destination offered something special and unique.',
        rating: 5,
    },
    {
        name: 'Sophie Martin',
        country: 'France',
        review:
            'Beautiful landscapes, amazing experiences and a memorable holiday. I would definitely recommend it.',
        rating: 5,
    },
];

function Home() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(
            `/explore?search=${encodeURIComponent(search.trim())}`
        );
    };

    const goToExplore = (query = '') => {
        navigate(`/explore?search=${encodeURIComponent(query)}`);
    };

    return (
        <main className="overflow-hidden bg-[#FAF9F6]">

            {/* ================= HERO SECTION ================= */}

            <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#163B32] md:min-h-[760px]">

                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="/videos/sri-lanka-hero.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#10251F]/85 via-[#10251F]/50 to-black/15" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251F]/50 via-transparent to-black/15" />

                {/* Hero Content */}
                <div className="relative mx-auto w-full max-w-7xl px-6 py-28">

                    <div className="max-w-3xl">

                        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-md">
                            <Sparkles size={17} className="text-[#D6BB82]" />
                            Discover the Extraordinary Island of Sri Lanka
                        </div>

                        <h1 className="font-serif text-5xl font-medium leading-[1.15] tracking-tight text-white sm:text-6xl md:text-8xl">
                            Discover the
                            <span className="block italic text-[#E2C995]">
                                Soul of Sri Lanka.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
                            From mist-covered mountains to golden coastlines,
                            discover extraordinary places and create memories
                            that last a lifetime.
                        </p>

                        {/* Search Form */}
                        <form
                            onSubmit={handleSearch}
                            className="mt-11 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row sm:items-center"
                        >
                            <div className="flex flex-1 items-center gap-3 px-3">
                                <MapPin className="shrink-0 text-[#A58A58]" size={23} />

                                <div className="flex-1">
                                    <label
                                        htmlFor="destination-search"
                                        className="block text-xs font-semibold text-slate-500"
                                    >
                                        DESTINATION
                                    </label>

                                    <input
                                        id="destination-search"
                                        type="search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Where would you like to go?"
                                        className="mt-1 w-full bg-transparent py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-3 rounded-xl bg-[#163B32] px-8 py-4 font-semibold text-white transition hover:bg-[#285747]"
                            >
                                <Search size={19} />
                                Explore Now
                            </button>
                        </form>

                        <div className="mt-9 flex flex-wrap items-center gap-7 text-sm text-white/90">
                            <span className="flex items-center gap-2">
                                <ShieldCheck size={19} className="text-[#E2C995]" />
                                Trusted Experiences
                            </span>

                            <span className="flex items-center gap-2">
                                <Star size={18} className="text-[#E2C995]" />
                                Handpicked Destinations
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Bottom Label */}
                <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs tracking-[0.25em] text-white/80 md:flex">
                    <span className="h-px w-12 bg-[#E2C995]" />
                    THE PEARL OF THE INDIAN OCEAN
                </div>

            </section>


            {/* ================= INTRO SECTION ================= */}

            <section className="px-6 py-24 md:py-32">
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A58A58]">
                            A Journey Beyond Ordinary
                        </span>

                        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#233C32] md:text-5xl">
                            A Little Island.
                            <span className="block italic text-[#A58A58]">
                                A World of Wonders.
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            Sri Lanka is a destination filled with extraordinary
                            experiences. Discover ancient heritage, breathtaking
                            landscapes, vibrant culture and unforgettable adventures
                            all in one beautiful island.
                        </p>

                        <button
                            onClick={() => goToExplore()}
                            className="mt-8 inline-flex items-center gap-3 border-b border-[#A58A58] pb-2 font-semibold text-[#163B32] transition hover:gap-5"
                        >
                            Discover Our Island
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85"
                            alt="Beautiful Sri Lankan mountain landscape"
                            className="h-[420px] w-full rounded-sm object-cover md:h-[500px]"
                        />

                        <div className="absolute -bottom-6 -left-5 hidden bg-[#163B32] px-8 py-7 text-white shadow-xl sm:block">
                            <p className="font-serif text-4xl italic text-[#E2C995]">
                                365
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-widest">
                                Days of Discovery
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* ================= EXPERIENCES ================= */}

            <section className="bg-[#F0EEE7] px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A58A58]">
                            Find Your Journey
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-[#233C32] md:text-5xl">
                            Explore by Experience
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                            Whatever your travel style, find the perfect experience
                            waiting for you in Sri Lanka.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {experiences.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => goToExplore(item.search)}
                                className="group relative h-[350px] overflow-hidden text-left"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <div className="absolute bottom-0 left-0 w-full p-7 text-white">
                                    <h3 className="font-serif text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-white/80">
                                        {item.subtitle}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#E2C995]">
                                        Explore Experience
                                        <ArrowRight
                                            size={17}
                                            className="transition group-hover:translate-x-2"
                                        />
                                    </div>
                                </div>
                            </button>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= DESTINATIONS ================= */}


            {/* ================= DESTINATIONS ================= */}

            <section id="destinations" className="px-6 py-24 md:py-32">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A58A58]">
                                Places Worth Discovering
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-[#233C32] md:text-5xl">
                                Featured Destinations
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-slate-600">
                                Explore some of the most remarkable destinations
                                across the island.
                            </p>
                        </div>

                        <button
                            onClick={() => goToExplore()}
                            className="inline-flex items-center gap-2 font-semibold text-[#163B32] transition hover:gap-4"
                        >
                            View All Destinations
                            <ArrowRight size={19} />
                        </button>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {destinations.map((destination) => (
                            <article
                                key={destination.id}
                                onClick={() => navigate(`/destinations/${destination.id}`)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        navigate(`/destinations/${destination.id}`);
                                    }
                                }}
                                role="link"
                                tabIndex={0}
                                aria-label={`View ${destination.name} details`}
                                className="group cursor-pointer overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="relative h-[280px] overflow-hidden">

                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <span className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-semibold text-[#163B32]">
                                        {destination.category}
                                    </span>

                                    <span className="absolute right-4 top-4 flex items-center gap-1 bg-white px-3 py-2 text-xs font-bold text-slate-800">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        {destination.rating}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`Save ${destination.name}`}
                                        className="absolute bottom-4 right-4 rounded-full bg-white/95 p-3 text-[#163B32] transition hover:bg-[#163B32] hover:text-white"
                                    >
                                        <Heart size={18} />
                                    </button>

                                </div>

                                <div className="p-5">

                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <MapPin size={14} className="text-[#A58A58]" />
                                        {destination.location}
                                    </div>

                                    <h3 className="mt-3 font-serif text-2xl text-[#233C32]">
                                        {destination.name}
                                    </h3>

                                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                                        {destination.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Starting from
                                            </p>

                                            <p className="mt-1 font-bold text-[#163B32]">
                                                LKR {destination.price}
                                            </p>

                                            <p className="text-xs text-slate-400">
                                                Per person
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/destinations/${destination.id}`);
                                            }}
                                            aria-label={`View ${destination.name} details`}
                                            className="rounded-full border border-[#163B32] p-3 text-[#163B32] transition hover:bg-[#163B32] hover:text-white"
                                        >
                                            <ArrowRight size={19} />
                                        </button>

                                    </div>
                                </div>

                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= TRAVEL PACKAGES ================= */}

            <section className="bg-[#163B32] px-6 py-24 md:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6BB82]">
                            Carefully Designed For You
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            Curated Travel Journeys
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/65">
                            Thoughtfully planned journeys to help you experience
                            the very best of Sri Lanka.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-3">

                        {packages.map((item) => (
                            <article
                                key={item.name}
                                className="group overflow-hidden bg-[#20483D]"
                            >

                                <div className="relative h-[250px] overflow-hidden">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <span className="absolute left-5 top-5 bg-[#E2C995] px-4 py-2 text-xs font-bold tracking-wider text-[#163B32]">
                                        {item.tag}
                                    </span>

                                </div>

                                <div className="p-7 text-white">

                                    <div className="flex items-center gap-2 text-sm text-[#D6BB82]">
                                        <Clock size={16} />
                                        {item.duration}
                                    </div>

                                    <h3 className="mt-4 font-serif text-2xl">
                                        {item.name}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/65">
                                        {item.description}
                                    </p>

                                    <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-6">

                                        <div>
                                            <p className="text-xs text-white/50">
                                                Starting from
                                            </p>

                                            <p className="mt-1 text-xl font-bold text-[#E2C995]">
                                                LKR {item.price}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => goToExplore(item.name)}
                                            className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#E2C995]"
                                        >
                                            Discover
                                            <ArrowRight size={18} />
                                        </button>

                                    </div>

                                </div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* ================= WHY CHOOSE US ================= */}

            <section className="bg-white px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A58A58]">
                            The WanderLanka Difference
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-[#233C32] md:text-5xl">
                            Travel With Confidence
                        </h2>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3">

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0EEE7] text-[#A58A58]">
                                <Compass size={29} />
                            </div>

                            <h3 className="mt-6 font-serif text-2xl text-[#233C32]">
                                Unique Experiences
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                Carefully selected destinations and experiences
                                to make every journey memorable.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0EEE7] text-[#A58A58]">
                                <ShieldCheck size={29} />
                            </div>

                            <h3 className="mt-6 font-serif text-2xl text-[#233C32]">
                                Reliable Booking
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                A simple and convenient booking experience
                                with clear travel information.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0EEE7] text-[#A58A58]">
                                <Headphones size={29} />
                            </div>

                            <h3 className="mt-6 font-serif text-2xl text-[#233C32]">
                                Dedicated Support
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                Helpful guidance to make planning your next
                                adventure easier.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= TESTIMONIALS ================= */}

            <section className="bg-[#F0EEE7] px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A58A58]">
                            Traveler Stories
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-[#233C32] md:text-5xl">
                            Memories That Last Forever
                        </h2>

                    </div>

                    <div className="grid gap-7 md:grid-cols-3">

                        {reviews.map((review) => (
                            <article
                                key={review.name}
                                className="bg-white p-8 shadow-sm"
                            >

                                <Quote size={30} className="text-[#C5A46D]" />

                                <div className="mt-5 flex gap-1">
                                    {Array.from({ length: review.rating }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={16}
                                            className="fill-[#C5A46D] text-[#C5A46D]"
                                        />
                                    ))}
                                </div>

                                <p className="mt-5 min-h-28 text-sm leading-7 text-slate-600">
                                    "{review.review}"
                                </p>

                                <div className="mt-6 border-t border-slate-100 pt-5">
                                    <h3 className="font-semibold text-[#233C32]">
                                        {review.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-500">
                                        {review.country}
                                    </p>
                                </div>

                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="relative overflow-hidden bg-[#163B32] px-6 py-24 text-center">

                <div className="absolute inset-0 opacity-10">
                    <Globe size={350} className="absolute -right-20 -top-24 text-white" />
                </div>

                <div className="relative mx-auto max-w-3xl">

                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6BB82]">
                        Your Journey Begins Here
                    </span>

                    <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">
                        Your Sri Lankan Story
                        <span className="block italic text-[#E2C995]">
                            Awaits.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl leading-8 text-white/70">
                        Let the island surprise you. Discover beautiful places,
                        unforgettable experiences and journeys worth remembering.
                    </p>

                    <button
                        onClick={() => goToExplore()}
                        className="mt-9 inline-flex items-center gap-3 bg-[#E2C995] px-9 py-4 font-semibold text-[#163B32] transition hover:bg-white"
                    >
                        Start Exploring
                        <ChevronRight size={19} />
                    </button>

                </div>

            </section>

        </main>
    );
}

export default Home;
