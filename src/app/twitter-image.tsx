import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://hosnaqasmei.com/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            display: 'flex',
            fontSize: 70,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '70px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Hosna Qasmei
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
