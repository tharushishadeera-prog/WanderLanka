
import { Link, useParams } from 'react-router-dom';
import {
    MapPin,
    CalendarDays,
    Clock3,
    ArrowRight,
    Compass,
} from 'lucide-react';

interface Destination {
    name: string;
    location: string;
    category: string;
    tagline: string;
    description: string;
    about: string;
    image: string;
    bestTime: string;
    duration: string;
    attractions: string[];
    activities: string[];
    gallery: string[];
}

const destinationData: Record<string, Destination> = {
    ella: {
        name: 'Ella',
        location: 'Badulla District, Sri Lanka',
        category: 'Tea Country',
        tagline: 'Discover the beauty of the Sri Lankan highlands.',
        description:
            'Ella is a beautiful hill-country destination surrounded by lush green mountains, tea plantations and breathtaking scenery.',
        about:
            'Located in the central highlands of Sri Lanka, Ella is famous for its peaceful atmosphere, scenic mountain views and beautiful natural attractions. It is a perfect destination for travellers who enjoy nature, adventure and relaxing surroundings.',
        image: 'https://images.unsplash.com/photo-1588598198321-9735fd5249b0?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'January – April',
        duration: '2 – 3 Days',
        attractions: [
            'Nine Arch Bridge',
            'Little Adam’s Peak',
            'Ella Rock',
            'Ravana Falls',
        ],
        activities: [
            'Scenic train journeys',
            'Mountain hiking',
            'Tea plantation visits',
            'Photography and sightseeing',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1588598198321-9735fd5249b0?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
        ],
    },

    sigiriya: {
        name: 'Sigiriya',
        location: 'Matale District, Sri Lanka',
        category: 'Cultural Heritage',
        tagline: 'Explore the legendary ancient rock fortress.',
        description:
            'Discover the iconic Sigiriya Rock Fortress, an extraordinary historical landmark surrounded by beautiful gardens and fascinating ancient architecture.',
        about:
            'Sigiriya is one of Sri Lanka’s most remarkable historical destinations. Known for its ancient rock fortress, impressive gardens, frescoes and archaeological remains, it offers visitors an unforgettable journey into the island’s rich cultural heritage.',
        image: 'https://images.unsplash.com/photo-1588258524675-c8b3d4a7d6e5?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'January – April',
        duration: '1 – 2 Days',
        attractions: [
            'Sigiriya Rock Fortress',
            'Pidurangala Rock',
            'Sigiriya Museum',
            'Water Gardens',
        ],
        activities: [
            'Explore ancient architecture',
            'Visit historical sites',
            'Nature photography',
            'Discover local culture',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1588258524675-c8b3d4a7d6e5?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85',
        ],
    },

    mirissa: {
        name: 'Mirissa',
        location: 'Southern Province, Sri Lanka',
        category: 'Beach Escapes',
        tagline: 'Relax along the beautiful southern coastline.',
        description:
            'Mirissa is a charming coastal destination known for its golden beaches, turquoise waters and relaxing tropical atmosphere.',
        about:
            'Located along the southern coast of Sri Lanka, Mirissa is a popular destination for beach lovers. Visitors can enjoy beautiful coastal scenery, peaceful beach experiences and the welcoming atmosphere of a traditional seaside town.',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'November – April',
        duration: '2 – 3 Days',
        attractions: [
            'Mirissa Beach',
            'Coconut Tree Hill',
            'Parrot Rock',
            'Secret Beach',
        ],
        activities: [
            'Swimming and beach relaxation',
            'Coastal photography',
            'Sunset watching',
            'Explore nearby coastal towns',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85',
        ],
    },

    yala: {
        name: 'Yala',
        location: 'Southern and Uva Provinces, Sri Lanka',
        category: 'Wildlife & Nature',
        tagline: 'Experience the wild beauty of Sri Lanka.',
        description:
            'Yala is a famous wildlife destination featuring diverse landscapes, beautiful natural surroundings and remarkable wildlife.',
        about:
            'Yala National Park is one of Sri Lanka’s best-known wildlife destinations. Its varied natural habitats support many species of animals and birds, making it a popular location for nature enthusiasts and wildlife photography.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'February – July',
        duration: '2 Days',
        attractions: [
            'Yala National Park',
            'Sithulpawwa',
            'Patanangala Beach',
            'Magul Maha Viharaya',
        ],
        activities: [
            'Wildlife observation',
            'Guided safari experiences',
            'Bird watching',
            'Nature photography',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
        ],
    },

    galle: {
        name: 'Galle',
        location: 'Southern Province, Sri Lanka',
        category: 'City & Heritage',
        tagline: 'Discover history beside the beautiful southern coast.',
        description:
            'Galle is a charming coastal city famous for its historic fort, colonial architecture and beautiful ocean views.',
        about:
            'Galle combines history, culture and coastal beauty. The historic Galle Fort features charming streets, old buildings, museums and beautiful views of the Indian Ocean. It is an ideal destination for travellers interested in history and architecture.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'December – April',
        duration: '1 – 2 Days',
        attractions: [
            'Galle Fort',
            'Galle Lighthouse',
            'Dutch Reformed Church',
            'National Maritime Museum',
        ],
        activities: [
            'Explore historic streets',
            'Visit museums',
            'Coastal photography',
            'Discover local cafés and shops',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
        ],
    },

    'horton-plains': {
        name: 'Horton Plains',
        location: 'Nuwara Eliya District, Sri Lanka',
        category: 'Adventure & Hiking',
        tagline: 'Explore the breathtaking beauty of the highlands.',
        description:
            'Horton Plains is a beautiful highland nature reserve known for its grasslands, misty landscapes and scenic walking trails.',
        about:
            'Horton Plains National Park offers a unique natural environment in Sri Lanka’s central highlands. Visitors can explore open grasslands, cloud forests and scenic viewpoints while experiencing the peaceful beauty of the highlands.',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'January – March',
        duration: '1 Day',
        attractions: [
            'World’s End',
            'Baker’s Falls',
            'Chimney Pool',
            'Horton Plains National Park',
        ],
        activities: [
            'Nature walks',
            'Hiking',
            'Bird watching',
            'Landscape photography',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85',
        ],
    },

    kandy: {
        name: 'Kandy',
        location: 'Central Province, Sri Lanka',
        category: 'Cultural Heritage',
        tagline: 'Experience the heart of Sri Lankan culture.',
        description:
            'Kandy is a historic hill-country city known for its cultural heritage, beautiful lake and scenic surroundings.',
        about:
            'Surrounded by green hills, Kandy is one of Sri Lanka’s most important cultural destinations. The city is home to historic landmarks, traditional arts and beautiful natural scenery, offering a memorable cultural experience.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'January – April',
        duration: '2 Days',
        attractions: [
            'Temple of the Sacred Tooth Relic',
            'Kandy Lake',
            'Royal Botanical Gardens',
            'Bahirawakanda Temple',
        ],
        activities: [
            'Visit cultural landmarks',
            'Explore botanical gardens',
            'Experience traditional culture',
            'Enjoy scenic city walks',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1588598198321-9735fd5249b0?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
        ],
    },

    'nuwara-eliya': {
        name: 'Nuwara Eliya',
        location: 'Central Province, Sri Lanka',
        category: 'Tea Country',
        tagline: 'Discover the charm of Sri Lanka’s little England.',
        description:
            'Nuwara Eliya is a peaceful hill-country destination famous for its cool climate, tea plantations and beautiful green landscapes.',
        about:
            'Known for its cool weather and scenic surroundings, Nuwara Eliya offers a relaxing escape in the central highlands. The destination is surrounded by tea estates, gardens, waterfalls and beautiful mountain scenery.',
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=90',
        bestTime: 'February – April',
        duration: '2 – 3 Days',
        attractions: [
            'Gregory Lake',
            'Hakgala Botanical Garden',
            'Lover’s Leap Waterfall',
            'Pedro Tea Estate',
        ],
        activities: [
            'Visit tea plantations',
            'Explore botanical gardens',
            'Enjoy lake activities',
            'Discover scenic viewpoints',
        ],
        gallery: [
            'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
        ],
    },
};

