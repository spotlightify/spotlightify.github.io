import Image from "next/image";
import LogoSVG from "/public/logo.svg"; // replace with your actual SVG file path
import CreateAppImage from "/public/images/create_app.jpeg";
import FillFieldsImage from "/public/images/fill_fields.jpeg";
import ClickOnSettingsImage from "/public/images/click_on_settings.jpeg";
import IdAndSecretImage from "/public/images/id_and_secret.jpeg";
import AuthSuggestionsImage from "/public/images/auth_suggestions.png";
import AuthenticateImage from "/public/images/authenticate.png";

const codeClass = "bg-gray-800 text-white p-1 rounded-md";
const linkClass = "text-blue-500 underline";
const imageClass = "rounded-lg border border-gray-300";

export default function Page() {
    return (
        <div className="flex flex-col ml-6 mr-6 ">

            <div className="">
                <h2 className="text-3xl font-bold">Spotify Authentication Instructions</h2>
                <p className="mt-12">
                    To authenticate your Spotify Web API app with Spotlightify, follow these
                    simple steps:
                </p>
                <ol className="list-decimal list-inside mt-8">
                    <li>
                        Go to the Spotify Developer Dashboard at&nbsp;
                        <a className={linkClass} href="https://developer.spotify.com/dashboard">https://developer.spotify.com/dashboard/</a>.
                    </li>
                    <li>
                        Log in to your Spotify account. Please note that a Spotify premium account is required for this step.
                    </li>
                    <li className="mt-8">
                        Create a new app by clicking on the &quot;Create app&quot; button.
                        <div>
                            <Image className={imageClass} fill={false} src={CreateAppImage} alt="Create app button" />
                        </div>
                    </li>
                    <li className="mt-8">
                        Fill in the required fields as follows:
                        <ol className="list-decimal list-inside ml-6 break-words">
                            <li><strong>App Name:</strong> Spotlightify</li>
                            <li><strong>App Description:</strong> Spotlightify App</li>
                            <li>
                                <strong>Redirect URIs:</strong>&nbsp;
                                Copy <code className={codeClass}>http://localhost:49264/auth/callback</code>
                                , paste it in the textbox and click the &quot;Add&quot; button
                            </li>
                            <li>
                                <strong>Which API/SDKs are you planning yo use?</strong> Tick &quot;Web API&quot;
                            </li>
                            <li>Tick the &quot;I understand...&quot; checkbox</li>
                            <li>Click the &quot;Save&quot; button</li>
                        </ol>
                        <div>
                            <Image className={imageClass} fill={false} src={FillFieldsImage} alt="Create app form" />
                        </div>
                    </li>

                    <li className="mt-8">
                        Once your app is created, you will be redirected to the app dashboard.
                    </li>
                    <li className="mt-8">
                        Click on the &quot;Settings&quot; button.
                        <div>
                            <Image className={imageClass} fill={false} src={ClickOnSettingsImage} alt="Edit settings button" />
                        </div>
                    </li>
                    <li className="mt-8">
                        Copy the &quot;Client ID&quot; and &quot;Client Secret&quot; values from the app dashboard.
                        <div>
                            <Image className={imageClass} fill={false} src={IdAndSecretImage} alt="Copy credentials" />
                        </div>
                    </li>
                    <li className="mt-8">
                        In Spotlightify, click on each of the &quot;Add Spotify Client ID&quot; and &quot;Add Spotify Client
                        Secret&quot; buttons and paste your Client ID and Client Secret values individually.
                        <br />
                        <div>
                            <Image className={imageClass} fill={false} src={AuthSuggestionsImage} alt="Copy credentials" />
                        </div>
                    </li>
                    <li className="mt-8">
                        Click the &quot;Authenticate with Spotify&quot; button.
                        <br />
                        <div>
                            <Image className={imageClass} fill={false} src={AuthenticateImage} alt="Copy credentials" />
                        </div>
                    </li>

                    <li className="mt-8">
                        You&apos;re now ready to authenticate your app with Spotify! Enjoy using Spotlightify!
                    </li>
                </ol>
            </div>
        </div>
    );
}
