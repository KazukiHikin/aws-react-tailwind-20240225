import React from "react";

const CreatPost = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">↓インストールしたもの↓</h1>
      <ul>
        <li className="list-disc">・viteでReact導入</li>
        <li>・tailwindcss導入</li>
        <li>・npm install react-router-domでルーティング導入</li>
        <li>・react-player 動画をWebページに埋め込むやつ</li>
        <li></li>
      </ul>
      <h1 className="text-2xl font-bold mt-10">↓つまずいた&時間がかかったところ↓</h1>
      <div>
        <p className="font-bold">
          ・react-playerで表示した動画サイズの変更方法が分からなかった。
        </p>
        <p>
          「react、動画埋め込み」のように検索するとreact-playがおすすめという記事がたくさん出てきたが、これの使い方を解説しているサイトが一つも無かった。調べていくとgithubに載っているらしいことが判明。「ReactPlayer
          GitHub」で検索してそれのReadMeに書いてあった。
        </p>
      </div>
      <div>
        <p className="font-bold">
          ・動画と画像の重ね合わせ時、z-indexが機能しない
        </p>
        <p>
          要素にpositionが設定されていないとz-indexが機能しない。cssのpositionプロパティをstatic以外（relativeやabsoluteなど）を定義する必要あり
        </p>
      </div>

    </>
  );
};

export default CreatPost;
