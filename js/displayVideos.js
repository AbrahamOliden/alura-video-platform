import { APIConnection } from "./APIConnection.js";

const list = document.querySelector('[data-list]');

export default function createCard(titulo, descripcion, url, imagen) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
    <iframe width="100%" height="75%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>
    `;

    return video;
};

async function listVideos() {
    try {
        const APIList = await APIConnection.listVideos();

        APIList.forEach( video => list.appendChild( createCard(video.titulo, video.descripcion, video.url, video.imagen) ) );
    } catch {
        list.innerHTML = `
        <h2 class="mensaje__titulo">A connection issue has occurred</h2>
        `;
    };
    
};

listVideos();