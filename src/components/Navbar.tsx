
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Plane, ChevronDown } from 'lucide-react';

const destinationCategories = [
    {
        title: 'Beach Escapes',
        places: ['Mirissa', 'Unawatuna', 'Bentota', 'Arugam Bay'],
        id: 'beach',
    },
    {
        title: 'Cultural Heritage',
        places: ['Sigiriya', 'Anuradhapura', 'Polonnaruwa', 'Kandy'],
        id: 'cultural',
    },
    {
        title: 'Tea Country',
        places: ['Ella', 'Nuwara Eliya', 'Haputale', 'Hatton'],
        id: 'tea-country',
    },
    {
        title: 'Wildlife & Nature',
        places: ['Yala', 'Udawalawe', 'Wilpattu', 'Sinharaja'],
        id: 'wildlife',
    },
    {
        title: 'Adventure & Hiking',
        places: ['Adam’s Peak', 'Knuckles', 'Horton Plains', 'Riverston'],
        id: 'adventure',
    },
    {
        title: 'City & Heritage',
        places: ['Galle', 'Colombo', 'Jaffna', 'Negombo'],
        id: 'city',
    },
];

const createSlug = (place: string) => {
    return place
        .toLowerCase()
        .replace(/[’']/g, '')
        .replace(/\s+/g, '-');
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDestOpen, setMobileDestOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsOpen(false);
        setMobileDestOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2"
                >
                    <div className="rounded-xl bg-teal-600 p-2 text-white">
                        <Plane size={23} />
                    </div>

                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        Wander<span className="text-teal-600">Lanka</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <Link
                        to="/"
                        className="font-medium text-teal-600"
                    >
                        Home
                    </Link>

                    <Link
                        to="/explore"
                        className="font-medium text-slate-600 transition hover:text-teal-600"
                    >
                        Explore
                    </Link>

                    {/* Destinations Mega Dropdown */}
                    <div className="group relative">

                        <Link
                            to="/destinations"
                            className="flex items-center gap-1 py-3 font-medium text-slate-600 transition hover:text-teal-600"
                        >
                            Destinations
                            <ChevronDown size={16} />
                        </Link>

                        <div className="invisible absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-100 bg-white p-7 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        Discover Sri Lanka
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Explore destinations by travel experience.
                                    </p>
                                </div>

                                <Link
                                    to="/destinations"
                                    className="text-sm font-semibold text-teal-600 hover:text-teal-700"
                                >
                                    View All →
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                                {destinationCategories.map((category) => (
                                    <div key={category.id}>

                                        <Link
                                            to={`/destinations#${category.id}`}
                                            className="mb-3 block text-sm font-bold text-teal-700 transition hover:text-teal-900"
                                        >
                                            {category.title}
                                        </Link>

                                        <div className="flex flex-col gap-2">
                                            {category.places.map((place) => (
                                                <Link
                                                    key={place}
                                                    to={`/destinations/${createSlug(place)}`}
                                                    className="text-sm text-slate-500 transition hover:translate-x-1 hover:text-teal-600"
                                                >
                                                    {place}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* About Us - Fixed */}
                    <Link
                        to="/about"
                        className="font-medium text-slate-600 transition hover:text-teal-600"
                    >
                        About Us
                    </Link>

                    {/* Packages */}
                    <Link
                        to="/packages"
                        className="font-medium text-slate-600 transition hover:text-teal-600"
                    >
                        Packages
                    </Link>

                    {/* Contact */}
                    <Link
                        to="/contact"
                        className="font-medium text-slate-600 transition hover:text-teal-600"
                    >
                        Contact
                    </Link>

                </div>

                {/* Explore Trips Button */}
                <Link
                    to="/explore"
                    className="hidden rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700 md:block"
                >
                    Explore Trips
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-slate-800 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={27} /> : <Menu size={27} />}
                </button>

            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-5 md:hidden">

                    <Link
                        onClick={closeMobileMenu}
                        to="/"
                        className="font-medium text-slate-700"
                    >
                        Home
                    </Link>

                    <Link
                        onClick={closeMobileMenu}
                        to="/explore"
                        className="font-medium text-slate-700"
                    >
                        Explore
                    </Link>

                    {/* Mobile Destinations Dropdown */}
                    <div>
                        <button
                            onClick={() => setMobileDestOpen(!mobileDestOpen)}
                            className="flex w-full items-center justify-between font-medium text-slate-700"
                            aria-expanded={mobileDestOpen}
                        >
                            Destinations

                            <ChevronDown
                                size={18}
                                className={`transition-transform ${mobileDestOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {mobileDestOpen && (
                            <div className="mt-4 space-y-4 border-l-2 border-teal-100 pl-4">

                                <Link
                                    to="/destinations"
                                    onClick={closeMobileMenu}
                                    className="block text-sm font-semibold text-teal-600"
                                >
                                    View All Destinations
                                </Link>

                                {destinationCategories.map((category) => (
                                    <div key={category.id}>

                                        <Link
                                            to={`/destinations#${category.id}`}
                                            onClick={closeMobileMenu}
                                            className="block text-sm font-semibold text-slate-800"
                                        >
                                            {category.title}
                                        </Link>

                                        <div className="mt-2 flex flex-col gap-2 pl-3">
                                            {category.places.map((place) => (
                                                <Link
                                                    key={place}
                                                    to={`/destinations/${createSlug(place)}`}
                                                    onClick={closeMobileMenu}
                                                    className="text-sm text-slate-500 transition hover:text-teal-600"
                                                >
                                                    {place}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* About Us - Fixed */}
                    <Link
                        to="/about"
                        onClick={closeMobileMenu}
                        className="font-medium text-slate-700"
                    >
                        About Us
                    </Link>

                    {/* Packages */}
                    <Link
                        to="/packages"
                        onClick={closeMobileMenu}
                        className="font-medium text-slate-700"
                    >
                        Packages
                    </Link>

                    {/* Contact */}
                    <Link
                        to="/contact"
                        onClick={closeMobileMenu}
                        className="font-medium text-slate-700"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/explore"
                        onClick={closeMobileMenu}
                        className="rounded-full bg-teal-600 px-5 py-3 text-center font-semibold text-white"
                    >
                        Explore Trips
                    </Link>

                </div>
            )}
        </header>
    );
}

export default Navbar;
