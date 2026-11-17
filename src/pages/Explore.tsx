
import { useState } from 'react';
import {
    ArrowRight,
    Search,
    MapPin,
    Compass,
    Waves,
    Mountain,
    Landmark,
    PawPrint,
    Camera,
    TrainFront,
    TentTree,
    Clock3,
    Star,
} from 'lucide-react';

const destinations = [
    {
        name: 'Ella',
        location: 'Uva Province',
        category: 'Hill Country',
        image:
            'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D800%2Cheight%3D600%2Cdpr%3D2/tour_img/82016e563df1877e5bc112a75262c7165fdb676deae9d81ae93ea02520c4e30d.jpg',
        description: 'Discover misty mountains and breathtaking landscapes.',
    },
    {
        name: 'Sigiriya',
        location: 'Central Province',
        category: 'Heritage',
        image: 'https://untoldlanka.com/images/sl-sigiriya-1.jpg',
        description: 'Explore an ancient rock fortress and its rich history.',
    },
    {
        name: 'Mirissa',
        location: 'Southern Province',
        category: 'Beach',
        image:
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
        description: 'Relax on golden beaches beside the Indian Ocean.',
    },
    {
        name: 'Galle',
        location: 'Southern Province',
        category: 'Heritage',
        image:
            'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=85',
        description: 'Experience colonial charm and coastal beauty.',
    },
    {
        name: 'Kandy',
        location: 'Central Province',
        category: 'Culture',
        image:
            'https://images.unsplash.com/photo-1588598198321-9735fd5c9c3b?auto=format&fit=crop&w=900&q=85',
        description: 'Discover sacred places and beautiful hill country views.',
    },
    {
        name: 'Nuwara Eliya',
        location: 'Central Province',
        category: 'Hill Country',
        image:
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85',
        description: 'Enjoy tea gardens and cool mountain scenery.',
    },
];

const experiences = [
    {
        title: 'Beach Escapes',
        description: 'Relax beside beautiful tropical coastlines.',
        category: 'Beach',
        image:
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
        icon: Waves,
    },
    {
        title: 'Hill Country',
        description: 'Explore mountains, waterfalls and tea estates.',
        category: 'Nature',
        image:
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85',
        icon: Mountain,
    },
    {
        title: 'Cultural Heritage',
        description: 'Discover ancient kingdoms and timeless traditions.',
        category: 'Culture',
        image: 'https://untoldlanka.com/images/sl-sigiriya-1.jpg',
        icon: Landmark,
    },
    {
        title: 'Wildlife Adventures',
        description: 'Experience incredible wildlife and natural habitats.',
        category: 'Wildlife',
        image:
            'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85',
        icon: PawPrint,
    },
];

const activities = [
    {
        title: 'Scenic Train Journeys',
        location: 'Ella',
        image:
            'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=85',
        icon: TrainFront,
    },
    {
        title: 'Mountain Hiking',
        location: 'Ella & Nuwara Eliya',
        image:
            'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85',
        icon: Mountain,
    },
    {
        title: 'Cultural Exploration',
        location: 'Sigiriya',
        image: 'https://untoldlanka.com/images/sl-sigiriya-1.jpg',
        icon: Camera,
    },
    {
        title: 'Nature Camping',
        location: 'Sri Lanka',
        image:
            'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=85',
        icon: TentTree,
    },
];

const packages = [
    {
        title: 'Highland Escape',
        duration: '4 Days / 3 Nights',
        price: '45,000',
        location: 'Ella & Nuwara Eliya',
        image:
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85',
        description: 'Discover mountain views, tea estates and scenic journeys.',
    },
    {
        title: 'Southern Coast Journey',
        duration: '5 Days / 4 Nights',
        price: '58,000',
        location: 'Galle & Mirissa',
        image:
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=85',
        description: 'Experience tropical beaches and beautiful coastal towns.',
    },
    {
        title: 'Cultural Discovery',
        duration: '3 Days / 2 Nights',
        price: '32,000',
        location: 'Sigiriya & Kandy',
        image: 'https://untoldlanka.com/images/sl-sigiriya-1.jpg',
        description: 'Explore ancient landmarks and Sri Lankan heritage.',
    },
];

