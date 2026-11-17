
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Waves, Camera, Compass } from 'lucide-react';

const packages = [
    {
        title: 'Beach Escape',
        duration: '3 Days / 2 Nights',
        description: 'Relax on golden beaches and discover the beautiful coastal areas of Sri Lanka.',
        image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
        icon: Waves,
        places: 'Mirissa, Unawatuna, Bentota',
    },
    {
        title: 'Cultural Heritage',
        duration: '4 Days / 3 Nights',
        description: 'Explore ancient kingdoms, historic temples, and the rich cultural heritage of the island.',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
        icon: Camera,
        places: 'Sigiriya, Kandy, Polonnaruwa',
    },
    {
        title: 'Hill Country Adventure',
        duration: '3 Days / 2 Nights',
        description: 'Experience scenic mountains, tea plantations, waterfalls, and breathtaking landscapes.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
        icon: Mountain,
        places: 'Ella, Nuwara Eliya, Horton Plains',
    },
    {
        title: 'Wildlife Discovery',
        duration: '3 Days / 2 Nights',
        description: 'Discover the natural beauty of Sri Lanka and enjoy unforgettable wildlife experiences.',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
        icon: Compass,
        places: 'Yala, Udawalawe, Wilpattu',
    },
];

function Packages() {
    return (
        <main className="bg-[#FAF9F6] text-[#252A27]">

            {/* Hero */}
            <section className="bg-[#163B32] py-24 px-6 text-center">
                <p className="text-sm uppercase tracking-[4px] text-[#C5A46D] mb-4">
                    Travel Your Way
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Travel Packages
                </h1>
                <p className="max-w-2xl mx-auto text-[#E8DFCE] leading-8">
                    Discover carefully designed travel experiences and explore
                    the best destinations across beautiful Sri Lanka.
                </p>
            </section>

            {/* Packages */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-[3px] text-[#A88955] mb-3">
                        Find Your Journey
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#163B32]">
                        Explore Our Packages
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {packages.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-[#A88955] mb-4">
                                        <Icon size={19} />
                                        <span className="text-sm">{item.duration}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#163B32] mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-7 mb-4">
                                        {item.description}
                                    </p>

                                    <p className="text-sm text-gray-500 mb-6">
                                        <span className="font-semibold text-[#163B32]">Places: </span>
                                        {item.places}
                                    </p>

                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-[#A88955] font-semibold hover:text-[#163B32] transition"
                                    >
                                        Enquire Now <ArrowRight size={17} />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#E8DFCE] py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-[#163B32] mb-5">
                    Need a Custom Travel Experience?
                </h2>
                <p className="text-gray-600 mb-8">
                    Get in touch with us and explore your own travel journey.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#163B32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#245447] transition"
                >
                    Contact Us <ArrowRight size={18} />
                </Link>
            </section>

        </main>
    );
}

export default Packages;
