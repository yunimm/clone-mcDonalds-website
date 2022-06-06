<script setup>
import { reactive } from 'vue'
import ReadMore from '@/components/ReadMore.vue'

const data = reactive({
  warning: {
    title: '特別なお知らせ',
    card: '新型コロナウイルス感染拡大防止の取り組みとお知らせ',
  },
  menu: {
    title: 'おすすめ',
    info: 'ただいまのお時間のおすすめメニューをご紹介します',
    others: 'もっと見る',
    card: [
      {
        id: 1,
        img: '../src/assets/menu-001.jpeg',
        name: 'ひるまック ビッグマック® セット',
        price: '￥600',
      },
      {
        id: 2,
        name: 'ひるまック てりやきチキンフィレオ セット',
        img: '../src/assets/menu-002.jpeg',
        price: '￥550',
      },
      {
        id: 3,
        name: 'ひるまック ダブルチーズバーガー セット',
        img: '../src/assets/menu-003.jpeg',
        price: '￥550',
      },
      {
        id: 4,
        name: 'ひるまック ダブルチーズバーガー セット',
        img: '../src/assets/menu-003.jpeg',
        price: '￥550',
      },
      {
        id: 5,
        name: 'ひるまック ダブルチーズバーガー セット',
        img: '../src/assets/menu-003.jpeg',
        price: '￥550',
      },
    ],
  },
  news: {
    title: '新着情報',
    card: [
      {
        id: 1,
        date: '2022.05.26',
        info: '大人気のコラボシェイクが4年ぶりにリニューアルして登場! “夏にぴったり” マクドナルド×「カルピス®」コラボ 第一',
      },
      {
        id: 2,
        date: '2022.05.26',
        info: '刺激的で爽やかな辛さの「スパイシーチキンマックナゲット」が今年も登場!夜マック®にはポテナゲ初!2種のナゲットを楽しめる「食べくらべポテナゲ大・特大」も!',
      },
      {
        id: 3,
        date: '2022.05.26',
        info: '大人もペロリ、不動の人気商品「ビッグマック®」キャンペーンビッグマックセットが2週間限定お得な550円!',
      },
      {
        id: 4,
        date: '2022.05.26',
        info: 'ハッピーセット®のおもちゃで楽しく考えて遊ぼう!恐竜・翼竜が生きた大迫力の世界観を再現したクラフトトイが登場!',
      },
      {
        id: 5,
        date: '2022.05.26',
        info: '大人もペロリ、不動の人気商品「ビッグマック®」キャンペーンビッグマックセットが2週間限定お得な550円!',
      },
    ],
  },
  newActions: {
    title: 'お知らせ',
    card: [
      {
        id: 1,
        date: '2022.06.03',
        info: '下平 篤雄「感謝とお別れの会(献花)」のご案内',
      },
      {
        id: 2,
        date: '2021.04.08',
        info: '50周年記念サイト公開中！ぜひご覧ください。',
      },
      {
        id: 3,
        date: '2021.11.25',
        info: 'ドライブスルーご利用状況のカメラ撮影のお知らせ',
      },
    ],
  },
  newAd: {
    card: [
      {
        id: 1,
        img: '../src/assets/ad-col-003.jpg',
        info: '今だけ!6/1(水)から6/14(火)まで「ビッグマック®」セットがおトクな550円!',
      },
      {
        id: 2,
        img: '../src/assets/ad-col-004.jpg',
        info: '「スパイシーチキンマックナゲット」が6/8(水)から期間限定で登場！',
      },
    ],
  },
  family: {
    card: [
      {
        id: 1,
        img: '../src/assets/card-001.png',
        title: 'ハッピーセット®',
      },
      {
        id: 2,
        img: '../src/assets/card-002.png',
        title: 'マックアドベンチャー®',
      },
      {
        id: 3,
        img: '../src/assets/card-003.png',
        title: 'バースデーパーティ',
      },
      {
        id: 4,
        img: '../src/assets/card-004.png',
        title: 'プレイランド',
      },
    ],
  },
  quality: {
    card: [
      {
        id: 1,
        img: '../src/assets/card-005.jpg',
        title: '100%ビーフの知るほどナルホド',
      },
      {
        id: 2,
        img: '../src/assets/card-006.png',
        title: '作り手の情熱',
      },
      {
        id: 3,
        img: '../src/assets/card-007.png',
        title: '食材の道のり',
      },
      {
        id: 4,
        img: '../src/assets/card-008.png',
        title: 'アレルギー・栄養・原産国情報',
      },
    ],
  },
  store: {
    card: [
      {
        id: 1,
        img: '../src/assets/card-009.png',
        title: '未来型店舗体験',
      },
      {
        id: 2,
        img: '../src/assets/card-010.png',
        title: 'マックデリバリー®（注文する）',
      },
      {
        id: 3,
        img: '../src/assets/card-011.png',
        title: 'ポイントサービス',
      },
      {
        id: 4,
        img: '../src/assets/card-012.png',
        title: 'お店をさがす',
      },
    ],
  },
  future: {
    card: [
      {
        id: 1,
        img: '../src/assets/card-013.png',
        title: 'ファミリーへのコミットメント',
      },
      {
        id: 2,
        img: '../src/assets/card-014.png',
        title: '持続可能な食材の調達',
      },
      {
        id: 3,
        img: '../src/assets/card-015.png',
        title: 'パッケージ＆リサイクル',
      },
    ],
  },
  society: {
    card: [
      {
        id: 1,
        img: '../src/assets/card-016.jpg',
        title: 'ドナルド・マクドナルド・ハウス支援',
      },
      {
        id: 2,
        img: '../src/assets/card-017.jpg',
        title: '学童野球',
      },
      {
        id: 3,
        img: '../src/assets/card-018.png',
        title: '小学生のサッカー',
      },
      {
        id: 4,
        img: '../src/assets/card-019.png',
        title: '食育支援',
      },
    ],
  },
  question: {
    card: [
      {
        id: 1,
        info: '最近ナゲットソースやシャカチキのシーズニングなど単体で販売していないようですが？',
      },
      {
        id: 2,
        info: 'ギガビッグマック®はいつまで販売していますか？',
      },
      {
        id: 3,
        info: 'ギガビッグマック®は株主優待券対象ですか？',
      },
      {
        id: 4,
        info: 'グランドビッグマック®は株主優待券対象ですか？',
      },
      {
        id: 5,
        info: '「リラックマのねそべりこものいれ」のフタが開けづらいのですが。',
      },
    ],
  },
  footer: {
    menu: {
      id: 1,
      title: 'メニュー',
      item: [
        {
          id: 1,
          title: 'おすすめ',
        },
        {
          id: 2,
          title: 'バーガー',
        },
        {
          id: 3,
          title: 'セット',
        },
        {
          id: 4,
          title: 'サイドメニュー',
        },
        {
          id: 5,
          title: 'ドリンク',
        },
        {
          id: 6,
          title: 'ハッピーセット®',
        },
        {
          id: 7,
          title: '朝マック',
        },
        {
          id: 8,
          title: '夜マック®',
        },
        {
          id: 9,
          title: 'スイーツ',
        },
        {
          id: 10,
          title: 'マックカフェ バイ バリスタ',
        },
      ],
    },
    actions: {
      id: 1,
      title: 'キャンペーン',
      item: [
        {
          id: 1,
          title: '商品',
        },
        {
          id: 2,
          title: 'ファミリーサービス',
        },
        {
          id: 3,
          title: 'インフォメーション',
        },
      ],
    },
    family: {
      id: 1,
      title: 'ファミリー',
      item: [
        {
          id: 1,
          title: 'おもちゃリサイクル',
        },
        {
          id: 2,
          title: 'マックアドベンチャー®',
        },
        {
          id: 3,
          title: 'ハッピーセット 本・おもちゃ紹介',
        },
        {
          id: 4,
          title: 'バースデーパーティー',
        },
        {
          id: 5,
          title: 'プレイランド',
        },
      ],
    },
    sustainable: {
      id: 1,
      title: 'サステナビリティ',
      item: [
        {
          id: 1,
          title: '安心でおいしいお食事を',
        },
        {
          id: 2,
          title: '地球環境のために',
        },
        {
          id: 3,
          title: '地域の仲間にサポートを',
        },
        {
          id: 4,
          title: '働きがいをすべての人に',
        },
        {
          id: 5,
          title: 'Smile Story',
        },
        {
          id: 6,
          title: 'マクドナルドとSDGs',
        },
        {
          id: 7,
          title: 'サステナビリティレポート',
        },
      ],
    },
    storeService: {
      id: 1,
      title: 'お店・サービス',
      item: [
        {
          id: 1,
          title: '未来型店舗体験',
        },
        {
          id: 2,
          title: '日本マクドナルド公式アプリ',
        },
        {
          id: 3,
          title: 'マックデリバリー®',
        },
        {
          id: 4,
          title: 'マックカフェ バイ バリスタ',
        },
        {
          id: 5,
          title: 'KODO',
        },
        {
          id: 6,
          title: 'ポイントサービス',
        },
        {
          id: 7,
          title: 'マクドナルド FREE Wi-Fi',
        },
        {
          id: 8,
          title: 'お支払い方法',
        },
      ],
    },
    aboutUs: {
      id: 1,
      title: '会社情報',
      item: [
        {
          id: 1,
          title: 'マクドナルドからのメッセージ',
        },
        {
          id: 2,
          title: '会社案内',
        },
        {
          id: 3,
          title: '社会とのつながり',
        },
        {
          id: 4,
          title: 'サステナビリティレポート',
        },
        {
          id: 5,
          title: 'ハンバーガー大学',
        },
        {
          id: 6,
          title: '土地・建物募集',
        },
        {
          id: 7,
          title: 'ニュースリリース',
        },
      ],
    },
    question: {
      id: 1,
      title: 'お問い合わせ',
      item: [
        {
          id: 1,
          title: 'お客様相談窓口',
        },
        {
          id: 2,
          title: 'よくあるご質問',
        },
      ],
    },
    job: {
      id: 1,
      title: '採用情報',
      item: [
        {
          id: 1,
          title: 'アルバイト採用',
        },
        {
          id: 2,
          title: '社員採用',
        },
        {
          id: 3,
          title: '障がい者採用',
        },
        {
          id: 4,
          title: 'フランチャイズ社員採用',
        },
      ],
    },
    sns: {
      id: 1,
      title: 'アプリ・SNS',
      item: [
        {
          id: 1,
          title: '公式アプリ',
        },
        {
          id: 2,
          title: 'Facebook',
        },
        {
          id: 3,
          title: 'Twitter',
        },
        {
          id: 4,
          title: 'YouTube',
        },
      ],
    },
  },
})
</script>
<template>
  <div class="w-full bg-grey-1">
    <div
      class="relative flex items-center justify-between bg-white py-3 px-4 shadow-md"
    >
      <div>三</div>
      <div class="absolute left-1/2 w-[54px] -translate-x-[27px]">
        <img src="../assets/mcd-xl-logo.svg" alt="logo on screen" />
      </div>
      <div>
        <img
          class="inline-block"
          src="../assets/icons/icon-magnifier.svg"
          alt="magnifier on screen"
        />
        <img
          class="inline-block"
          src="../assets/icons/icon-shopcart.svg"
          alt="shopcart on screen"
        />
      </div>
    </div>
    <div class="mt-4">
      <div class="carousel flex min-h-[296px] w-full">
        <div id="item1" class="carousel-item w-[100%]">
          <img src="../assets/ad-col-001.jpeg" class="w-full rounded-lg" />
        </div>
        <div id="item2" class="carousel-item w-[100%]">
          <img src="../assets/ad-col-002.jpg" class="w-full rounded-lg" />
        </div>
        <div id="item3" class="carousel-item w-[100%]">
          <img src="../assets/ad-col-003.jpg" class="w-full rounded-lg" />
        </div>
      </div>
      <div class="flex w-full justify-center gap-2 py-2">
        <a href="#item1" class="custom-btn btn btn-circle"></a>
        <a href="#item2" class="custom-btn btn btn-circle"></a>
        <a href="#item3" class="custom-btn btn btn-circle"></a>
      </div>
    </div>
    <div class="px-4">
      <div class="mt-8">
        <h3 class="h3-font-style mb-6 text-red-0">
          {{ data.warning.title }}
        </h3>
        <div
          class="flex h-17 items-center gap-4 rounded-xl bg-red-0 px-6 py-3 text-xs text-white"
        >
          <span>
            {{ data.warning.card }}
          </span>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.87497 3.67326L3.31159 2.25L10.125 9L3.31159 15.75L1.87497 14.3267L7.25173 9L1.87497 3.67326Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style mb-2">{{ data.menu.title }}</h3>
        <span class="span-font-style mb-4">{{ data.menu.info }}</span>
        <ul class="mt-4 flex w-full flex-wrap justify-between">
          <li
            v-for="item in data.menu.card"
            :key="item.id"
            class="mb-2 w-[49%] rounded-xl bg-white py-1 px-2 shadow-md"
          >
            <img :src="item.img" alt="menu on screen" class="rounded-t-xl" />
            <span class="span-font-style">{{ item.name }}</span>
            <div class="flex justify-between">
              <h2 class="h2-font-style">{{ item.price }}</h2>
              <div class="flex-center rounded-3xl border px-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                  fill="rgb(107 114 128)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.4196 6.72884H4.7963C4.08037 6.72884 3.5 6.14847 3.5 5.43254C3.5 5.34305 3.57255 5.27051 3.66204 5.27051H6.4196C7.48242 5.27051 8.41819 5.97069 8.71808 6.99032L12.181 18.7642C12.2983 19.1632 12.6645 19.4372 13.0804 19.4372H22.2037C22.9196 19.4372 23.5 20.0175 23.5 20.7335C23.5 20.823 23.4275 20.8955 23.338 20.8955H13.0804C12.0176 20.8955 11.0818 20.1953 10.7819 19.1757L7.31901 7.40181C7.20166 7.00283 6.83549 6.72884 6.4196 6.72884Z"
                    fill="rgb(107 114 128)"
                  ></path>
                  <circle
                    cx="13.5"
                    cy="24.333"
                    r="1.77083"
                    stroke="rgb(107 114 128)"
                    stroke-width="1.45833"
                  ></circle>
                  <circle
                    cx="21"
                    cy="24.333"
                    r="1.77083"
                    stroke="rgb(107 114 128)"
                    stroke-width="1.45833"
                  ></circle>
                  <path
                    d="M8.91675 8.9165H25.2216C25.8014 8.9165 26.204 9.49388 26.0036 10.0379L23.701 16.2879C23.5803 16.6155 23.2681 16.8332 22.919 16.8332H11.0001"
                    stroke="rgb(107 114 128)"
                    stroke-width="1.45833"
                  ></path>
                </svg>
                <button class="text-xs text-gray-500">注文</button>
              </div>
            </div>
          </li>
        </ul>
        <ReadMore>
          <slot>もっと見る</slot>
        </ReadMore>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">{{ data.news.title }}</h3>
        <ul class="mt-4 flex flex-col gap-4">
          <li
            v-for="item in data.news.card"
            :key="item.id"
            class="rounded-xl border p-4 shadow-md"
          >
            <h3 class="h3-font-style">{{ item.date }}</h3>
            <div class="flex gap-6 pr-2">
              <p class="font-bold line-clamp-2">
                {{ item.info }}
              </p>
              <img
                src="../assets/icons/icon-arrow-SR.svg"
                alt="arrow on screen"
              />
            </div>
          </li>
          <ReadMore>
            <slot> 一覧へ </slot>
          </ReadMore>
        </ul>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">{{ data.newActions.title }}</h3>
        <ul class="mt-4 flex flex-col gap-4">
          <li
            v-for="item in data.newActions.card"
            :key="item.id"
            class="rounded-xl border p-4"
          >
            <h3 class="h3-font-style">{{ item.date }}</h3>
            <p class="font-bold line-clamp-2">
              {{ item.info }}
            </p>
          </li>
        </ul>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">キャンペーン</h3>
        <span class="span-font-style"
          >マクドナルドの最新キャンペーンをチェック！</span
        >
        <ul class="cards my-4 flex flex-wrap justify-between gap-2">
          <a
            class="min-h-72 w-[48%]"
            href="#"
            v-for="item in data.newAd.card"
            :key="item.id"
          >
            <li class="h-full rounded-xl border shadow">
              <img :src="item.img" alt="ad" class="rounded-t-xl" />
              <p class="span-font-style p-2">
                {{ item.info }}
              </p>
            </li>
          </a>
        </ul>
        <ReadMore>
          <slot> 一覧へ </slot>
        </ReadMore>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">ファミリー</h3>
        <span class="span-font-style"
          >お子さまも大人も楽しめるサービスをご用意しています。</span
        >
        <ul class="cards flex flex-wrap justify-between gap-2">
          <a
            href="#"
            class="min-h-52 my-4 w-[48%]"
            v-for="item in data.family.card"
            :key="item.id"
          >
            <li class="rounded-xl shadow">
              <img :src="item.img" class="rounded-t-xl" alt="photo on screen" />
              <span class="span-font-style px-2">{{ item.title }}</span>
            </li>
          </a>
        </ul>
        <ReadMore>
          <slot>もっと見る</slot>
        </ReadMore>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">見える、マクドナルド品質</h3>
        <span class="span-font-style"
          >食の安全・安心のためにマクドナルドが取り組んでいることをご紹介します。</span
        >
        <ul class="cards flex flex-wrap justify-between gap-2">
          <a
            href="#"
            class="my-4 min-h-[217px] w-[48%]"
            v-for="item in data.quality.card"
            :key="item.id"
          >
            <li class="h-full rounded-xl shadow">
              <img :src="item.img" class="rounded-t-xl" alt="photo on screen" />
              <p class="span-font-style px-2">{{ item.title }}</p>
            </li>
          </a>
        </ul>
        <ReadMore>
          <slot>もっと見る</slot>
        </ReadMore>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">お店・サービス</h3>
        <span class="span-font-style"
          >マクドナルドにおけるさまざまなサービスをご紹介します。</span
        >
        <ul class="cards flex flex-wrap justify-between gap-2">
          <a
            href="#"
            class="my-4 min-h-[217px] w-[48%]"
            v-for="item in data.store.card"
            :key="item.id"
          >
            <li class="h-full rounded-xl shadow">
              <img :src="item.img" class="rounded-t-xl" alt="photo on screen" />
              <p class="span-font-style px-2">{{ item.title }}</p>
            </li>
          </a>
        </ul>
        <ReadMore>
          <slot>もっと見る</slot>
        </ReadMore>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">サステナビリティ</h3>
        <span class="span-font-style"
          >世界100カ国以上で親しまれているマクドナルドだからこそできる、持続可能な社会のための取り組みをご紹介します。</span
        >
        <ul class="cards flex flex-wrap justify-between gap-2">
          <a
            href="#"
            class="min-h-36 my-4 w-[48%]"
            v-for="item in data.future.card"
            :key="item.id"
          >
            <li class="h-full rounded-xl shadow">
              <img :src="item.img" class="rounded-t-xl" alt="photo on screen" />
              <p class="span-font-style px-2">{{ item.title }}</p>
            </li>
          </a>
        </ul>
        <ReadMore>
          <slot>もっと見る</slot>
        </ReadMore>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">社会とのつながり</h3>
        <span class="span-font-style"
          >子供たちの未来がより幸せなものでありますように、マクドナルドは社会貢献活動に取り組んでいます。</span
        >
        <ul class="cards flex flex-wrap justify-between gap-2">
          <a
            href="#"
            class="my-4 min-h-[217px] w-[48%]"
            v-for="item in data.society.card"
            :key="item.id"
          >
            <li class="h-full rounded-xl shadow">
              <img :src="item.img" class="rounded-t-xl" alt="photo on screen" />
              <p class="span-font-style px-2">{{ item.title }}</p>
            </li>
          </a>
        </ul>
        <ReadMore>
          <slot>もっと見る</slot>
        </ReadMore>
      </div>
      <!-- 相關疑問 -->
      <div class="mt-8">
        <h3 class="h3-font-style">よくあるご質問</h3>
        <span class="span-font-style">最近増えたご質問</span>
        <ul class="mt-4 flex flex-col gap-4">
          <li
            v-for="item in data.question.card"
            :key="item.id"
            class="h-20 rounded-xl border p-4 shadow"
          >
            <p class="span-font-style">{{ item.info }}</p>
          </li>
          <ReadMore>
            <slot>一覧を見る</slot>
          </ReadMore>
        </ul>
      </div>
      <!-- APP下載 -->
      <div class="mt-8 rounded-xl border">
        <img
          src="../assets/bg-001.svg"
          alt="background image of card on screen"
        />
      </div>
      <!-- 社群軟體 -->
      <div class="mt-16 rounded-xl border">
        <img src="../assets/bg-002.png" alt="" />
      </div>
    </div>
    <div class="bg-white">
      <div class="px-4">
        <h5 class="my-4 text-sm font-bold">ホーム</h5>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.menu.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.menu.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.actions.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.actions.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.sustainable.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.sustainable.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">
            {{ data.footer.storeService.title }}
          </h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.storeService.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.aboutUs.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.aboutUs.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.question.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.question.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.job.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.job.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-sm font-bold">{{ data.footer.sns.title }}</h5>
          <ul class="footer-ul-layout">
            <li
              class="footer-li-layout"
              v-for="i in data.footer.sns.item"
              :key="i.id"
            >
              {{ i.title }}
            </li>
          </ul>
        </div>
        <div class="mt-4 gap-4 border-t">
          <div class="mt-4 flex w-full items-center text-sm">
            <div class="flex w-1/2 items-center">
              <a class="text-red-0">日本語</a>
              <img
                src="../assets/icons/icon-red-check.svg"
                alt="red check on screen"
              />
            </div>

            <a class="w-1/2">English</a>
          </div>
          <ul class="mt-8 flex gap-2 text-xs text-gray-500">
            <li>利用規約</li>
            <li>|</li>
            <li>個人情報保護方針</li>
            <li>|</li>
            <li>法律に基づく情報</li>
            <li>|</li>
          </ul>
          <span class="text-xs text-gray-500"
            >日本マクドナルドホールディングス</span
          >
          <div class="my-8 flex items-end justify-between">
            <span class="text-xs text-gray-500"
              >©2022 McDONALD’S. All Rights Reserved.</span
            >
            <div class="w-14">
              <img src="../assets/mcd-xl-logo.svg" alt="logo on screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sticky bottom-0 w-full bg-white">
    <div class="flex items-center justify-between border-t-2 px-4">
      <div>
        <img
          src="../assets/icons/icon-M-shopcart.svg"
          alt="M's shopcart on screen"
        />
      </div>
      <div class="font-black">
        <h3>モバイルオーダー</h3>
        <span>スマホでスムーズに</span>
        <br />
        <span> ご注文・お支払い </span>
      </div>
      <div>
        <button class="rounded-xl bg-yellow-0 px-4">
          <span>今すぐ注文</span>
        </button>
      </div>
    </div>
  </div>
</template>
