import React from 'react';
import userIcon from '../images/user.svg';
import clockIcon from '../images/clock.svg';
import emptyFolderIcon from '../images/empty-folder.svg';

import '../styles/Feed.css';

export default function Feed(props) {
  if (props.posts.length === 0) {
    return (
      <div className='feed-status'>
        <img src={emptyFolderIcon} alt='Pasta vazia' />
        <h1>Não encontramos nada</h1>
        <h2>Parece que você e seus amigos não postaram nada. Comece a escrever uma nova história!</h2>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>
      <section className='feed'>
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>
            <footer>
              <div className='user-details'>
                <img src={userIcon} alt='Usuário' />
                <strong>{post.userName}</strong>
              </div>
              <div className='time'>
                <img src={clockIcon} alt='Relógio' />
                <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
} 