import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

import Wallet from "./dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(Wallet));

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );

    console.log(
      `Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`
    );
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
