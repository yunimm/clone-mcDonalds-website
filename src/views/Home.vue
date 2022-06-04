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
})
</script>
<template>
  <div class="w-full bg-grey-1">
    <div
      class="relative flex items-center justify-between bg-white py-2 px-4 shadow-md"
    >
      <div>三</div>
      <div class="absolute left-1/2 w-[54px] -translate-x-[27px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 414 372"
        >
          <defs>
            <path id="a" d="M0 .203h273.817V240H0z" />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <path fill="#FFF" d="M0 0h414v372H0z" />
            <g transform="translate(70 66)">
              <mask id="b" fill="#fff">
                <use xlink:href="#a" />
              </mask>
              <path
                d="M196.81.202c-24.197 0-45.778 32.27-59.897 82.723C122.8 32.47 101.211.202 77.015.202 34.488.202-.001 107.566-.001 240.002h34.235c0-122.977 19.16-222.669 42.78-222.669 23.63 0 42.788 92.027 42.788 205.542h34.224c0-113.515 19.155-205.542 42.784-205.542 23.626 0 42.787 99.692 42.787 222.668h34.22C273.817 107.566 239.338.202 196.81.202"
                fill="#FFBC0D"
                mask="url(#b)"
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <svg
          class="inline-block"
          width="32"
          height="32"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h48v48H0z"></path>
            <g fill="#2D2D2D" fill-rule="nonzero">
              <path
                d="M22 11.5c6.351 0 11.5 5.149 11.5 11.5S28.351 34.5 22 34.5 10.5 29.351 10.5 23 15.649 11.5 22 11.5zm0 3a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"
              ></path>
              <path
                d="M30.327 28.098L28.2 30.212l8.036 8.089 2.129-2.114z"
              ></path>
            </g>
          </g>
        </svg>
        <svg
          class="ml-3 inline-block"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.4196 6.72884H4.7963C4.08037 6.72884 3.5 6.14847 3.5 5.43254C3.5 5.34305 3.57255 5.27051 3.66204 5.27051H6.4196C7.48242 5.27051 8.41819 5.97069 8.71808 6.99032L12.181 18.7642C12.2983 19.1632 12.6645 19.4372 13.0804 19.4372H22.2037C22.9196 19.4372 23.5 20.0175 23.5 20.7335C23.5 20.823 23.4275 20.8955 23.338 20.8955H13.0804C12.0176 20.8955 11.0818 20.1953 10.7819 19.1757L7.31901 7.40181C7.20166 7.00283 6.83549 6.72884 6.4196 6.72884Z"
            fill="#2D2D2D"
          ></path>
          <circle
            cx="13.5"
            cy="24.333"
            r="1.77083"
            stroke="#2D2D2D"
            stroke-width="1.45833"
          ></circle>
          <circle
            cx="21"
            cy="24.333"
            r="1.77083"
            stroke="#2D2D2D"
            stroke-width="1.45833"
          ></circle>
          <path
            d="M8.91675 8.9165H25.2216C25.8014 8.9165 26.204 9.49388 26.0036 10.0379L23.701 16.2879C23.5803 16.6155 23.2681 16.8332 22.919 16.8332H11.0001"
            stroke="#2D2D2D"
            stroke-width="1.45833"
          ></path>
        </svg>
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
            :id="item.id"
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
        <div class="flex items-center justify-end gap-2">
          <h2 class="text-right font-bold">もっと見る</h2>
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
              fill="#1F2937"
            ></path>
          </svg>
        </div>
      </div>
      <div class="mt-8">
        <h3 class="h3-font-style">{{ data.news.title }}</h3>
        <ul class="mt-4 flex flex-col gap-4">
          <li
            v-for="item in data.news.card"
            :id="item.id"
            class="rounded-xl border p-4 shadow-md"
          >
            <h3 class="h3-font-style">{{ item.date }}</h3>
            <div class="flex gap-6 pr-2">
              <p class="font-bold line-clamp-2">
                {{ item.info }}
              </p>
              <svg
                width="30"
                height="24"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.87497 3.67326L3.31159 2.25L10.125 9L3.31159 15.75L1.87497 14.3267L7.25173 9L1.87497 3.67326Z"
                  fill="#1F2937"
                ></path>
              </svg>
            </div>
          </li>
          <ReadMore>
            <slot> 一覧へ </slot>
          </ReadMore>
        </ul>
      </div>
      <!-- 最新消息 -->
      <div class="mt-8">
        <h3 class="h3-font-style">{{ data.newActions.title }}</h3>
        <ul class="mt-4 flex flex-col gap-4">
          <li
            v-for="item in data.newActions.card"
            :id="item.id"
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
            :id="item.id"
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
      <!-- 家庭 -->
      <div class="mt-8">
        <h3>家庭</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="cards flex flex-wrap justify-between gap-2">
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
        </ul>
        <h2 class="mt-4 text-right">查看更多資料</h2>
      </div>
      <!-- 品質 -->
      <div class="mt-8">
        <h3>品質</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="cards flex flex-wrap justify-between gap-2">
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
        </ul>
        <h2 class="mt-4 text-right">查看更多資料</h2>
      </div>
      <!-- 店舖資訊 -->
      <div class="mt-8">
        <h3>店舖資訊</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="cards flex flex-wrap justify-between gap-2">
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
        </ul>
        <h2 class="mt-4 text-right">查看更多資料</h2>
      </div>
      <!-- 未來展望 -->
      <div class="mt-8">
        <h3>未來展望</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="cards flex flex-wrap justify-between gap-2">
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
        </ul>
        <h2 class="mt-4 text-right">查看更多資料</h2>
      </div>
      <!-- 社會責任 -->
      <div class="mt-8">
        <h3>社會責任</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="cards flex flex-wrap justify-between gap-2">
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
          <li class="w-[48%] rounded-xl border bg-slate-300">
            <img src="../assets/menu-001.jpeg" alt="" />
            <p>Lorem ipsum dolor sit</p>
          </li>
        </ul>
        <h2 class="mt-4 text-right">查看更多資料</h2>
      </div>
      <!-- 相關疑問 -->
      <div class="mt-8">
        <h3>相關疑問</h3>
        <span>Lorem ipsum dolor sit amet</span>
        <ul class="mt-4 flex flex-col gap-4">
          <li class="rounded-xl border">
            <span>日期</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              magnam velit suscipit placeat sit repellat error possimus!
              Sapiente ab laboriosam vero?
            </p>
          </li>
          <li class="rounded-xl border">
            <span>日期</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              magnam velit suscipit placeat sit repellat error possimus!
              Sapiente ab laboriosam vero?
            </p>
          </li>
          <li class="rounded-xl border">
            <span>日期</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              magnam velit suscipit placeat sit repellat error possimus!
              Sapiente ab laboriosam vero?
            </p>
          </li>
          <h2 class="text-right">查看更多資料</h2>
        </ul>
      </div>
      <!-- APP下載 -->
      <div class="mt-8 rounded-xl border">
        <svg
          width="102px"
          height="193px"
          viewBox="0 0 102 287"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
          <title>Group 27</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <filter
              x="-2.1%"
              y="-3.8%"
              width="104.2%"
              height="107.5%"
              filterUnits="objectBoundingBox"
              id="filter-1"
            >
              <feOffset
                dx="0"
                dy="1"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
                type="matrix"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <polygon id="path-2" points="0 283 280 283 280 3 0 3"></polygon>
          </defs>
          <g
            id="Symbols"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="banners/app" transform="translate(-395.000000, 3.000000)">
              <g id="man02" filter="url(#filter-1)">
                <g id="Group-27" transform="translate(392.000000, -4.000000)">
                  <g
                    id="Group-2"
                    transform="translate(7.000000, 0.000000)"
                    fill="#FFBC0D"
                  >
                    <path
                      d="M0,0 L8,0 L8,158.676013 C8,163.272529 4.41886792,167 0,167 L0,0 Z"
                      id="Combined-Shape"
                    ></path>
                    <path
                      d="M0,290 L0,184.195876 C0,179.670103 3.58238994,176 8,176 L8,290 L0,290 Z"
                      id="Fill-17"
                    ></path>
                  </g>
                  <mask id="mask-3" fill="white">
                    <use xlink:href="#path-2"></use>
                  </mask>
                  <g id="Clip-7"></g>
                  <polygon
                    id="Fill-18"
                    fill="#FFBC0D"
                    mask="url(#mask-3)"
                    points="28 284 36 284 36 4 28 4"
                  ></polygon>
                  <g id="Group-4" mask="url(#mask-3)">
                    <g transform="translate(50.000000, -12.000000)">
                      <path
                        d="M0,90 C4.41886792,90 8,93.7067666 8,98.2777513 L8,295 L0,295 L0,90 Z"
                        id="Combined-Shape"
                        fill="#FFBC0D"
                      ></path>
                      <path
                        d="M0,71.7305942 L0,0 L8,0 L8,80 C3.58238994,80 0,76.2982707 0,71.7305942"
                        id="Fill-20"
                        fill="#FFBC0D"
                      ></path>
                      <path
                        d="M0,109 L0,90.20141 L0,88.1192439 C0,87.437762 0.572597137,86.8895589 1.19679094,87.0190656 C5.04766399,87.8162234 8,92.3527301 8,96.6553704 L8,97.999474 C8,100.947952 2.8655026,100.770666 0,109"
                        id="Fill-26"
                        fill="#DB0007"
                      ></path>
                    </g>
                  </g>
                  <polygon
                    id="Fill-14"
                    fill="#FFBC0D"
                    mask="url(#mask-3)"
                    points="71 284 79 284 79 4 71 4"
                  ></polygon>
                  <g id="Group-3" mask="url(#mask-3)" fill="#FFBC0D">
                    <g transform="translate(93.000000, 3.000000)">
                      <path
                        d="M0,281 L0,206.247996 C0,201.693442 3.58238994,198 8,198 L8,281 L0,281 Z"
                        id="Fill-10"
                      ></path>
                      <path
                        d="M0,188 L0,0 L8,0 L8,179.719496 C8,184.292001 4.41886792,188 0,188"
                        id="Fill-22"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <!-- 社群軟體 -->
      <div class="mt-16 rounded-xl border">
        <img src="../assets/bg-002.png" alt="" />
      </div>
    </div>
    <!-- footer -->
    <div class="bg-white">
      <div class="px-4">
        <h4>title</h4>
        <div>
          <h5>分類標題1</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題2</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題3</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題4</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題5</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題6</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題7</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題8</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>分類標題9</h5>
          <div class="flex justify-between">
            <ul class="bg-red-300">
              <li>Lorem ipsum sit</li>
              <li>Lorem</li>
              <li>Lorem dolor</li>
              <li>Lorem ip dolor sit</li>
            </ul>
            <ul class="bg-blue-300">
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ium dol sit</li>
              <li>Lorem ipsuor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lo ipsum do sit</li>
            </ul>
          </div>
        </div>
        <!-- 網站語言 -->
        <div class="mt-8 gap-4 border-t-2">
          <div class="flex w-full">
            <p class="w-1/2">日本語</p>
            <p class="w-1/2">English</p>
          </div>
          <ul class="flex gap-2 divide-x">
            <li>利用規約</li>
            <li>個人情報保護方針</li>
            <li>法律什麼的</li>
          </ul>
          <span>日本12345798</span>
          <div class="my-8 flex items-end justify-between">
            <span>copyright</span>
            <div class="w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 414 372"
              >
                <defs>
                  <path id="a" d="M0 .203h273.817V240H0z" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path fill="#FFF" d="M0 0h414v372H0z" />
                  <g transform="translate(70 66)">
                    <mask id="b" fill="#fff">
                      <use xlink:href="#a" />
                    </mask>
                    <path
                      d="M196.81.202c-24.197 0-45.778 32.27-59.897 82.723C122.8 32.47 101.211.202 77.015.202 34.488.202-.001 107.566-.001 240.002h34.235c0-122.977 19.16-222.669 42.78-222.669 23.63 0 42.788 92.027 42.788 205.542h34.224c0-113.515 19.155-205.542 42.784-205.542 23.626 0 42.787 99.692 42.787 222.668h34.22C273.817 107.566 239.338.202 196.81.202"
                      fill="#FFBC0D"
                      mask="url(#b)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bottom -->
  <div class="sticky bottom-0 w-full bg-white">
    <div class="flex items-center justify-between border-t-2 px-4">
      <div>
        <svg
          width="78"
          height="58"
          viewBox="0 8 78 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="41.0249"
            cy="62.8467"
            rx="31.7975"
            ry="2.9927"
            fill="#F1F1F1"
          ></ellipse>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.4062 42.5377C53.6734 42.0736 54.6207 41.7937 56.487 41.7937C58.3533 41.7937 59.3005 42.0736 60.5678 42.5377L61.458 41.7954C62.8276 37.1051 63.8367 30.3996 64.0399 28.9971H62.2194C61.8918 29.8687 60.357 33.2973 56.487 33.2973C52.6174 33.2973 51.0823 29.8687 50.7546 28.9971H48.9342C49.1373 30.3997 50.1466 37.1058 51.516 41.7954L52.4062 42.5377Z"
            fill="#DB0007"
          ></path>
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="48"
            y="28"
            width="17"
            height="15"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.4062 42.5377C53.6734 42.0736 54.6207 41.7937 56.487 41.7937C58.3533 41.7937 59.3005 42.0736 60.5678 42.5377L61.458 41.7954C62.8276 37.1051 63.8367 30.3996 64.0399 28.9971H62.2194C61.8918 29.8687 60.357 33.2973 56.487 33.2973C52.6174 33.2973 51.0823 29.8687 50.7546 28.9971H48.9342C49.1373 30.3997 50.1466 37.1058 51.516 41.7954L52.4062 42.5377Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M49.853 41.8801C50.0018 41.8801 50.1364 41.792 50.1959 41.6556L52.0127 37.4905C52.0836 37.4865 52.1537 37.4729 52.2211 37.4501C52.6355 37.3102 52.858 36.8608 52.7181 36.4464L50.6014 30.1773C50.4927 29.8553 50.1908 29.6386 49.851 29.6386H38.5312C38.1914 29.6386 37.8895 29.8553 37.7808 30.1773L38.1352 30.2969L37.7808 30.1773L35.6641 36.4464C35.6366 36.528 35.6225 36.6136 35.6225 36.6997C35.6225 37.122 35.9529 37.467 36.3692 37.4905L38.1863 41.6556C38.2458 41.792 38.3804 41.8801 38.5292 41.8801H49.853Z"
              stroke="white"
              stroke-width="0.748175"
              stroke-linejoin="round"
            ></path>
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.4344 28.4277H50.8965C50.9951 28.4277 51.0829 28.4912 51.1142 28.5853C51.2557 29.0093 52.6078 32.7279 56.4671 32.7279C60.3266 32.7279 61.6786 29.0093 61.8201 28.5853C61.8513 28.4912 61.9391 28.4277 62.0377 28.4277H63.5791C64.0282 27.0351 64.4467 25.7996 64.7968 24.3446C64.2561 24.18 63.353 24.3266 63.3008 24.5334C63.2116 24.8873 63.1565 25.07 63.0608 25.4212C62.8158 25.1473 62.3678 25.0069 61.8741 24.9596C61.7386 26.204 61.6038 26.6607 61.2797 27.9267C61.3435 26.353 61.4358 25.4802 61.7075 23.8516C61.1498 23.7383 60.4236 23.8308 60.1996 24.2361C60.0523 25.1658 59.9734 25.6812 59.9182 26.49C59.863 25.0231 59.8353 24.1745 59.7096 22.6508C59.0028 22.7075 58.3464 23.0357 58.2251 23.4744C58.2394 23.6741 58.2646 24.0171 58.2766 24.2159C57.7901 24.205 57.2641 24.4157 57.0733 24.5692C56.8567 25.6577 56.8511 26.3042 56.5522 27.4178C56.5522 27.4178 56.4313 26.5581 56.8458 22.9744C56.8706 22.7594 56.0761 22.2153 55.512 22.1398C55.3854 23.1831 55.2742 24.2248 55.1767 25.266C55.1211 24.0374 55.0266 22.8022 54.8909 21.5551C54.4618 21.479 53.5427 22.2478 53.5635 22.4602C53.8039 24.9193 53.8083 25.3089 53.8216 26.9549C53.6027 25.461 53.5117 24.91 53.3117 24.01C52.7484 24.0523 51.9445 24.6561 51.9859 24.8655C52.1852 25.8722 52.2241 26.3127 52.289 27.6303C52.0073 26.036 51.8058 25.5296 51.4446 23.9162C51.4227 23.818 50.4325 23.5183 49.8826 23.6655C50.1874 24.928 50.5275 26.1932 50.6609 27.4374C50.3479 26.6198 50.0569 25.7848 49.7927 24.9251C49.2454 25.0818 48.5493 26.1398 48.5805 26.2355C48.8445 27.046 49.1176 27.6525 49.4344 28.4277Z"
            fill="#FFBC0D"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57.7767 34.7021C57.252 34.7021 56.7839 35.4048 56.4775 36.5036C56.1715 35.4048 55.7032 34.7021 55.1784 34.7021C54.2561 34.7021 53.508 37.0403 53.508 39.9244H54.2504C54.2504 37.2463 54.6661 35.0752 55.1784 35.0752C55.691 35.0752 56.1064 37.0795 56.1064 39.5515H56.8488C56.8488 37.0795 57.2642 35.0752 57.7767 35.0752C58.2892 35.0752 58.7047 37.2463 58.7047 39.9244H59.4469C59.4469 37.0403 58.6992 34.7021 57.7767 34.7021Z"
            fill="#FFBC0D"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.01 26.8047C28.01 26.8047 30.6848 27.023 33.3596 27.023C36.0344 27.023 38.7093 26.8047 38.7093 26.8047C38.7093 26.8047 38.4917 30.562 38.1634 34.3378C37.8351 38.1137 37.3992 41.871 37.3992 41.871C37.3992 41.871 35.3794 42.0894 33.3596 42.0894C31.3399 42.0894 29.3201 41.871 29.3201 41.871C29.3201 41.871 28.8826 38.0952 28.5559 34.3378C28.2292 30.5805 28.01 26.8047 28.01 26.8047Z"
            fill="white"
          ></path>
          <mask
            id="mask1"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="28"
            y="26"
            width="11"
            height="17"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.01 26.8047C28.01 26.8047 30.6848 27.023 33.3596 27.023C36.0344 27.023 38.7093 26.8047 38.7093 26.8047C38.7093 26.8047 38.4917 30.562 38.1634 34.3378C37.8351 38.1137 37.3992 41.871 37.3992 41.871C37.3992 41.871 35.3794 42.0894 33.3596 42.0894C31.3399 42.0894 29.3201 41.871 29.3201 41.871C29.3201 41.871 28.8826 38.0952 28.5559 34.3378C28.2292 30.5805 28.01 26.8047 28.01 26.8047Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask1)"></g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.3178 33.6198C29.8065 31.8195 29.0692 30.5603 28.2287 30.1913C28.2284 30.1888 28.2284 30.1888 28.3079 31.27C29.044 32.4415 29.5741 35.7327 29.5741 39.6094H31.0616C31.0616 34.7514 31.8941 30.8128 32.921 30.8128C33.9479 30.8128 34.7806 35.0793 34.7806 40.3422H36.2677C36.2677 34.6745 34.7695 30.0796 32.921 30.0796C31.8696 30.0796 30.9316 31.4605 30.3178 33.6198Z"
            fill="#FFBC0D"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.7093 26.8047C38.7093 26.8047 38.4917 30.562 38.1634 34.3378C37.8351 38.1137 37.3992 41.871 37.3992 41.871C37.3992 41.871 35.3794 42.0894 33.3596 42.0894C34.9517 42.0894 35.7523 37.0527 35.7614 26.9793C37.3992 26.9139 38.7093 26.8047 38.7093 26.8047Z"
            fill="#EAEAEA"
            style="mix-blend-mode: multiply"
          ></path>
          <path
            d="M34.0802 15.4624L35.1613 15.6143L33.9108 24.5126L32.8085 24.5111L34.0802 15.4624Z"
            fill="#F1F1F1"
          ></path>
          <path
            d="M34.6208 15.5386L34.9451 15.5842L33.6903 24.5125L33.3597 24.512L34.6208 15.5386Z"
            fill="#DB0007"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.1783 24.9487H38.541C38.7011 24.9487 38.8377 25.0645 38.8641 25.2224L39.0368 26.2588C37.1444 26.4044 35.252 26.4772 33.3596 26.4772C31.4672 26.4772 29.5749 26.4044 27.6825 26.2588L27.8552 25.2224C27.8815 25.0645 28.0182 24.9487 28.1783 24.9487Z"
            fill="#EAEAEA"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.3919 24.2345C31.3811 24.1283 32.3704 24.0752 33.3596 24.0752C34.3489 24.0752 35.3381 24.1283 36.3274 24.2345C36.5114 24.2543 36.663 24.388 36.7057 24.5681L36.7441 24.7303H29.9752L30.0136 24.5681C30.0562 24.388 30.2078 24.2543 30.3919 24.2345Z"
            fill="#EAEAEA"
          ></path>
          <mask
            id="mask2"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="28"
            y="26"
            width="11"
            height="17"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.01 26.8047C28.01 26.8047 30.6848 27.023 33.3596 27.023C36.0344 27.023 38.7093 26.8047 38.7093 26.8047C38.7093 26.8047 38.4917 30.562 38.1634 34.3378C37.8351 38.1137 37.3992 41.871 37.3992 41.871C37.3992 41.871 35.3794 42.0894 33.3596 42.0894C31.3399 42.0894 29.3201 41.871 29.3201 41.871C29.3201 41.871 28.8826 38.0952 28.5559 34.3378C28.2292 30.5805 28.01 26.8047 28.01 26.8047Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask2)">
            <path
              d="M49.853 41.8801C50.0018 41.8801 50.1364 41.792 50.1959 41.6556L52.0127 37.4905C52.0836 37.4865 52.1536 37.4729 52.221 37.4501C52.6355 37.3102 52.858 36.8608 52.7181 36.4464L50.6014 30.1773C50.4927 29.8553 50.1908 29.6386 49.851 29.6386H38.5312C38.1914 29.6386 37.8895 29.8553 37.7808 30.1773L38.1352 30.2969L37.7808 30.1773L35.6641 36.4464C35.6366 36.528 35.6225 36.6136 35.6225 36.6997C35.6225 37.122 35.9529 37.467 36.3692 37.4905L38.1863 41.6556C38.2458 41.792 38.3804 41.8801 38.5292 41.8801H49.853Z"
              stroke="white"
              stroke-width="0.748175"
              stroke-linejoin="round"
            ></path>
          </g>
          <path
            d="M49.853 41.506H38.5292L36.2502 36.2817H52.132L49.853 41.506Z"
            fill="#C2945C"
          ></path>
          <path
            d="M52.0409 36.4907L51.2205 38.3715H37.162L36.3416 36.4907H52.0409Z"
            fill="#292929"
            fill-opacity="0.15"
          ></path>
          <path
            d="M38.1167 30.3519C38.1851 30.1492 38.3753 30.0127 38.5892 30.0127H49.793C50.007 30.0127 50.1971 30.1492 50.2655 30.3519L52.3276 36.4593C52.4368 36.7827 52.1963 37.1177 51.8551 37.1177H36.5272C36.1859 37.1177 35.9454 36.7827 36.0546 36.4593L38.1167 30.3519Z"
            fill="#C2945C"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.6317 32.4005C49.0643 32.4005 49.4153 34.1384 49.4153 36.2815H50.0423C50.0423 33.9731 49.4107 32.1021 48.6317 32.1021C48.1887 32.1021 47.7933 32.6645 47.5347 33.5438C47.276 32.6645 46.8807 32.1021 46.4374 32.1021C45.6588 32.1021 45.027 33.9731 45.027 36.2815H45.654C45.654 34.1384 46.005 32.4005 46.4374 32.4005C46.8704 32.4005 47.2212 34.0046 47.2212 35.983H47.8481C47.8481 34.0046 48.1992 32.4005 48.6317 32.4005Z"
            fill="#FFBC0D"
          ></path>
          <path
            d="M23.6922 41.3989H67.8346C68.11 41.3989 68.3333 41.6222 68.3333 41.8977C68.3333 42.9996 67.4401 43.8928 66.3382 43.8928H23.6922V41.3989Z"
            fill="#FFBC0D"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.5876 47.8504C66.5876 49.5032 65.2477 50.8431 63.5949 50.8431L28.9791 50.8431C26.8823 50.843 25.0093 49.5316 24.2921 47.5612L16.1796 25.2721C16.0361 24.8781 15.6615 24.6158 15.2422 24.6158L12.2202 24.6158C10.5674 24.6157 9.2275 23.2759 9.2275 21.623L9.2275 21.1243C9.2275 20.8488 9.45082 20.6255 9.72629 20.6255L15.2422 20.6255C17.339 20.6255 19.212 21.937 19.9292 23.9074L28.0417 46.1964C28.1852 46.5905 28.5598 46.8528 28.9791 46.8528L66.0888 46.8528C66.3643 46.8528 66.5876 47.0761 66.5876 47.3516L66.5876 47.8504Z"
            fill="#FFBC0D"
          ></path>
          <circle cx="32.4209" cy="56.1133" r="5.9854" fill="#292929"></circle>
          <circle cx="32.347" cy="56.0392" r="2.51239" fill="#F1F1F1"></circle>
          <path
            d="M34.0503 54.1182C34.5478 54.5851 34.8594 55.2538 34.8594 55.9965C34.8594 57.4077 33.7344 58.5518 32.3466 58.5518C31.6163 58.5518 30.9588 58.235 30.4997 57.7292C30.8563 57.9113 31.2591 58.0138 31.6853 58.0138C33.1462 58.0138 34.3304 56.8096 34.3304 55.324C34.3304 54.8949 34.2316 54.4892 34.0558 54.1292L34.0503 54.1182Z"
            fill="white"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.4039 56.1133C39.4039 52.2568 36.2775 49.1304 32.4209 49.1304C28.5643 49.1304 25.438 52.2568 25.438 56.1133H26.4355C26.4355 52.8077 29.1153 50.1279 32.4209 50.1279C35.7266 50.1279 38.4063 52.8077 38.4063 56.1133H39.4039Z"
            fill="white"
          ></path>
          <circle cx="58.8565" cy="56.1133" r="5.9854" fill="#292929"></circle>
          <circle cx="58.7826" cy="56.0392" r="2.51239" fill="#F1F1F1"></circle>
          <path
            d="M60.4858 54.1182C60.9833 54.5851 61.2949 55.2538 61.2949 55.9965C61.2949 57.4077 60.1699 58.5518 58.7821 58.5518C58.0518 58.5518 57.3943 58.235 56.9352 57.7292C57.2919 57.9113 57.6946 58.0138 58.1209 58.0138C59.5817 58.0138 60.7659 56.8096 60.7659 55.324C60.7659 54.8949 60.6671 54.4892 60.4913 54.1292L60.4858 54.1182Z"
            fill="white"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.8394 56.1133C65.8394 52.2568 62.713 49.1304 58.8564 49.1304C54.9999 49.1304 51.8735 52.2568 51.8735 56.1133H52.871C52.871 52.8077 55.5508 50.1279 58.8564 50.1279C62.1621 50.1279 64.8419 52.8077 64.8419 56.1133H65.8394Z"
            fill="white"
          ></path>
          <path
            d="M4.48905 34.6655H12.4696"
            stroke="#292929"
            stroke-width="0.997567"
            stroke-linecap="round"
          ></path>
          <path
            d="M4.23966 38.6558H16.2105"
            stroke="#292929"
            stroke-width="0.997567"
            stroke-linecap="round"
          ></path>
          <path
            d="M8.72871 42.646H18.7044"
            stroke="#292929"
            stroke-width="0.997567"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div>
        <h3>title</h3>
        <span>スマホでスムーズに</span>
        <br />
        <span> ご注文・お支払い </span>
      </div>
      <div>
        <button class="rounded-xl bg-yellow-0 px-4">
          <span>button</span>
        </button>
      </div>
    </div>
  </div>
</template>
