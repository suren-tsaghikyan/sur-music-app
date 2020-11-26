import adeleSomeoneLikeYouImg from "../assets/adele.jpg"
import adeleSomeoneLikeYou from "../assets/songs/Adele-Someone-Like-You.mp3"
import adeleHelloImg from "../assets/adele2.png"
import adeleHello from "../assets/songs/adele-hello.mp3"
import adeleRollingInTheDeepImg from "../assets/adele3.jpg"
import adeleRollingInTheDeep from "../assets/songs/Adele-Rolling-in-the-Deep-Audio.mp3"
import miyagiPrayersImg from "../assets/prayers.jpg"
import miyagiPrayers from "../assets/songs/KADI, Miyagi - Prayers.mp3"
import lpLostOnYouImg from "../assets/lostOnYou.jpg"
import lpLostOnYou from "../assets/songs/Lp-lost-on-you-original_Laylo.me.mp3"
import jacobBanksUnknownImg from "../assets/unknown.jpg"
import jacobBanksUnknown from "../assets/songs/Jacob Banks - Chainsmoking (Official Video).mp3"
import stingShapeOfMyHeartImg from "../assets/shapeOfMyHeart.jpg"
import stingShapeOfMyHeart from "../assets/songs/Sting - Shape of My Heart (Leon).mp3"
import edSheeranPerfectImg from "../assets/perfect.jpg"
import edSheeranPerfect from "../assets/songs/Perfect - Ed Sheeran.mp3"
import miyagiMinorImg from "../assets/minor.jpg"
import miyagiMinor from "../assets/songs/Miyagi & Andy Panda - Minor (Mood Video).mp3"


let initialState = {
    songs: [
        {id: 1, singer: 'Adele', title: 'Someone Like You', src: adeleSomeoneLikeYou, img: adeleSomeoneLikeYouImg, duration: "04:51"},
        {id: 2, singer: 'Adele', title: 'Hello', src: adeleHello, img: adeleHelloImg, duration: "04:55"},
        {id: 3, singer: 'Adele', title: 'Rolling In The Deep', src: adeleRollingInTheDeep, img: adeleRollingInTheDeepImg, duration: "03:49"},
        {id: 4, singer: 'KADI, Miyagi', title: 'Prayers', src: miyagiPrayers, img: miyagiPrayersImg, duration: "04:14"},
        {id: 5, singer: 'LP', title: 'Lost On You', src: lpLostOnYou, img: lpLostOnYouImg, duration: "04:26"},
        {id: 6, singer: 'Jacob Banks', title: 'Unknown', src: jacobBanksUnknown, img: jacobBanksUnknownImg, duration: "03:13"},
        {id: 7, singer: 'Sting', title: 'Shape of My Heart', src: stingShapeOfMyHeart, img: stingShapeOfMyHeartImg, duration: "04:38"},
        {id: 8, singer: 'Ed Sheeran', title: 'Perfect', src: edSheeranPerfect, img: edSheeranPerfectImg, duration: "04:28"},
        {id: 9, singer: 'Miyagi & Andy Panda', title: 'Minor', src: miyagiMinor, img: miyagiMinorImg, duration: "03:02"},
    ],
    activeSong: {},
    activeSongIndex: 0,
    slideIn: false,
    paused: false,
}

const SongReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SelectSong':
            return { ...state, activeSong: action.song, activeSongIndex: action.index}
        case 'NextSong':
            if (state.songs.length - 1 > action.index) {
                return { ...state, activeSong: state.songs[action.index + 1], activeSongIndex: action.index + 1}
            } else {
                return { ...state, activeSong: state.songs[0], activeSongIndex: 0}
            }
        case 'SlideIn': 
            return { ...state, slideIn: action.bool }
        case 'RemoveSong': 
            return { ...state, songs: state.songs.filter(s => s.id !== action.id), activeSong: state.activeSong.id === action.id ? {} : state.activeSong }
        case 'PauseSong':
            return { ...state, paused: true }
        case 'PlaySong':
            return { ...state, paused: false }
        case 'SearchSong': {
            return {
                ...state, songs:
                    initialState.songs.filter(s =>
                        s.singer.toLowerCase().includes(action.value.toLowerCase()) ||
                        s.title.toLowerCase().includes(action.value.toLowerCase())
                    )
            }
        }
        default: 
            return state
    }
}

export default SongReducer;