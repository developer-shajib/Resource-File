'use client';
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { BiDesktop } from 'react-icons/bi';

export default function Home() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

  const options = [
    {
      icon: <BsFillSunFill />,
      text: 'light',
    },
    {
      icon: <BsFillMoonStarsFill />,
      text: 'dark',
    },

    {
      icon: <BiDesktop />,
      text: 'system',
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;

      case 'light':
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;

      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', (e) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  return (
    <>
      <section className='min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100'>
        <div className='fixed top-5 right-10 duration-100 dark:bg-slate-500 bg-gray-100 rounded'>
          {options?.map((opt) => (
            <button
              onClick={() => setTheme(opt.text)}
              key={opt.text}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-white pl-2 ${
                theme === opt.text && 'text-gray-700'
              }`}
            >
              {opt.icon}
            </button>
          ))}
        </div>
        <div className='max-w-3xl mx-auto px-5'>
          <div className='text-center'>
            <h2 className='text-7xl'>Code a Program</h2>
            <h5 className='text-5xl mb-6'>Share and Subscri</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, eum dignissimos! Sapiente sit fuga
            dicta mollitia sed commodi aliquid illum numquam! Ratione delectus odit vero eum. Distinctio repellendus
            perspiciatis nam accusamus id soluta aut reiciendis error excepturi, nihil quia sint eos incidunt amet neque
            ex quas laborum dolorum, dignissimos vero.
          </p>
          <b></b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, corporis similique impedit dolorum dolores
            illum neque distinctio quae eligendi, alias natus ad itaque nisi excepturi minus facilis repudiandae?
            Similique, eum facere consequuntur cumque voluptatibus officia esse mollitia laudantium dolorum vel illum
            harum ea saepe omnis nostrum iusto delectus? Soluta, eaque.
          </p>
        </div>
      </section>
    </>
  );
}
