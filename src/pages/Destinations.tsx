
import { useMemo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Search,
    MapPin,
    ArrowRight,
    Waves,
    Landmark,
    Mountain,
    Trees,
    Compass,
    Building2,
} from 'lucide-react';

const categories = [
    {
        id: 'beach',
        title: 'Beach Escapes',
        description: 'Discover golden beaches and beautiful coastal towns.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
        icon: Waves,
        count: '12 Destinations',
    },
    {
        id: 'cultural',
        title: 'Cultural Heritage',
        description: 'Explore ancient kingdoms, temples and historic sites.',
        image: 'https://images.unsplash.com/photo-1588598198321-9735fd5249b0?auto=format&fit=crop&w=900&q=85',
        icon: Landmark,
        count: '10 Destinations',
    },
    {
        id: 'tea-country',
        title: 'Tea Country',
        description: 'Experience misty mountains and scenic tea plantations.',
        image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=900&q=85',
        icon: Mountain,
        count: '8 Destinations',
    },
    {
        id: 'wildlife',
        title: 'Wildlife & Nature',
        description: 'Explore national parks and Sri Lanka’s natural beauty.',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85',
        icon: Trees,
        count: '9 Destinations',
    },
    {
        id: 'adventure',
        title: 'Adventure & Hiking',
        description: 'Find scenic trails and unforgettable outdoor adventures.',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85',
        icon: Compass,
        count: '7 Destinations',
    },
    {
        id: 'city',
        title: 'City & Heritage',
        description: 'Experience vibrant cities and charming historic towns.',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85',
        icon: Building2,
        count: '6 Destinations',
    },
];

const destinations = [
    {
        name: 'Ella',
        location: 'Badulla District',
        category: 'tea-country',
        type: 'Mountain Escape',
        description: 'A charming hill-country destination surrounded by green mountains and tea plantations.',
        image: 'https://images.unsplash.com/photo-1588598198321-9735fd5249b0?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Sigiriya',
        location: 'Central Province',
        category: 'cultural',
        type: 'Cultural Wonder',
        description: 'Discover the iconic ancient rock fortress and its fascinating history.',
        image: 'https://images.unsplash.com/photo-1588258524675-c8b3d4a7d6e5?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Mirissa',
        location: 'Southern Province',
        category: 'beach',
        type: 'Coastal Escape',
        description: 'Relax beside beautiful beaches and enjoy the atmosphere of the southern coast.',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Yala',
        location: 'Southern Province',
        category: 'wildlife',
        type: 'Wildlife Adventure',
        description: 'Explore a remarkable natural landscape filled with diverse wildlife.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Galle',
        location: 'Southern Province',
        category: 'city',
        type: 'Historic City',
        description: 'Walk through charming streets and discover the heritage of Galle Fort.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Horton Plains',
        location: 'Nuwara Eliya District',
        category: 'adventure',
        type: 'Nature & Hiking',
        description: 'Experience beautiful highland scenery, walking trails and breathtaking viewpoints.',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Kandy',
        location: 'Central Province',
        category: 'cultural',
        type: 'Cultural City',
        description: 'Discover a historic city known for its cultural traditions and scenic surroundings.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85',
    },
    {
        name: 'Nuwara Eliya',
        location: 'Central Province',
        category: 'tea-country',
        type: 'Hill Country',
        description: 'Enjoy cool weather, peaceful landscapes and endless tea plantations.',
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85',
    },
];

function createSlug(name: string) {
    return name.toLowerCase().replace(/\s+/g, '-');
}

