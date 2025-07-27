document.querySelector('.box').addEventListener('click', () => {
    const lid = document.querySelector('.lid');
    const box = document.getElementById('giftBox');
    const message = document.getElementById('message');
    const starsContainer = document.getElementById('stars');
    const hint = document.getElementById('hintText');

    hint.style.display = 'none';
    lid.style.transform = 'translateY(-120px) rotateX(90deg)';
    box.style.opacity = '0.5';

    // ⭐ ดาวกระจาย
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const angle = Math.random() * 2 * Math.PI;
        const radius = 100 + Math.random() * 50;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        star.style.setProperty('--x', `${x}px`);
        star.style.setProperty('--y', `${y}px`);
        starsContainer.appendChild(star);
        setTimeout(() => star.remove(), 1000);
    }

    // 🎈 ลูกโป่งลอยขึ้น
    const balloonArea = document.querySelector('.balloons');

    function launchBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        const x = Math.random() * window.innerWidth;
        const size = 20 + Math.random() * 30;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.5}px`;
        balloon.style.background = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
        balloon.style.left = `${x}px`;
        balloon.style.bottom = `-50px`;

        balloonArea.appendChild(balloon);
        setTimeout(() => balloon.remove(), 8000);
    }
    setInterval(launchBalloon, 500);

    // 🎆 พลุหลายชุด
    const fireworks = document.querySelector('.fireworks');

    function explodeFirework() {
        for (let j = 0; j < 3; j++) { // 3 ชุดต่อครั้ง
            const centerX = Math.random() * window.innerWidth;
            const centerY = Math.random() * window.innerHeight;

            for (let i = 0; i < 20; i++) { // 20 อนุภาคต่อชุด
                const fw = document.createElement('div');
                fw.classList.add('firework');

                const angle = (i / 20) * 2 * Math.PI;
                const distance = 80 + Math.random() * 50;
                const dx = Math.cos(angle) * distance;
                const dy = Math.sin(angle) * distance;

                fw.style.left = `${centerX}px`;
                fw.style.top = `${centerY}px`;
                fw.style.setProperty('--x', `${dx}px`);
                fw.style.setProperty('--y', `${dy}px`);
                fw.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
                fw.style.transform = 'translate(-50%, -50%)';

                fireworks.appendChild(fw);
                setTimeout(() => fw.remove(), 1500);
            }
        }
    }
    setInterval(explodeFirework, 1500);
    explodeFirework();

    setTimeout(() => {
        box.style.display = 'none';
        message.style.display = 'block';
    }, 1000);
});