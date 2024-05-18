document.addEventListener("DOMContentLoaded", function() {
    const menu = `
        <header>
            <a href="projecthomepage.html"><img src="images/raidskull.jpg" alt="Logo" class="logo"></a>
            <h1><a href="projecthomepage.html" class="header-link">D2 Raids</a></h1>
            <nav>
                <ul>
                    <li><a href="rootofnightmares.html">Root of Nightmares</a></li>
                    <li><a href="vowofthedisciple.html">Vow of the Disciple </a></li>
                </ul>
            </nav>
        </header>
    `;
    document.getElementById('menu').innerHTML = menu;
});
