"use server";

export async function getLatestRelease() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/spotlightify/spotlightify/releases/latest",
      {
        // Ensure fresh data
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch release info");
    }

    const data = await response.json();
    return { version: data.tag_name };
  } catch (err) {
    return {
      error: "Failed to fetch version",
    };
  }
}
