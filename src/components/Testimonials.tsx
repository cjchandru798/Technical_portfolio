export default function Testimonials() {
    const certs = [
        "HP Life Certification",
        "Naan Mudhalvan (Java)",
        "Cisco Networking Academy (CCNA)",
        "MongoDB Atlas Essentials",
        "Forage Job Simulation"
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-10">Certifications</h2>
                <div className="flex flex-wrap gap-4">
                    {certs.map((c, i) => (
                        <div key={i} className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-colors cursor-default">
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