function Destinations() {
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    // Read category hash links from the Navbar
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        const validCategory = categories.find(
            (category) => category.id === hash
        );

        if (validCategory) {
            setActiveCategory(validCategory.id);

            setTimeout(() => {
                document.getElementById('popular-destinations')?.scrollIntoView({
                    behavior: 'smooth',
                });
            }, 100);
        }
    }, [location.hash]);

    const selectCategory = (categoryId: string) => {
        setActiveCategory(categoryId);

        document.getElementById('popular-destinations')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const filteredDestinations = useMemo(() => {
        return destinations.filter((destination) => {
            const search = searchTerm.toLowerCase().trim();

            const matchesSearch =
                destination.name.toLowerCase().includes(search) ||
                destination.location.toLowerCase().includes(search) ||
                destination.type.toLowerCase().includes(search);

            const matchesCategory =
                activeCategory === 'all' ||
                destination.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <main className="bg-[#FAF9F6]">

            {/* Hero Section */}
            <section className="relative flex min-h-[520px] items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90"
                    alt="Beautiful travel landscape"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative mx-auto w-full max-w-7xl px-6 py-28 text-center text-white">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8DFCE]">
                        Discover the Island
                    </p>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        Explore the Wonders of
                        <span className="block text-[#E8DFCE]">
                            Sri Lanka
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                        From golden beaches to misty mountains, discover
                        extraordinary places and create unforgettable journeys.
                    </p>

                    <a
                        href="#popular-destinations"
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#C5A46D] px-8 py-4 font-semibold text-white transition hover:bg-[#ad8b54]"
                    >
                        Discover Destinations
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            {/* Introduction */}
            <section className="mx-auto max-w-7xl px-6 py-20 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A88955]">
                    A World of Experiences
                </p>

                <h2 className="text-3xl font-bold text-[#163B32] md:text-4xl">
                    Find Your Perfect Destination
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                    Every corner of Sri Lanka has a story to tell. Explore
                    destinations that match your interests, from relaxing
                    coastal escapes to exciting mountain adventures.
                </p>
            </section>

            {/* Category Cards */}
            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A88955]">
                            Explore Your Interests
                        </p>

                        <h2 className="text-3xl font-bold text-[#163B32]">
                            Explore by Category
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-gray-500">
                        Choose your favourite travel experience and discover
                        places worth exploring.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <button
                                type="button"
                                key={category.id}
                                onClick={() => selectCategory(category.id)}
                                className="group relative h-[300px] overflow-hidden rounded-2xl text-left"
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="text-xl font-bold">
                                        {category.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/80">
                                        {category.description}
                                    </p>

                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs font-medium text-white/80">
                                            {category.count}
                                        </span>

                                        <span className="flex items-center gap-2 text-sm font-semibold">
                                            Explore
                                            <ArrowRight
                                                size={17}
                                                className="transition group-hover:translate-x-1"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Popular Destinations */}
            <section
                id="popular-destinations"
                className="bg-white py-20"
            >
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A88955]">
                            Must-Visit Places
                        </p>

                        <h2 className="text-3xl font-bold text-[#163B32] md:text-4xl">
                            Popular Destinations
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                            Discover some of the most loved places across
                            the island and find inspiration for your next trip.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-full border border-gray-200 bg-[#FAF9F6] px-5 py-3 shadow-sm">
                        <Search className="shrink-0 text-[#A88955]" size={21} />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search destinations or locations..."
                            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeCategory === 'all'
                                    ? 'bg-[#163B32] text-white'
                                    : 'border border-gray-200 bg-white text-gray-600 hover:border-[#163B32] hover:text-[#163B32]'
                                }`}
                        >
                            All
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeCategory === category.id
                                        ? 'bg-[#163B32] text-white'
                                        : 'border border-gray-200 bg-white text-gray-600 hover:border-[#163B32] hover:text-[#163B32]'
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Destination Count */}
                    <p className="mb-6 text-sm text-gray-500">
                        Showing {filteredDestinations.length} destinations
                    </p>

                    {/* Destination Cards */}
                    {filteredDestinations.length > 0 ? (
                        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredDestinations.map((destination) => (
                                <Link
                                    key={destination.name}
                                    to={`/destinations/${createSlug(destination.name)}`}
                                    className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#163B32] backdrop-blur">
                                            {destination.type}
                                        </span>
                                    </div>

                                    <div className="p-5">
                                        <div className="mb-3 flex items-center gap-1.5 text-xs text-gray-500">
                                            <MapPin size={14} className="text-[#A88955]" />
                                            {destination.location}
                                        </div>

                                        <h3 className="text-xl font-bold text-[#163B32]">
                                            {destination.name}
                                        </h3>

                                        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                                            {destination.description}
                                        </p>

                                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A88955] transition group-hover:gap-3">
                                            Discover More
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center">
                            <MapPin size={38} className="mx-auto text-gray-300" />

                            <h3 className="mt-4 text-xl font-bold text-[#163B32]">
                                No destinations found
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Try another destination name or category.
                            </p>

                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveCategory('all');
                                }}
                                className="mt-5 rounded-full bg-[#163B32] px-6 py-3 text-sm font-semibold text-white hover:bg-[#245447]"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-[#163B32] px-6 py-20 text-center text-white">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C5A46D]">
                    Your Journey Starts Here
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                    Ready to Explore Sri Lanka?
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-7 text-white/75">
                    Find your next adventure and experience the beauty,
                    culture and unforgettable moments of the island.
                </p>

                <Link
                    to="/explore"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C5A46D] px-8 py-4 font-semibold text-white transition hover:bg-[#ad8b54]"
                >
                    Explore Travel Experiences
                    <ArrowRight size={18} />
                </Link>
            </section>

        </main>
    );
}

export default Destinations;
