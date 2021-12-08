import useTheme from 'hooks/useTheme'

import { themeLight } from 'styles/themes'

export default function Home () {
  useTheme(themeLight)

  return (
    <div>
      <br />
      <h1>
        Welcome to ColdChat!
      </h1>
      <br /><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, optio laboriosam, sapiente sed eos molestiae, earum magni sint tempora atque accusantium ratione. Dignissimos quia praesentium odit culpa perspiciatis fuga neque, nostrum provident quasi maxime autem incidunt, facere placeat qui commodi sit modi voluptate cumque velit ratione? Deserunt illum possimus et nisi autem ducimus aspernatur magni molestias, ipsa distinctio sunt ullam numquam exercitationem fugiat suscipit? Ut dicta expedita excepturi veniam consequuntur ipsam, nostrum fugiat voluptatum cupiditate tempore laboriosam, odit cum laborum harum dolores, maiores ad dolor nulla! Nisi dolorem quis similique asperiores cumque iusto a sequi. Dicta dolorem quas soluta.</p>
      <br /><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, optio laboriosam, sapiente sed eos molestiae, earum magni sint tempora atque accusantium ratione. Dignissimos quia praesentium odit culpa perspiciatis fuga neque, nostrum provident quasi maxime autem incidunt, facere placeat qui commodi sit modi voluptate cumque velit ratione? Deserunt illum possimus et nisi autem ducimus aspernatur magni molestias, ipsa distinctio sunt ullam numquam exercitationem fugiat suscipit? Ut dicta expedita excepturi veniam consequuntur ipsam, nostrum fugiat voluptatum cupiditate tempore laboriosam, odit cum laborum harum dolores, maiores ad dolor nulla! Nisi dolorem quis similique asperiores cumque iusto a sequi. Dicta dolorem quas soluta.</p>
    </div>
  )
}