function Explore() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredDestinations = destinations.filter((destination) => {
        const matchesSearch =
            destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            destination.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });

    const filteredExperiences =
        activeCategory === 'All'
            ? experiences
            : experiences.filter(
                (experience) => experience.category === activeCategory
            );

    const categories = ['All', 'Beach', 'Nature', 'Culture', 'Wildlife'];

    return (
        <main className="overflow-hidden bg-[#FAF9F6] text-[#252A27]">

            {/* HERO SECTION */}
            <section className="relative flex min-h-[540px] items-center justify-center overflow-hidden bg-[#163B32]">
                <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90"
                    alt="Beautiful travel landscape"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#10251F]/65" />

                <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center text-white">

                    <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-[#E8DFCE]">
                        <Compass size={18} />
                        Discover Sri Lanka
                    </span>

                    <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                        Explore Beyond
                        <span className="mt-2 block text-[#D5B77E]">
                            The Ordinary
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                        Discover extraordinary destinations, unforgettable experiences
                        and the hidden beauty of Sri Lanka.
                    </p>

                    {/* SEARCH BAR */}
                    <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row sm:items-center sm:rounded-full">

                        <div className="flex flex-1 items-center gap-3 px-4">
                            <Search size={21} className="shrink-0 text-[#A17D43]" />

                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Where would you like to explore?"
                                className="w-full bg-transparent py-3 text-sm text-[#252A27] outline-none placeholder:text-gray-400"
                            />
                        </div>

                        <button
                            onClick={() =>
                                document
                                    .getElementById('destinations')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="flex items-center justify-center gap-2 rounded-full bg-[#163B32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#285648]"
                        >
                            Explore Now <ArrowRight size={17} />
                        </button>
                    </div>

                    <p className="mt-5 text-sm text-white/70">
                        Find your next adventure with WanderLanka
                    </p>
                </div>
            </section>

            {/* DESTINATIONS SECTION */}
            <section
                id="destinations"
                className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:px-10"
            >
                <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A17D43]">
                            Discover New Places
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold text-[#163B32] md:text-4xl">
                            Explore Destinations
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-gray-500">
                            From peaceful beaches to breathtaking mountains, discover
                            the most beautiful places across Sri Lanka.
                        </p>
                    </div>

                    <a
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#163B32] transition hover:gap-3"
                    >
                        View All Destinations <ArrowRight size={17} />
                    </a>
                </div>

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredDestinations.map((destination) => (
                        <article
                            key={destination.name}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#163B32]">
                                    {destination.category}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <MapPin size={15} className="text-[#A17D43]" />
                                    {destination.location}
                                </div>

                                <h3 className="mt-3 text-2xl font-semibold text-[#163B32]">
                                    {destination.name}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {destination.description}
                                </p>

                                <a
                                    href={`/destinations/${destination.name.toLowerCase().replaceAll(' ', '-')}`}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A17D43] transition hover:gap-3"
                                >
                                    Discover Destination <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredDestinations.length === 0 && (
                    <div className="rounded-2xl bg-white px-6 py-12 text-center">
                        <Search size={32} className="mx-auto text-[#A17D43]" />
                        <h3 className="mt-4 text-xl font-semibold text-[#163B32]">
                            No destinations found
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Try searching for another destination.
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-5 rounded-full bg-[#163B32] px-6 py-3 text-sm font-semibold text-white"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="bg-[#F0EEE7] px-6 py-20 md:px-10">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A17D43]">
                            Find Your Inspiration
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold text-[#163B32] md:text-4xl">
                            Explore by Experience
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                            Choose the kind of adventure you love and discover
                            experiences made for you.
                        </p>
                    </div>

                    {/* CATEGORY FILTER */}
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-6 py-3 text-sm font-medium transition ${activeCategory === category
                                        ? 'bg-[#163B32] text-white shadow-md'
                                        : 'border border-gray-200 bg-white text-gray-600 hover:border-[#163B32] hover:text-[#163B32]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* EXPERIENCE CARDS */}
                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredExperiences.map((experience) => {
                            const Icon = experience.icon;

                            return (
                                <article
                                    key={experience.title}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={experience.image}
                                            alt={experience.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#163B32]">
                                            <Icon size={22} />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-[#163B32]">
                                            {experience.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-gray-500">
                                            {experience.description}
                                        </p>

                                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A17D43]">
                                            Explore Experience <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ACTIVITIES SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">

                <div className="mb-12">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A17D43]">
                        Make Every Moment Count
                    </span>

                    <h2 className="mt-3 text-3xl font-semibold text-[#163B32] md:text-4xl">
                        Popular Activities
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                        Make your journey unforgettable with exciting activities
                        and unique experiences around the island.
                    </p>
                </div>

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {activities.map((activity) => {
                        const Icon = activity.icon;

                        return (
                            <article
                                key={activity.title}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="mb-3 flex items-center gap-2 text-sm text-[#A17D43]">
                                        <Icon size={18} />
                                        <span>Travel Activity</span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-[#163B32]">
                                        {activity.title}
                                    </h3>

                                    <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                        <MapPin size={15} />
                                        {activity.location}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* FEATURED PACKAGES */}
            <section className="bg-[#F0EEE7] px-6 py-20 md:px-10">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A17D43]">
                                Curated for You
                            </span>

                            <h2 className="mt-3 text-3xl font-semibold text-[#163B32] md:text-4xl">
                                Featured Travel Packages
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-gray-500">
                                Explore carefully planned journeys and experience
                                the best of Sri Lanka.
                            </p>
                        </div>

                        <a
                            href="/destinations"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#163B32] hover:gap-3"
                        >
                            Explore More <ArrowRight size={17} />
                        </a>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {packages.map((travelPackage) => (
                            <article
                                key={travelPackage.title}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={travelPackage.image}
                                        alt={travelPackage.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#163B32]">
                                        FEATURED TOUR
                                    </span>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock3 size={16} className="text-[#A17D43]" />
                                        {travelPackage.duration}
                                    </div>

                                    <h3 className="mt-4 text-xl font-semibold text-[#163B32]">
                                        {travelPackage.title}
                                    </h3>

                                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                                        <MapPin size={15} className="text-[#A17D43]" />
                                        {travelPackage.location}
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-gray-500">
                                        {travelPackage.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                                        <div>
                                            <span className="text-xs text-gray-400">
                                                Starting from
                                            </span>

                                            <p className="mt-1 text-xl font-semibold text-[#163B32]">
                                                LKR {travelPackage.price}
                                            </p>
                                        </div>

                                        <a
                                            href="/destinations"
                                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#163B32] text-white transition hover:bg-[#A17D43]"
                                            aria-label={`Explore ${travelPackage.title}`}
                                        >
                                            <ArrowRight size={19} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRAVEL INSPIRATION CTA */}
            <section className="relative overflow-hidden bg-[#163B32] px-6 py-24 text-center text-white">

                <div className="absolute inset-0 opacity-15">
                    <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D5B77E]">
                        Your Next Adventure Awaits
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                        Discover the Magic of Sri Lanka
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl leading-8 text-white/75">
                        Every destination has a story. Start your journey,
                        explore new places and create unforgettable memories
                        with WanderLanka.
                    </p>

                    <a
                        href="/destinations"
                        className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#C5A46D] px-8 py-4 text-sm font-semibold text-[#163B32] transition hover:bg-[#E8DFCE]"
                    >
                        Discover Destinations <ArrowRight size={18} />
                    </a>
                </div>
            </section>

        </main>
    );
}

export default Explore;