function DestinationDetails() {
    const { slug } = useParams<{ slug: string }>();

    const destination = slug ? destinationData[slug] : undefined;

    if (!destination) {
        return (
            <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#FAF9F6] px-6 text-center">
                <MapPin size={48} className="text-[#A88955]" />

                <h1 className="mt-5 text-3xl font-bold text-[#163B32]">
                    Destination Not Found
                </h1>

                <p className="mt-3 text-gray-500">
                    Sorry, we couldn't find the destination you are looking for.
                </p>

                <Link
                    to="/destinations"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#163B32] px-7 py-3 font-semibold text-white transition hover:bg-[#245447]"
                >
                    Back to Destinations
                    <ArrowRight size={17} />
                </Link>
            </main>
        );
    }

    return (
        <main className="bg-[#FAF9F6]">

            {/* Hero Section */}
            <section className="relative flex min-h-[480px] items-center overflow-hidden md:min-h-[580px]">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

                <div className="relative mx-auto w-full max-w-7xl px-6 py-28 text-white">
                    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/80">
                        <Link to="/" className="transition hover:text-[#E8DFCE]">
                            Home
                        </Link>
                        <span>/</span>
                        <Link to="/destinations" className="transition hover:text-[#E8DFCE]">
                            Destinations
                        </Link>
                        <span>/</span>
                        <span className="text-[#E8DFCE]">{destination.name}</span>
                    </div>

                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8DFCE]">
                        {destination.category}
                    </p>

                    <h1 className="max-w-3xl text-5xl font-bold md:text-7xl">
                        Discover {destination.name}
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                        {destination.tagline}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-sm text-white/85">
                        <MapPin size={18} className="text-[#C5A46D]" />
                        {destination.location}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A88955]">
                        Welcome to {destination.name}
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-[#163B32] md:text-4xl">
                        Experience the Beauty of {destination.name}
                    </h2>

                    <p className="mt-6 text-base leading-8 text-gray-600">
                        {destination.description}
                    </p>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                        {destination.about}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-5">
                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <CalendarDays className="mb-3 text-[#A88955]" size={25} />
                            <p className="text-xs text-gray-500">Best Time to Visit</p>
                            <p className="mt-2 font-bold text-[#163B32]">
                                {destination.bestTime}
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-5 shadow-sm">
                            <Clock3 className="mb-3 text-[#A88955]" size={25} />
                            <p className="text-xs text-gray-500">Recommended Stay</p>
                            <p className="mt-2 font-bold text-[#163B32]">
                                {destination.duration}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={destination.image}
                        alt={`${destination.name} landscape`}
                        className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                </div>
            </section>

            {/* Attractions */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A88955]">
                            Places to Explore
                        </p>

                        <h2 className="text-3xl font-bold text-[#163B32] md:text-4xl">
                            Top Attractions in {destination.name}
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                            Discover the special places and highlights that make
                            this destination worth visiting.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {destination.attractions.map((attraction, index) => (
                            <div
                                key={attraction}
                                className="rounded-xl border border-gray-100 bg-[#FAF9F6] p-6 transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#163B32] text-sm font-bold text-white">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-5 font-bold text-[#163B32]">
                                    {attraction}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Things To Do */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-10">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A88955]">
                        Make Memories
                    </p>

                    <h2 className="text-3xl font-bold text-[#163B32] md:text-4xl">
                        Things to Do in {destination.name}
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {destination.activities.map((activity) => (
                        <div
                            key={activity}
                            className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8DFCE] text-[#163B32]">
                                <Compass size={20} />
                            </div>

                            <h3 className="pt-2 font-semibold text-[#163B32]">
                                {activity}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A88955]">
                            Visual Journey
                        </p>

                        <h2 className="text-3xl font-bold text-[#163B32] md:text-4xl">
                            Explore {destination.name} Through Pictures
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {destination.gallery.map((image, index) => (
                            <div
                                key={image}
                                className="group h-64 overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={image}
                                    alt={`${destination.name} view ${index + 1}`}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Destinations */}
            <section className="bg-[#163B32] px-6 py-20 text-center text-white">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C5A46D]">
                    Continue Exploring
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                    Discover More of Sri Lanka
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-7 text-white/75">
                    There are many more beautiful destinations waiting to be explored.
                    Continue your journey with WanderLanka.
                </p>

                <Link
                    to="/destinations"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C5A46D] px-8 py-4 font-semibold text-white transition hover:bg-[#ad8b54]"
                >
                    Explore All Destinations
                    <ArrowRight size={18} />
                </Link>
            </section>

        </main>
    );
}

export default DestinationDetails;
