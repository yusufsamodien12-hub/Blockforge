#!/usr/bin/env node

// Fetch the public Poly Haven textures list.
// The actual public API endpoint is hosted at https://api.polyhaven.com.
// This script requests the textures asset list with t=textures and prints JSON.

const url = 'https://api.polyhaven.com/assets?t=textures';

try {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'BlockForge/PolyHavenTextureFetcher/1.0',
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const json = await response.json();
  console.log(JSON.stringify(json, null, 2));
} catch (error) {
  console.error('Failed to fetch Poly Haven textures:', error);
  process.exit(1);
}
