body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    color: #333;
    transition: background-color 0.5s ease;
}

header, section, footer {
    margin: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

header:hover, section:hover, footer:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

header h1 {
    color: #FF5733;
    font-size: 36px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

section h2 {
    color: #FF5733;
    font-size: 24px;
}

footer {
    text-align: center;
    color: #888;
    font-size: 14px;
}

/* Добавим анимацию для заголовка в разделе "О нас" */
#about h2 {
    animation: fadeInDown 1s ease;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
