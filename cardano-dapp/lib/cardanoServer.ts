import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Placeholder function for signing messages using WebAssembly.
 * @param {any} payload - The payload to sign.
 * @returns {string} The signed message.
 */
function signMessage(payload: any): string {
  const path = join(__dirname, 'cardano_message_signing_bg.wasm');
  const bytes = readFileSync(path);
  const wasmModule = new WebAssembly.Module(bytes);
  const wasmInstance = new WebAssembly.Instance(wasmModule, {});
  // Implement your message signing logic here using wasmInstance
  return 'signed_message';
}

/**
 * API handler to sign messages on the server.
 * @param {NextApiRequest} req - The API request object.
 * @param {NextApiResponse} res - The API response object.
 * @returns {Promise<void>}
 */
export default async function signMessageOnServer(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { payload } = req.body;
    const signature = signMessage(payload);
    res.status(200).json({ signature });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
}