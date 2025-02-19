document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;


    const setActiveLink = (selector) => {
        document.querySelectorAll('.menu-link').forEach(link => {
            link.classList.remove('active');
        });

        const activeLinks = document.querySelectorAll(selector);
        activeLinks.forEach(link => {
            link.classList.add('active');
        });
    };

    if (currentPath === '/' || currentPath === '/index') {
        if (currentHash) {
            setActiveLink(`a[href="${currentHash}"]`);
        }
        setActiveLink('a[href="/index"], a[href="/"]');
    }

    setActiveLink(`a[href="${currentPath}"]`);

    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash;
        setActiveLink(`a[href="${newHash}"]`);
    });
});