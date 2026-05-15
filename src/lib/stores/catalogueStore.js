import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "SHARK",
        category: "personal",
        image: "/images/work/personal/shark.jpg"
    },

    {
        id: "2",
        title: "MIKA",
        category: "personal",
        image: "/images/work/personal/mika.jpg"
    },

    {
        id: "3",
        title: "YVES",
        category: "personal",
        image: "/images/work/personal/yves.jpg"
    },

    {
        id: "4",
        title: "HEART",
        category: "personal",
        image: "/images/work/personal/heart.jpg"
    },

    {
        id: "5",
        title: "HWA",
        category: "personal",
        image: "/images/work/personal/hwa.jpg"
    },

    {
        id: "6",
        title: "CHAPPELL",
        category: "personal",
        image: "/images/work/personal/Chappell.jpg"
    },

    {
        id: "7",
        title: "Spring Project 2025",
        description: "Simple character selection menu game, focus upon design.",
        category: "college",
        github: "https://github.com/PeterLowe/spring25-hollyhwilson"
    },

    {
        id: "8",
        title: "UI Programming Project 2026",
        description: "Simple UI Programming project, character walks around and items appear/dissapear.",
        category: "college",
        codeberg: "https://codeberg.org/UI-Programming-25-26/Holly_Wilson_C00307813-UI-Programming-Module-Project"
    },

    {
        id: "9",
        title: "Typography Project 2026",
        description: "Made my own pixelated typeface, using FontStruct. Then when on to design a typographic poster using said typeface.",
        category: "college",
        onedrive:"https://setuo365-my.sharepoint.com/:f:/g/personal/colm_oneill_setu_ie/IgDAEZOf8Gx0S6JQ_FstV6rXAe97yFMA13LUh1ysxaRBboo?e=SifDoN"
       
    },

    {
        id: "10",
        title: "UI Prototyping To-do app",
        description: "One of my favourite projects, designing a to-do app specifically tailored to my own needs, with clear UI.",
        category: "college",
        penpot: "https://design.penpot.app/#/view?file-id=72ad1239-4f5c-8115-8007-a6d8e44fbcec&page-id=72ad1239-4f5c-8115-8007-a6d8e44fd47d&section=interactions&index=0&share-id=bdb38471-86c5-8118-8008-04fd50b22de1"
    }

];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});
