import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  try {
    const { platform, version } = await request.json();

    if (!platform || !version) {
      return NextResponse.json(
        { error: "Platform and version are required" },
        { status: 400 }
      );
    }

    const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Increment total downloads for the platform
    await kv.incr(`downloads:${platform}:total`);

    // Increment downloads for this specific version
    await kv.incr(`downloads:${platform}:${version}`);

    // Increment daily downloads
    await kv.incr(`downloads:${platform}:${date}`);

    // Get updated counts
    const [totalCount, versionCount, dailyCount] = await Promise.all([
      kv.get(`downloads:${platform}:total`),
      kv.get(`downloads:${platform}:${version}`),
      kv.get(`downloads:${platform}:${date}`),
    ]);

    return NextResponse.json({
      success: true,
      downloads: {
        total: totalCount,
        version: versionCount,
        daily: dailyCount,
      },
    });
  } catch (error) {
    console.error("Error tracking download:", error);
    return NextResponse.json(
      { error: "Failed to track download" },
      { status: 500 }
    );
  }
}
