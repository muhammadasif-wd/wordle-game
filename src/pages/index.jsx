import { Seo, Header } from '@components';

export default function Home() {
  
  return (
    <div>
      <Seo />
      <div className="my-20">
        <div>
          <h1 className='hero-header'>Wordle Game: Guess the Hidden Word</h1>
          <h1 className='hero-paragraph'>Choose a word puzzle with the length of the hidden word from 5 to 8 letters.</h1>
        </div>
      </div>
      <Header />
    </div>
  );
}
