export const SelectSong = (song, index) => {
    return { type: "SelectSong", song, index};
}

export const NextSong = (index) => {
    return { type: "NextSong", index};
}

export const SlideIn = (bool) => {
    return { type: "SlideIn", bool};
}

export const RemoveSong = (id) => {
    return { type: "RemoveSong", id};
}

export const PauseSong = () => {
    return { type: "PauseSong"};
}

export const PlaySong = () => {
    return { type: "PlaySong"};
}

export const SearchSong = (value) => {
    return { type: "SearchSong", value};
}