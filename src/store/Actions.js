export const SelectSong = (song, index) => {
    return { type: "SelectSong", song, index};
}

export const NextSong = (index) => {
    return { type: "NextSong", index};
}

export const SlideIn = (bool) => {
    return { type: "SlideIn", bool};
}