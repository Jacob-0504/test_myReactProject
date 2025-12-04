import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';     // 기존 헤더 컴포넌트 경로 맞춰주기
import Footer from '../../components/Footer';                   // 기존 푸터 컴포넌트 경로 맞춰주기
import Header from '../../components/Header';                   // 기존 헤더 컴포넌트 경로 맞춰주기
import { Website, WebsiteCategory } from '../../types';

const Layout = () => {
    const [activeCategory, setActiveCategory] = useState<WebsiteCategory | 'All'>('All');

    return (
        <div>
            <Header />
            <NavigationBar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
            <Outlet /> {/* 이 부분에 페이지별 콘텐츠가 렌더링됩니다. */}
            <Footer />
        </div>
    );
};

export default Layout;