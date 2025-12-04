import React, { useState, useCallback } from 'react';
import { Website, WebsiteCategory } from '../types';
import WebsiteCard from '../components/WebsiteCard';
import CreateWebsiteModal from '../components/CreateWebsiteModal';
import { EmptyStateIcon } from '../components/icons/EmptyStateIcon';

const App: React.FC = () => {
    const [websites, setWebsites] = useState<Website[]>([
        {
            id: crypto.randomUUID(),
            title: 'My Portfolio',
            description: 'A personal site to showcase my projects and skills.',
            thumbnailUrl: `https://picsum.photos/seed/gaming/500/300`,
            createdAt: new Date(),
            category: 'Game',
            path: '/My_Portfolio',
        },
        {
            id: crypto.randomUUID(),
            title: 'Travel Blog',
            description: 'Documenting my adventures around the globe.',
            thumbnailUrl: `https://picsum.photos/seed/music/500/300`,
            createdAt: new Date(),
            category: 'Music',
            path: '/Travel_Blog',
        },
        {
            id: crypto.randomUUID(),
            title: 'Test New Page',
            description: 'TESTTESTTESTTESTTESTTESTTESTTESTTESTTEST',
            thumbnailUrl: `https://picsum.photos/seed/music/500/300`,
            createdAt: new Date('2025-01-01'),
            category: 'Game',
            path: '/NewPage',
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeCategory, setActiveCategory] = useState<WebsiteCategory | 'All'>('All');

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleCreateWebsite = useCallback((newWebsiteData: Omit<Website, 'id' | 'thumbnailUrl' | 'createdAt'>) => {
        const newWebsite: Website = {
            ...newWebsiteData,
            id: crypto.randomUUID(),
            thumbnailUrl: `https://picsum.photos/seed/${Math.random()}/500/300`,
            createdAt: new Date(),
        };
        setWebsites(prevWebsites => [newWebsite, ...prevWebsites]);
        setIsModalOpen(false);
    }, []);

    const handleDeleteWebsite = useCallback((websiteId: string) => {
        setWebsites(prevWebsites => prevWebsites.filter(site => site.id !== websiteId));
    }, []);

    const filteredWebsites = websites.filter(
        website => activeCategory === 'All' || website.category === activeCategory
    );

    return (
        <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
            <main className="container mx-auto px-4 py-8 md:px-6 md:py-12 flex-grow">
                {filteredWebsites.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredWebsites.map(website => (
                            <WebsiteCard key={website.id} website={website} onDelete={handleDeleteWebsite} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 px-6 bg-white rounded-xl shadow-sm">
                        <EmptyStateIcon className="mx-auto h-24 w-24 text-slate-300" />
                        <h2 className="mt-6 text-2xl font-semibold text-slate-700">No Websites in this Category</h2>
                        <p className="mt-2 text-slate-500">
                            Try selecting another category or create a new website.
                        </p>
                    </div>
                )}
            </main>
            <CreateWebsiteModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onCreate={handleCreateWebsite}
            />
        </div>
    );
};

export default App;