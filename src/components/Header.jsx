import Link from "next/link"
import { ThemeButton } from '@components';


export function Header() {
  const buttonData = [
    {
      name: "5 Letters Words",
      link: "/5-latter-wordle-words"
    },
    {
      name: "6 Letters Words",
      link: "/6-latter-wordle-words"
    },
    {
      name: "7 Letters Words",
      link: "/7-latter-wordle-words"
    },
    {
      name: "8 Letters Words",
      link: "/8-latter-wordle-words"
    }
  ]
  return (
    <header>
      <div className="flex flex-wrap justify-center items-center place-items-center my-20 gap-5">
        {buttonData.map((d, index) => {
          return (
            <div key={index}>
              <Link href={d.link}><button className="border rounded-full px-5 py-2 hover:bg-[#509C2C] hover:text-white duration-300 ease-in">{d.name}</button></Link>
            </div>)
        })}
        <ThemeButton className="px-5 py-2" />
      </div>
    </header>
  );
}
