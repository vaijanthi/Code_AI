function showTab(tabName) {
    const tabs = document .querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.remove('hidden');
        } else {
            tab.classList.add('hidden');
        }
    });

    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        if (button.textContent.trim().toLowerCase() === tabName.toLowerCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function navigate(url) {
    window.location.href = url;
}