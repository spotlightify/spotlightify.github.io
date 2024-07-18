import PlayIcon from "/public/svg/play.svg";
import AlbumIcon from "/public/svg/album.svg";
import ShuffleIcon from "/public/svg/shuffle.svg";
import ArtistIcon from "/public/svg/artist.svg";
import AuthenticateIcon from "/public/svg/authenticate.svg";
import ExitIcon from "/public/svg/exit.svg";
import QueueIcon from "/public/svg/queue.svg";
import BackwardIcon from "/public/svg/backward.svg";
import ForwardIcon from "/public/svg/forward.svg";
import PauseIcon from "/public/svg/pause.svg";
import RepeatIcon from "/public/svg/repeat.svg";
import GoArrowIcon from "/public/svg/go-arrow.svg";
import TrackIcon from "/public/svg/track.svg";
import PlaylistIcon from "/public/svg/playlist.svg";
import DeviceIcon from "/public/svg/device.svg";
import HeartIcon from "/public/svg/heart.svg";
import VolumeIcon from "/public/svg/volume.svg";

type Feature = {
  Name: string;
  Description: string;
  Keyword: string;
  Icon: string;
  Input: string;
};

const features: Feature[] = [
  {
    Name: "Play",
    Description: "Find and play a song",
    Keyword: "play",
    Icon: PlayIcon,
    Input: "song name",
  },
  {
    Name: "Queue",
    Description: "Find and queues a song",
    Keyword: "queue",
    Icon: QueueIcon,
    Input: "song name",
  },
  {
    Name: "Playlist",
    Description: "Find and play a playlist",
    Keyword: "playlist",
    Icon: PlaylistIcon,
    Input: "playlist name",
  },
  {
    Name: "Album",
    Description: "Find and play an album",
    Keyword: "album",
    Icon: AlbumIcon,
    Input: "album name",
  },
  {
    Name: "Artist",
    Description: "Find and play songs from an artist",
    Keyword: "artist",
    Icon: ArtistIcon,
    Input: "artist name",
  },
  {
    Name: "Liked",
    Description: "Plays saved/liked music",
    Keyword: "liked",
    Icon: HeartIcon,
    Input: "None",
  },
  {
    Name: "Volume",
    Description: "Changes music volume",
    Keyword: "volume",
    Icon: VolumeIcon,
    Input: "1 - 10",
  },
  {
    Name: "Go to",
    Description: "Seeks a position in a song",
    Keyword: "goto",
    Icon: GoArrowIcon,
    Input: "e.g. 1:24",
  },
  {
    Name: "Resume",
    Description: "Resumes music playback",
    Keyword: "resume",
    Icon: PlayIcon,
    Input: "None",
  },
  {
    Name: "Previous",
    Description: "Plays previous song",
    Keyword: "previous",
    Icon: BackwardIcon,
    Input: "None",
  },
  {
    Name: "Pause",
    Description: "Pauses music playback",
    Keyword: "pause",
    Icon: PauseIcon,
    Input: "None",
  },
  {
    Name: "Next",
    Description: "Plays the next song",
    Keyword: "next",
    Icon: ForwardIcon,
    Input: "None",
  },
  {
    Name: "Shuffle",
    Description: "Toggles shuffle playback",
    Keyword: "shuffle",
    Icon: ShuffleIcon,
    Input: "None",
  },
  {
    Name: "Device",
    Description: "Select device for music playback",
    Keyword: "device",
    Icon: DeviceIcon,
    Input: "None",
  },
  {
    Name: "Repeat",
    Description: "Toggles repeating modes",
    Keyword: "repeat",
    Icon: RepeatIcon,
    Input: "None",
  },
  {
    Name: "Current",
    Description: "Provides currently playing song info and sharing",
    Keyword: "currently playing",
    Icon: TrackIcon,
    Input: "None",
  },
  {
    Name: "Auth",
    Description: "Authenticate with Spotify",
    Keyword: "Authenticate",
    Icon: AuthenticateIcon,
    Input: "Credentials",
  },
  {
    Name: "Exit",
    Description: "Exits the application",
    Keyword: "exit",
    Icon: ExitIcon,
    Input: "None",
  },
];
export default features;
