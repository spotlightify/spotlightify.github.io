'use client'

import { useEffect, useState } from "react";
import Prompt from "./components/Prompt";
import SuggestionsContainer from "./components/SuggestionsContainer";
import { SuggestionData } from "./components/Suggestion";
import Image from "next/image";
import SpotifyLogo from "/public/spotify-logo.svg";
import DownloadSVG from "/public/download.svg";
import GitHubSVG from "/public/github.svg";
import BookSVG from "/public/book.svg";

const suggestionList = [
    {
        title: "Download Spotlightify!",
        description: "Click here to go to the Spotlightify downloads page",
        icon: DownloadSVG,
        link: "https://github.com/spotlightify/spotlightify"
    },
    {
        title: "Check out the code",
        description: "Click here to go to the Spotlightify GitHub repository",
        icon: GitHubSVG,
        link: "https://github.com/spotlightify/spotlightify"
    },
    {
        title: "View set up instructions",
        description: "Click here to view instructions guiding you through setting up Spotlightify",
        icon: BookSVG,
        link: "https://github.com/spotlightify/spotlightify"
    }
]

function Spotlightify() {
    const [promptInput, setPromptInput] = useState("");
    const [commandTitles, setCommandTitles] = useState([])
    const [suggestions, setSuggestions] = useState<SuggestionData[]>(suggestionList)

    const handleAction = (action: string) => {
        window.location.href = action;
    }

    useEffect(() => {
        setSuggestions(suggestionList.filter((val) => val.title.toLowerCase().startsWith(promptInput.toLowerCase())))
    }, [promptInput])


    const onPromptChange = (event: { target: { value: any } }) => {
        const { value } = event.target;
        setPromptInput(value);
    };

    return (
        <div className="base">
            <div className="input-wrapper">
                <Image
                    className="spotify-logo"
                    src={SpotifyLogo}
                    alt="spotify logo"
                />
                {commandTitles.length !== 0 && (
                    <div className="command-title-container">
                        <div
                            className={`command-title-container__title`}
                        >
                            {commandTitles.join("/")}
                        </div>
                    </div>
                )}
                <Prompt
                    value={promptInput}
                    onChange={onPromptChange}
                    placeHolder={
                        "Spotlightify Search"
                    }
                />
            </div>
            <SuggestionsContainer
                suggestions={suggestions}
                actionHandler={handleAction}
            />
        </div>
    );
}

export default Spotlightify;
