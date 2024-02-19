import { NextRequest, NextResponse } from 'next/server';
import { getNftMetadata } from '../../lib/getNftMetadata';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const postUrl = "https://frwc-frame-carousel-v2.vercel.app/api/frame"; 
  const contractAddress = "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42";

  const page = await fetch(
    "https://api.reservoir.tools/tokens/v7?" + ("collection=" + contractAddress) + '&sortBy=floorAskPrice&limit=50' 
  );
  
  const listingsJson = await page.json();

  const max = 50;
  const randomToken = listingsJson.tokens[Math.floor(Math.random() * max)];
  const randomTokenId = randomToken.token.tokenId;

  const nftMetadata = await getNftMetadata(contractAddress, randomTokenId);

  const nftImageUrl = nftMetadata?.image?.cachedUrl;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${nftImageUrl} />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    
    <meta property="fc:frame:button:1" content="Discover Another Floow Wizard" />
    <meta property="fc:frame:post_url" content=${postUrl} />
    
    <meta property="fc:frame:button:2" content="${randomToken.market.floorAsk.price?.amount.native}Ξ on ${randomToken.market.floorAsk.source?.domain}" />

    <meta property="fc:frame:button:3" content="forgotten.market" />
    <meta property="fc:frame:button:3:action" content="link" />
    <meta property="fc:frame:button:3:target" content="https://forgotten.market/0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42/${randomTokenId}"/>
    
    </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
