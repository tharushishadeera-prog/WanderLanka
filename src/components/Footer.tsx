
import { Plane, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">

                <div>
                    <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
                        <Plane className="text-teal-400" />
                        Wander<span className="text-teal-400">Lanka</span>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-slate-400">
                        Discover the beauty of Sri Lanka. Find your next adventure
                        and create unforgettable travel memories with us.
                    </p>
                </div>

                <div>
                    <h3 className="mb-5 font-semibold text-white">Quick Links</h3>
                    <div className="flex flex-col gap-3 text-sm">
                        <a href="/" className="hover:text-teal-400">Home</a>
                        <a href="/explore" className="hover:text-teal-400">Explore Destinations</a>
                        <a href="#about" className="hover:text-teal-400">About Us</a>
                    </div>
                </div>

                <div>
                    <h3 className="mb-5 font-semibold text-white">Contact Us</h3>
                    <div className="flex flex-col gap-4 text-sm">
                        <p className="flex items-center gap-3">
                            <Mail size={17} className="text-teal-400" />
                            hello@wanderlanka.com
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone size={17} className="text-teal-400" />
                            +94 77 123 4567
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin size={17} className="text-teal-400" />
                            Sri Lanka
                        </p>
                    </div>
                </div>

            </div>

            <div className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
                © 2026 WanderLanka. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
