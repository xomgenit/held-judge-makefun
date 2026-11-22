import { mkdirSync, writeFileSync } from "node:fs";

const text = `In the back seat, past midnight,
a child asleep under a coat,
the seatbelt loose across her chest.

Streetlights pass, one by one,
touch her face, and go.

Someone drives, humming low.
She need not know the way.
The road knows it.
The night holds the car,
and the car holds her.`;

mkdirSync("/output", { recursive: true });
// Write the 278-character poem exactly as authored, no trailing newline.
writeFileSync("/output/entry.txt", text, "utf8");
