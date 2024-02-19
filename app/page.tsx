import { getFrameMetadata } from '@coinbase/onchainkit';
import { getNftMetadata } from './lib/getNftMetadata';
import type { Metadata } from 'next';


const postUrl = "https://frwc-frame-carousel-v2.vercel.app/api/frame"; 

const pageLogo = "https://wizzypedia.s3.amazonaws.com/ttqfd9eooxmdfdav/thumb/Forgotten_Runes_Wizard%27s_Cult_Logo_Gold_on_Black.png/1600px-Forgotten_Runes_Wizard%27s_Cult_Logo_Gold_on_Black.png?20220707190021";
const imageLogo = "https://ipfs.everipedia.org/ipfs/QmX3mfU8uHgb2QYtP2S6pdN5FZbZ7Q95tcw61fEj2jDQFY"


const frameMetadata = getFrameMetadata({
  buttons: ['Discover Your Floor Wizard'],
  image: imageLogo,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: 'Random Floor Wizard',
  description: 'Random Floor Wizard',
  openGraph: {
    title: 'Random Floor Wizard',
    description: 'Random Floor Wizard',
    images: [imageLogo],
  },
  other: {
    'fc:frame:image:aspect_ratio': '1:1',
    'fc:frame:button:2': 'Join the Cult',
    'fc:frame:button:2:action': 'link',
    'fc:frame:button:2:target': `https://discord.com/invite/forgottenrunes`,
    ...frameMetadata,
  },
};
export default function Page() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '20px' }}>
      <header>
        <img src={pageLogo} alt="Logo" style={{ width:'100%', margin: '20px 0' }} />
      </header>
      <section>
        <h1>The next great fantasy franchise. Built on Web3</h1>
        <p>Forgotten Runes is the world's most robust decentralized franchise.</p>
        <p>Our media ecosystem is comprised of animation, physical comic books, and a suite of video games.</p>
        <p>At the core of these media expressions are our characters.</p>
        <p>And our characters are owned by our token holders.</p>
      </section>
      <a href="https://discord.com/invite/forgottenrunes">
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginBottom: '20px' }}>Join the Cult!</button>
      </a>
      <section>
        <h1>This is a Farcaster Frame made by <a href="https://warpcast.com/da0xlab" style={{ color: '#fff' }}>@da0xlab</a></h1>
      </section>
    </div>
  );
}
