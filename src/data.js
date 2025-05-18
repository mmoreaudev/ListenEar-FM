import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "NRJ",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/nrj.png",
			artist: "NRJ - Hit Music Only !",
			audio: "https://scdn.nrjaudio.fm/fr/30001/mp3_128.mp3?cdn_path=adswizz_lbs12&access_token=138ae4ad4b904ffc9b3d7c6983310bc8",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Skyrock",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/skyrock.png",
			artist: "Skyrock - Premier sur le rap",
			audio: "http://icecast.skyrock.net/s/natio_mp3_128k",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nostalgie",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/nostalgie.png",
			artist: "Nostagie - Les plus grands tubes !",
			audio: "https://scdn.nrjaudio.fm/fr/30601/mp3_128.mp3?origine=fluxradios&cdn_path=adswizz_lbs9&access_token=14ea5f3405de40f79f375fcf742b2e16",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Mouv'",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/mouv.png",
			artist: "Mouv' - Mon époque. Ma radio",
			audio: "   http://direct.mouv.fr/live/mouv-midfi.mp3",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Virgin Radio",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/virginradio.png",
			artist: "Virgin Radio - Pop, Rock, Électro !",
			audio: "http://stream.virginradio.fr/virgin.mp3",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "RTL 2",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/rtl2.png",
			artist: "RTL 2 - Le son Pop-Rock ",
			audio: "   http://icecast.rtl2.fr/rtl2-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "France Inter",
			cover:
				"https://snjcgt.fr/wp-content/uploads/sites/11/2022/03/logo-France-Inter.png",
			artist: "Nation Glory Radio",
			audio: "http://direct.franceinter.fr/live/franceinter-midfi.mp3",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Fun Radio",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/funradio.png",
			artist: "Fun Radio - Le son DANCEFLOOR !",
			audio: "http://streamer-01.rtl.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nostalgie Génération 80",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/nostalgie80.png",
			artist: "Nostalgie Génération 80",
			audio: "http://scdn.nrjaudio.fm/adwz1/fr/55524/mp3_128.mp3?origine=fluxradios",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Alouette",
			cover:
				"https://raw.githubusercontent.com/mmoreaudev/ListenEar-FM/main/radio/logo/alouette.png",
			artist: "Alouette - La radio qui plume les Parisiennes",
			audio: "http://alouette.ice.infomaniak.ch/alouette-high.mp3",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
	];
}

export default chillHop;
